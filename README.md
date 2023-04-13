# report

Esta es la documentacion de la implementacion de microfrontend de reportes, la cual se empaqueta en npm

## Configuracion

Para poder utilizar el microfrontend necesita intalar el paquete desde npm

```sh
pnpm add @hamelbarrero/report
```

o

```sh
npm i @hamelbarrero/report
```

Con el paquete instalado se requiere tener un elemento div en el aplicativo principal con el id `box_report` el cual mostrara los reportes

## Componentes

El microfrontend cuenta con sus propios componentes los cuales son de reporte como del Dashboard

`import Report from '@hamelbarrero/report/src'` -> Applicacion para montar en main.ts  
`import Dashboard from '@hamelbarrero/report/src/views/dashboard/DashboardView.vue';` -> Componente dashboard  
`import InsertionReport from '@hamelbarrero/report/src/components/reports/InsertionReport.vue';` -> Reporte insercion  
`import NotificationReport from '@hamelbarrero/report/src/components/reports/NotificationReport.vue';` -> Reporte notificacion  
`import ScheduleReport from '@hamelbarrero/report/src/components/reports/ScheduleReport.vue';` -> Reporte agendas

## Variables de entorno

Como el microfrontend es construido con `VITE` la configuracion para acceder a las variables de entorno tienen que inicir con el nombre `VITE`, ejemplo:

Variable local en proyecto principal

```sh
LOCALDATABASE="sql.db"
```

Implementacion en microfrontend

```sh
VITE_LOCALDATABASE="sql.db"
```
