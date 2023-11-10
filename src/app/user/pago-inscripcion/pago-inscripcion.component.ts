import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, formulario: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = formulario && formulario.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-pago-inscripcion',
  templateUrl: './pago-inscripcion.component.html',
  styleUrls: ['./pago-inscripcion.component.css']
})
export class PagoInscripcionComponent implements OnInit {
  hide = true;
  form: FormGroup;
  radioSeleccionado!: string;
  matcher = new MyErrorStateMatcher();
  fecha: string = '';
  correo: any;
  // Inicializa responseData como un objeto vacío
  responseData: any = {};

  constructor (private fb: FormBuilder, private payInscripcion: PagoInscripcionService, private activeRoute: ActivatedRoute){

  constructor (private fb: FormBuilder){

    this.form = this.fb.group({
      tc_nom: ['', Validators.compose([ Validators.required, Validators.pattern(/^[A-Za-zñÑáéíóú ]*[A-Za-z][A-Za-zñÑáéíóú ]*$/)])],
      tc_num: ['', Validators.compose([Validators.required, Validators.maxLength(16), Validators.pattern(/^(0|[1-9][0-9]*)$/)])],
      //tc_mes: ['', Validators.compose([ Validators.required])],
      //tc_ano: ['', Validators.compose([Validators.required, Validators.maxLength(4), Validators.pattern(/^(0|[1-9][0-9]*)$/)])],
      tc_fecha: ['', Validators.compose([Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)])],
      tc_cvv: ['', Validators.compose([Validators.required, Validators.maxLength(3), Validators.pattern(/^(0|[1-9][0-9]*)$/)])]
    })
  }

  cambiarSeleccion(radio: string) {
    this.radioSeleccionado = radio;
  }

  hacerAlgo(){
    console.log("algo por aca")
  }

  formatearFecha() {
    const ahora = new Date();
    const anioActual = ahora.getFullYear().toString().slice(2, 4); // Obtiene los últimos 2 dígitos del año actual
    const mesActual = (ahora.getMonth() + 1).toString().padStart(2, '0'); // Obtiene el mes actual

    if (this.fecha.length === 2 && this.fecha.indexOf('/') === -1) {
      // Agregar "/" automáticamente después de ingresar los primeros 2 dígitos para el mes
      this.fecha += '/';
    } else if (this.fecha.length === 5) {
      // Validar el formato "MM/YY"
      const partes = this.fecha.split('/');
      const mes = partes[0];
      const anio = partes[1];

      if (parseInt(anio, 10) < parseInt(anioActual, 10) || (parseInt(anio, 10) === parseInt(anioActual, 10) && parseInt(mes, 10) < parseInt(mesActual, 10))) {
        // Si el año es menor al actual o si es igual pero el mes es menor al actual, restablecer la fecha
        this.fecha = '';
      }
    } else if (this.fecha.length > 5) {
      // Si la entrada supera los 5 caracteres (formato completo "MM/YY"), truncar la entrada
      this.fecha = this.fecha.slice(0, 5);
    }
  }

}
