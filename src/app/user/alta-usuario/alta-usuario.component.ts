import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent {
  hide = true;
  form: FormGroup;

  constructor (private fb: FormBuilder){
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      paterno: ['', Validators.required],
      materno: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      nacimiento: ['', Validators.required],
      curp: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  registrar(){
    let bodyData = {
      email : this.form.value.email,
      contrasena : this.form.value.password
    };
    console.log(bodyData);
  }
}
