import { RouterModule , Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const pagesRoutes: Routes = [
    {
        path: '',
         component: PagesComponent,
        children: [
            {path: 'deshboard', component: DashboardComponent, data: {titulo : 'pagina inicio'} },
            {path: 'progress', component: ProgressComponent , data: {titulo : 'progreso'}},
            {path: 'grafica1', component: Graficas1Component , data: {titulo : 'graficos'}},
            {path: 'promesas', component: PromesasComponent , data: {titulo : 'promesas'}},
            {path: 'rxjs', component: RxjsComponent , data: {titulo : 'rxjs'}},
            {path: 'accout-setting', component: AccoutSettingsComponent , data: {titulo : 'ajustes del tema'}},
            {path: '', redirectTo: '/deshboard', pathMatch: 'full'}
        ],
        },
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
