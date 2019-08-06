import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingService } from '../../services/service.index';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(public _ajustes: SettingService ) { }

  ngOnInit() {
  }
  cambiarColor( tema: string, link: any) {
      this.aplicarChek( link );
      this._ajustes.aplicarTema( tema );
    }
  aplicarChek( link: any ) {

    let selectores: any = document.getElementsByClassName('selector');

    for ( let ref of selectores) {
         ref.classList.remove('working');
  }

    link.classList.add('working');
  }
  colocarCheck(){

    let selectores: any = document.getElementsByClassName('selector');
    let tema =this._ajustes.ajustes.tema;
    for ( let ref of selectores) {
         if ( ref.getAttribute('date-theme') === tema ) {
            ref.classList.add('working');
            break;
   }
  }
 }
}


