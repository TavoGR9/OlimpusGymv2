import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConnectionService } from 'src/app/servicios/connection.service';
import {ErrorStateMatcher} from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, formulario: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = formulario && formulario.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-alta-colaborador',
  templateUrl: './alta-colaborador.component.html',
  styleUrls: ['./alta-colaborador.component.css']
})
export class AltaColaboradorComponent {
  hide = true;
  form: FormGroup;
  sucursales: any;

  
  constructor (private fb: FormBuilder, 
    private router: Router,
    private http: ConnectionService,
    private toastr: ToastrService ){

    this.form = this.fb.group({
      nombre: ['', Validators.compose([ Validators.required, Validators.pattern(/^[^\d]*$/)])],
      apPaterno: ['', Validators.compose([ Validators.required, Validators.pattern(/^[^\d]*$/)])],
      apMaterno: ['', Validators.compose([ Validators.required, Validators.pattern(/^[^\d]*$/)])],
      rfc: ['', Validators.compose([ Validators.required, Validators.pattern(/^[A-Za-zñÑ&]{1,2}([A-Za-zñÑ&]([A-Za-zñÑ&](\d(\d(\d(\d(\d(\d(\w(\w(\w)?)?)?)?)?)?)?)?)?)?)?$/)])],
      Gimnasio_idGimnasio: ['', Validators.compose([ Validators.required])],
      area: ['', Validators.compose([ Validators.required])],
      turnoLaboral: ['', Validators.compose([ Validators.required])],
      salario: ['', Validators.required, Validators.minLength(3), Validators.pattern(/^(0|[1-9][0-9]*)$/)],
      email: ['', Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)],
      pass: ['', Validators.required, Validators.minLength(8)]
    })

    
  }
  
  matcher = new MyErrorStateMatcher();
  ngOnInit():void{
    this.http.formAltaPersonal().subscribe({
      next: (resultData) => {
        console.log(resultData);
        this.sucursales = resultData;
      }
    })
  }

  registrar():any{
    console.log(this.form.value);

    this.http.agregarEmpleado(this.form.value).subscribe({
      next: (resultData) => {
        console.log(resultData);
        this.toastr.success('Empleado agregado correctamente.', 'Exíto!!!');
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
