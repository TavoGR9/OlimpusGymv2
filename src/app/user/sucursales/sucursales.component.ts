import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})

export class SucursalesComponent {
  form: FormGroup;
  casilleros: boolean = false;
  estacionamiento: boolean = false;
  bicicletero: boolean = false;
  energia: boolean = false;

  constructor (private fb: FormBuilder){
    this.form = this.fb.group({
      xi: ['']
    })
  }

  onNombreChange(event: any, nombre: string){
    let bodyData = {
      casilleros : this.casilleros,
      estacionamiento : this.estacionamiento,
      bicicletero : this.bicicletero,
      energia : this.energia
    };
    console.log(bodyData);
    //console.log(event + ': ' +nombre);
    //console.log(this.nombre2 + ' check2 estado');
    //console.log(this.nombrep + ' check1 estado');
  }

}
