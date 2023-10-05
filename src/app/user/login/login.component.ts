import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  form: FormGroup;

  constructor (private fb: FormBuilder, private router: Router){
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ingresar(){
    let bodyData = {
      email : this.form.value.email,
      contrasena : this.form.value.password
    };
    console.log(bodyData);
  }

  navegarRegistro() {
    console.log("Va a navegar");
    
    this.router.navigate(['registro']);
  }
}
