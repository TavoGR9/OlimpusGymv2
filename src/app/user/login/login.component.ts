import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConnectionService } from 'src/app/servicios/connection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  form: FormGroup;

  constructor (private fb: FormBuilder, 
    private router: Router,
    private http: ConnectionService,
    private toastr: ToastrService ){
    this.form = this.fb.group({
      data: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ingresar(){
    let bodyData = {
      data : this.form.value.data,
      password : this.form.value.password
    };
    console.log(bodyData);
    //this.toastr.success('Entraste', 'Exíto!!!');
    /*this.http.credenciales(this.form.value.data, this.form.value.password).subscribe({
      next: (resultData) =>{
        console.log(resultData);
        if(resultData == 1){
          this.toastr.success('Entraste', 'Exíto!!!');
        } else {
          this.toastr.error('Valida la información ingresada.', 'Error!!!');
        }
      },
      error: (error) => {
        console.error(error);
      }
    });*/

  }

  navegarPagina(url: String): void {
    //console.log("Va a navegar", url);
    this.router.navigate([ url ]);
  }
}
