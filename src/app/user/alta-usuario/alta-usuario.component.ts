import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { Router,  ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { MatDialog } from "@angular/material/dialog";
import { MensajeEmergentesComponent } from "../mensaje-emergentes/mensaje-emergentes.component";
import {ErrorStateMatcher} from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import * as bcrypt from 'bcryptjs'; //encriptacion libreria

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, formulario: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = formulario && formulario.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent {
  hide = true;
  form: FormGroup;
  message: string = "";
  cliente: any;

  constructor (public fb: FormBuilder, private clienteService:ClienteService,
    private router: Router, private activeRoute: ActivatedRoute,
    public dialog: MatDialog, private toastr: ToastrService ){
    this.form = this.fb.group({
      nombre: ['', Validators.compose([ Validators.required, Validators.pattern(/^[A-Za-zñÑáéíóú ]*[A-Za-z][A-Za-zñÑáéíóú ]*$/)])],
      apPaterno: ['', Validators.compose([ Validators.required, Validators.pattern(/^[A-Za-zñÑáéíóú ]*[A-Za-z][A-Za-zñÑáéíóú ]*$/)])],
      apMaterno: ['', Validators.compose([ Validators.required, Validators.pattern(/^[A-Za-zñÑáéíóú ]*[A-Za-z][A-Za-zñÑáéíóú ]*$/)])],
      telefono: ['', Validators.compose([Validators.required, Validators.pattern(/^(0|[1-9][0-9]*)$/)])],
      direccion: ['', Validators.compose([ Validators.required, Validators.pattern(/^[A-Za-zñÑáéíóú0-9 ./#]*[A-Za-z][A-Za-zñÑáéíóú0-9 ./#]*$/)])],
      fechaNacimiento: ['', Validators.required],
      curp: ['', Validators.compose([ Validators.minLength(18), Validators.pattern(/^[A-ZÑ0-9]*[A-Z][A-ZÑ0-9]*$/)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)])],
      pass: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      Gimnasio_idGimnasio:[2]
    })
  }

  registrar(): any {
    console.log("Me presionaste");
    console.log(this.form.value);

    if(this.form.valid){
    this.clienteService.agregarCliente(this.form.value).subscribe((respuesta) => {
        this.dialog.open(MensajeEmergentesComponent, {
          data: `Usuario registrado exitosamente`,
        })
        .afterClosed()
        .subscribe((cerrarDialogo: Boolean) => {
          if (cerrarDialogo) {
            this.router.navigateByUrl("/index");
          } else {
            
          }
        });
    });
  } else {
    // El formulario no es válido, muestra un mensaje de error
    this.message = "Por favor, complete todos los campos requeridos.";
  }
}

}
