export interface InsertionReport {
  origin: string;
  filename: string;
  xnomcor: string;
  xnomsed: string;
  fprgcit: number;
  hora: number;
  proccessStatus: string;
  proccessDate: string;
}

export interface ScheduleReport {
  id: string;
  profesionalName: string;
  patientName: string;
  specialty: string;
  pay: string;
  informedConsent: string;
  startDate: string;
  endDate: string;
}

export interface NotificationReport {
  notificationType: string;
  receiver: string;
  fromEmail: string;
  subject: string;
  toEmail: string;
  lastEventTime: string;
}
