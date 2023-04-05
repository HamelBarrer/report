import { useHttp } from '../composables/useHttp';
import { database } from '../core/firebase';
import type {
  InsertionReport,
  NotificationReport,
  ScheduleReport,
} from '../types/report';
import type { User } from '../types/user';
import { getDate, getDateNow } from '../utils/date';
import { get, ref as refFirabase } from 'firebase/database';
import { ref } from 'vue';

export const useServiceReport = () => {
  const http = useHttp();
  const doctors = ref<User[]>([]);
  const patients = ref<User[]>([]);

  const fetchGetPatient = async () => {
    const data = await http.fetchGetKeycV1('/api/patient');
    data.forEach((patient: any) => {
      const { Id, Name, LastName } = patient;

      patients.value.push({ id: Id, name: Name, lastName: LastName });
    });

    return patients;
  };

  const fetchGetDoctor = async () => {
    const data = await http.fetchGetKeycV1('/api/user/doctors');

    data.forEach((doctor: any) => {
      const { Id, Name, LastName } = doctor;

      doctors.value.push({ id: Id, name: Name, lastName: LastName });
    });

    return doctors;
  };

  const fetchInsertionReport = async () => {
    const data = await http.fetchGet('/api/compensar');
    const dataInsertReport: InsertionReport[] = [];

    data.forEach(({ compensarAppointment }: any) => {
      const {
        origin,
        filename,
        xnomcor,
        xnomsed,
        fprgcit,
        hora,
        proccessStatus,
        proccessDate,
      } = compensarAppointment;

      dataInsertReport.push({
        origin,
        filename,
        xnomcor,
        xnomsed,
        fprgcit,
        hora,
        proccessStatus,
        proccessDate,
      });
    });

    return dataInsertReport;
  };

  const fetchInteractionReport = async () => {
    const interefFirabase = refFirabase(
      database,
      `interactions/${import.meta.env.VITE_VUE_APP_APP_ID}/${
        import.meta.env.VITE_VUE_APP_COMPANY_ID
      }`
    );

    const query = await get(interefFirabase);

    console.log(query);
  };

  const fetchScheduleReport = async () => {
    const scheduleReports: ScheduleReport[] = [];

    fetchGetDoctor();
    fetchGetPatient();

    const data = await http.fetchGet('/api/doctor', {
      from: '2022-01-01',
      to: getDateNow(),
    });

    data.forEach(({ schedule, scheduleProperties }: any) => {
      const {
        callAuthCode,
        dateSchedule,
        externalAuthCode,
        id,
        id_external,
        id_professional,
        id_user,
        type,
      } = schedule;
      const { creationDate, property, scheduleId, value } = scheduleProperties;

      const profesionalName = doctors.value.filter(
        (doctor) => doctor.id === id_professional
      )[0];
      const patient = patients.value.filter((pat) => pat.id === id_user)[0];

      scheduleReports.push({
        id,
        profesionalName: `${profesionalName.name} ${profesionalName.lastName}`,
        patientName: '',
        specialty: property === 'Specialty' ? property : 'Medicina General',
        pay: property === 'Paid' ? 'Pagado' : 'No pagado',
        informedConsent: property
          ? property === 'True'
            ? 'Firmado'
            : 'Rechazado'
          : 'No firmado',
        startDate: getDate(dateSchedule),
        endDate: property === 'EndDate' ? getDate(dateSchedule) : '',
      });
    });
    return scheduleReports;
  };

  const fetchEmailReport = async () => {
    const notificationReports: NotificationReport[] = [];

    const data = await http.fetchGet('/api/email', {
      company: import.meta.env.VITE_VUE_APP_COMPANY_ID,
    });

    data.forEach((report: any) => {
      const { from_email, subject, to_email, last_event_time } = report;

      notificationReports.push({
        notificationType: 'Email',
        receiver: '',
        fromEmail: from_email,
        subject,
        toEmail: to_email,
        lastEventTime: getDate(last_event_time),
      });
    });

    return notificationReports;
  };

  return {
    fetchInsertionReport,
    fetchInteractionReport,
    fetchScheduleReport,
    fetchGetPatient,
    fetchGetDoctor,
    fetchEmailReport,
  };
};
