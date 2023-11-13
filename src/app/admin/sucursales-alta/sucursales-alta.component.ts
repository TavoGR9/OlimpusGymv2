import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConnectionService } from 'src/app/servicios/connection.service';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, formulario: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = formulario && formulario.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sucursales-alta',
  templateUrl: './sucursales-alta.component.html',
  styleUrls: ['./sucursales-alta.component.css']
})
export class SucursalesAltaComponent {
  hide = true;
  form: FormGroup;
  formHorario: FormGroup;
  sucursales: any;

  constructor (private fb: FormBuilder, 
    private router: Router,
    private http: ConnectionService,
    private toastr: ToastrService ){
      this.form = this.fb.group({
        nombreGym: ['', Validators.compose([ Validators.required, Validators.pattern(/^[^\d]*$/)])],
        telefono: ['', Validators.compose([Validators.required, Validators.pattern(/^(0|[1-9][0-9]*)$/)])],
        tipo: ['', Validators.compose([ Validators.required])],
        estado: ['', Validators.compose([ Validators.required, Validators.pattern(/^[^\d]*$/)])],
        ciudad: ['', Validators.compose([ Validators.required, Validators.pattern(/^[^\d]*$/)])],
        colonia: ['', Validators.compose([ Validators.required, Validators.pattern(/^[^\d]*$/)])],
        calle: ['', Validators.compose([ Validators.required, Validators.pattern(/^[^\d]*$/)])],
        codigoPostal: ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9]{5}$/)])],
        numExt: ['', Validators.compose([ Validators.required])],
        numInt: [''],
        casilleros: [false],
        estacionamiento: [false],
        energia: [false],
        bicicletero: [false]
      });

      this.formHorario = this.fb.group({
        Lunes: ['Lunes'],
        horaInicioLunes: { value: '', disabled: true },
        horaFinLunes: { value: '', disabled: true },
        Martes: ['Martes'],
        horaIniciomartes: { value: '', disabled: true },
        horaFinmartes: { value: '', disabled: true },
        miercoles: ["Miercoles"],
        horaIniciomiercoles: { value: '', disabled: true },
        horaFinmiercoles: { value: '', disabled: true },
        jueves: ["Jueves"],
        horaIniciojueves: { value: '', disabled: true },
        horaFinjueves: { value: '', disabled: true },
        viernes: ["Viernes"],
        horaInicioviernes: { value: '', disabled: true },
        horaFinviernes: { value: '', disabled: true },
        sabado: ["Sabado"],
        horaIniciosabado: { value: '', disabled: true },
        horaFinsabado: { value: '', disabled: true },
        domingo: ["Domingo"],
        horaIniciodomingo: { value: '', disabled: true },
        horaFindomingo: { value: '', disabled: true }
      });
    }

    matcher = new MyErrorStateMatcher();

    funciones(event: MatCheckboxChange, horaInicioControlName: string, horaFinControlName: string) {
      const checkbox = event.checked;
      const horaInicio = this.formHorario.get(`${horaInicioControlName}`);
      const horaFin = this.formHorario.get(`${horaFinControlName}`);
  
      if (checkbox) {
        horaInicio?.enable();
        horaFin?.enable();
        console.log(`${horaInicioControlName} habilitado`);
      } else {
        horaInicio?.disable();
        horaFin?.disable();
        console.log(`${horaInicioControlName} deshabilitado`);
      }
    }

    /**FUNCION PARA GUARDAR NUEVA SUCURSAL - GIMNASIO */
    registrar():any{}
}
