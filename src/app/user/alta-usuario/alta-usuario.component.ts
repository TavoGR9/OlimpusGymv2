import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router,  ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { MatDialog } from "@angular/material/dialog";
import { MensajeEmergentesComponent } from "../mensaje-emergentes/mensaje-emergentes.component";

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent {
  hide = true;
  form: FormGroup;
  message: string = "";

  constructor (public fb: FormBuilder, private clienteService:ClienteService,
    private router: Router, private activeRoute: ActivatedRoute,
    public dialog: MatDialog){
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apPaterno: ['', Validators.required],
      apMaterno: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      curp: ['', Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required],
      Gimnasio_idGimnasio:[2]
    })
  }
/*
  registrar(){
    let bodyData = {
      email : this.form.value.email,
      contrasena : this.form.value.password
    };
    console.log(bodyData);
  }*/

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
