import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConnectionService } from 'src/app/servicios/connection.service';

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
      nombre: new FormControl('', [Validators.required, Validators.pattern(/^[^\d]*$/)]),

      
      apPaterno: ['', Validators.required],
      apMaterno: ['', Validators.required],
      rfc: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(13),
        Validators.minLength(12)
      ])],
      Gimnasio_idGimnasio: ['', Validators.required],
      area: ['', Validators.required],
      turnoLaboral: ['', Validators.required],
      salario: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email,
      ])],
      pass: ['', Validators.required]
    })
  }

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
