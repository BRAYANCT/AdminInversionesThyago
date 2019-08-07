import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {
  menu: any = [{
    titulo: 'principal',
    icono: 'mdi mdi-guage',
   submenu: [
     {titulo: 'deshhboard', url: '/deshboard'},
     {titulo: 'progressBar', url: '/progress'},
     {titulo: 'Graficas', url: '/grafica1'},
     {titulo: 'promesas', url: '/promesas'},
     {titulo: 'rxjs', url: '/rxjs'}
   ]
  }
];

  constructor() { }
}
