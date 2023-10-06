import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConnectionService } from 'src/app/servicios/connection.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //propiedades input ver/ocultar contenido
  hide = true;
  //se declara variable de tipo formgroup para enlazar el formulario html
  form: FormGroup;

  //se declaran variables de tipo formbuilder para manejar el contenido de los campos
  // y router para vincular paginas
  //se usa validators para manejar y validar el contenido de los campos
  constructor (private fb: FormBuilder, 
    private router: Router,
    private http: HttpClient,
    private service: ConnectionService,
    private toastr: ToastrService ){
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  //funcion que maneja rescatar la informacion del formulario y enviarla a la conexion
  ingresar(){
    let bodyData = {
      user_data : this.form.value.email,
      contrasena : this.form.value.password
    };
    console.log(bodyData);
    this.toastr.success(this.form.value.email);

  }

  //funcion que reedirecciona a la pagina X
  navegarPagina(url: String): void {
    //console.log("Va a navegar", url);
    this.router.navigate([ url ]);
  }
  
}
