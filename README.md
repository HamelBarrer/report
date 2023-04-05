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

## Rutas

El microfrontend cuenta con sus propias rutas para la implementacion de cada reporte

`/report/reporte_insercion` -> Reporte insercion  
`/report/reporte_notification` -> Reporte notificacion  
`/report/reporte_schedule` -> Reporte Agenda

Para poder acceder a las rutas del aplicativo se necesita importar `import { routes } from '@hamelbarrero/report/src/router';`, en el aplicativo principal en la seccion de las rutas se agregan las rutas importadas

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
