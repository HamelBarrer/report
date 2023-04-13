import type { App } from 'vue';
import DashboardView from './views/dashboard/DashboardView.vue';

export default {
  install: (app: App) => {
    app.component('dashboard-view', DashboardView);
  },
};
