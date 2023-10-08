import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent {
  hide = true;
  form: FormGroup;

  constructor(private router: Router, private fb: FormBuilder){
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      paterno: ['', Validators.required],
      materno: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      nacimiento: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  guardar(){
    let bodyData = {
      email : this.form.value.email,
      contrasena : this.form.value.password
    };
    console.log(bodyData);
  }

  navegarPagina(url: String): void {
    console.log("Va a navegar", url);

    this.router.navigate([ url ]);
  }
}
