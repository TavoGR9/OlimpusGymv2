import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent {
  form: FormGroup;

  constructor (private fb: FormBuilder){
    this.form = this.fb.group({
      email: ['', Validators.required]
    })
  }

  enviar(){
    let bodyData = {
      email : this.form.value.email
    };
    console.log(bodyData);
  }
}
