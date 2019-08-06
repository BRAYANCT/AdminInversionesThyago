import { RouterModule , Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';


const pagesRoutes: Routes = [
    {
        path: '',
         component: PagesComponent,
        children: [
            {path: 'deshboard', component: DashboardComponent},
            {path: 'progress', component: ProgressComponent},
            {path: 'grafica1', component: Graficas1Component},
            {path: 'accout-setting', component: AccoutSettingsComponent},
            {path: '', redirectTo: '/deshboard', pathMatch: 'full'}
        ],
        },
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
