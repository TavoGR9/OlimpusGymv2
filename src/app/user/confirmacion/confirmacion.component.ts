import { Component, Input, OnInit } from '@angular/core';
import * as printJS from 'print-js';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {
  //Varibles con contenido correspondiente al monto e items de la compra
  //@Input() amount;
  //@Input() items;
  constructor( private spinner: NgxSpinnerService ){}

  ngOnInit(): void {
  }

  //Metodo que imprime el contenido de un elemento especifico de la pantalla html
  imprimirPantalla() {
    //this.spinner.show();
    printJS({
      //Se agrega el nombre-de-la-clase-o-id-del-elemento-a-imprimir
      printable: 'ticket_user',
      type: 'html',
      targetStyles: ['*'],
      documentTitle: 'Recibo de compra'
    });
  }

}
