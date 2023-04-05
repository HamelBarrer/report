import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/report/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/report/reporte_insercion',
    name: 'reporteInsercion',
    component: () => import('../components/reports/InsertionReport.vue'),
  },
  {
    path: '/report/reporte_notification',
    name: 'reporteNotificacion',
    component: () => import('../components/reports/NotificationReport.vue'),
  },
  {
    path: '/report/reporte_schedule',
    name: 'reporteSchedul',
    component: () => import('../components/reports/ScheduleReport.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
