import { Component, OnInit } from '@angular/core';
import { resolve, reject } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contartres()  .then(
      mensaje => console.log ('termino ¡', mensaje)
    )
    .catch(error => console.log('error en la promesa', error));
  }



  ngOnInit() {
  }
  contartres(): Promise < boolean > {

  return  new Promise( ( resolve , reject) => {

    let contador = 0;

    let intervalo = setInterval(() => {

           contador += 1 ;
           console.log(contador);

           if (contador === 3) {
            resolve('ok');
           // reject('error');
            clearInterval( intervalo );
          }
        }, 1000);
    });

  }
}
