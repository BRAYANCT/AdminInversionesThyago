import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(  @Inject(DOCUMENT) private _document ) {
                this.cargarAjustes();
  }
  guardarAjustes() {
    console.log('guardando tema');
    localStorage.setItem('ajustes' , JSON.stringify(this.ajustes));
  }

  cargarAjustes() {

    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      console.log('caragr tema');

      this.aplicarTema(this.ajustes.tema);

    } else {
      console.log('eseprar tema');
    }
  }
  aplicarTema(tema: string) {

    let url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.temaUrl = url;
    this.ajustes.tema = tema;

    this.guardarAjustes();
  }
}
interface Ajustes {
  temaUrl: string;
  tema: string ;
}
