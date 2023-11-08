import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { Router,  ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { MatDialog } from "@angular/material/dialog";
import { MensajeEmergentesComponent } from "../mensaje-emergentes/mensaje-emergentes.component";
import { ErrorStateMatcher } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import * as bcrypt from 'bcryptjs'; //encriptacion libreria
import { TestService } from 'src/app/servicios/test.service';

interface Food {
  value: string;
  viewValue: string;
}

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
  styleUrls: ['./alta-usuario.component.css'],
  
})
export class AltaUsuarioComponent {

  foods: Food[] = [
    {value: 'Aguascalientes', viewValue: 'Aguascalientes'},
    {value: 'Baja California', viewValue: 'Baja California'},
    {value: 'Baja California Sur', viewValue: 'Baja California Sur'},
    {value: 'Campeche', viewValue: 'Campeche'},
    {value: 'Chiapas', viewValue: 'Chiapas'},
    {value: 'Chihuahua', viewValue: 'Chihuahua'},
    {value: 'Coahuila', viewValue: 'Coahuila'},
    {value: 'Colima', viewValue: 'Colima'},
    {value: 'Ciudad de México', viewValue: 'CDMX'},
    {value: 'Durango', viewValue: 'Durango'},
    {value: 'Guanajuato', viewValue: 'Guanajuato'},
    {value: 'Guerrero', viewValue: 'Guerrero'},
    {value: 'Hidalgo', viewValue: 'Hidalgo'},
    {value: 'Jalisco', viewValue: 'Jalisco'},
    {value: 'México', viewValue: 'México'},
    {value: 'Michoacán', viewValue: 'Michoacán'},
    {value: 'Morelos', viewValue: 'Morelos'},
    {value: 'Nayarit', viewValue: 'Nayarit'},
    {value: 'Nuevo León', viewValue: 'Nuevo León'},
    {value: 'Oaxaca', viewValue: 'Oaxaca'},
    {value: 'Puebla', viewValue: 'Puebla'},
    {value: 'Querétaro', viewValue: 'Querétaro'},
    {value: 'San Luis Potosi', viewValue: 'San Luis Potosi'},
    {value: 'Sinaloa', viewValue: 'Sinaloa'},
    {value: 'Sonora', viewValue: 'Sonora'},
    {value: 'Tabasco', viewValue: 'Tabasco'},
    {value: 'Tamaulipas', viewValue: 'Tamaulipas'},
    {value: 'Tlaxcala', viewValue: 'Tlaxcala'},
    {value: 'Veracruz', viewValue: 'Veracruz'},
    {value: 'Yucatán', viewValue: 'Yucatán'},
    {value: 'Zacatecas', viewValue: 'Zacatecas'}
  ];
  hide = true;
  form: FormGroup;
  message: string = "";
  idMembresia:any;
  nameMembresia:any;
  precioId: any;
  email:any;

  constructor (public fb: FormBuilder, private clienteService:ClienteService, public testService:TestService,
    private router: Router, private activeRoute: ActivatedRoute,
    public dialog: MatDialog, private toastr: ToastrService){

      this.idMembresia = this.activeRoute.snapshot.paramMap.get('id');
      this.nameMembresia = this.activeRoute.snapshot.paramMap.get('idName');
      this.precioId = this.activeRoute.snapshot.paramMap.get('idPrecio');
      
    this.form = this.fb.group({
      nombre: ['', Validators.compose([ Validators.required, Validators.pattern(/^[A-Za-zñÑáéíóú ]*[A-Za-z][A-Za-zñÑáéíóú ]*$/)])],
      apPaterno: ['', Validators.compose([ Validators.required, Validators.pattern(/^[A-Za-zñÑáéíóú ]*[A-Za-z][A-Za-zñÑáéíóú ]*$/)])],
      apMaterno: ['', Validators.compose([ Validators.required, Validators.pattern(/^[A-Za-zñÑáéíóú ]*[A-Za-z][A-Za-zñÑáéíóú ]*$/)])],
      telefono: ['', Validators.compose([Validators.required, Validators.pattern(/^(0|[1-9][0-9]*)$/)])],
      codigoPostal: ['', Validators.compose([Validators.pattern(/^(0|[1-9][0-9]*)$/), Validators.minLength(5)])],
      ciudad: ['', Validators.compose([Validators.pattern(/^[A-Za-zñÑáéíóú ]*[A-Za-z][A-Za-zñÑáéíóú ]*$/)])],
      colonia: ['', Validators.compose([Validators.pattern(/^[A-Za-zñÑáéíóú ]*[A-Za-z][A-Za-zñÑáéíóú ]*$/)])],
      calle: ['', Validators.compose([Validators.pattern(/^[A-Za-zñÑáéíóú0-9 ]*[A-Za-z][A-Za-zñÑáéíóú0-9 ]*$/)])],
      numInter: ['', Validators.compose([Validators.pattern(/^(0|[1-9][0-9]*)$/)])],
      numExterno: ['', Validators.compose([Validators.pattern(/^(0|[1-9][0-9]*)$/)])],
      estado: [''],
      //direccion: ['', Validators.compose([ Validators.required, Validators.pattern(/^[A-Za-zñÑáéíóú0-9 ./#]*[A-Za-z][A-Za-zñÑáéíóú0-9 ./#]*$/)])],
      fechaNacimiento: ['', Validators.required],
      curp: ['', Validators.compose([ Validators.minLength(18), Validators.pattern(/^[A-ZÑ0-9]*[A-Z][A-ZÑ0-9]*$/)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)])],  
      pass: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      Gimnasio_idGimnasio:[testService.idGym],
      Membresia_idMem:[this.idMembresia]
    })
  }

  registrar(): any {
    //console.log("Me presionaste");
    //console.log(this.form.value.email);
    console.log(this.form.value);
    this.email=this.form.value.email;
    console.log(this.email);

    if(this.form.valid){

      this.clienteService.consultarEmail(this.email).subscribe((resultData) => {
        console.log(resultData.msg);
        if(resultData.msg == 'emailExist'){
          this.toastr.warning('El correo ingresado ya existe.', 'Alerta!!!');
          
        }
        if(resultData.msg == 'emailNotExist'){
          this.clienteService.agregarCliente(this.form.value).subscribe((respuesta) => {
            this.dialog.open(MensajeEmergentesComponent, {
              data: `Usuario registrado exitosamente`,
            })
            .afterClosed()
            .subscribe((cerrarDialogo: Boolean) => {
              if (cerrarDialogo) {
                this.router.navigate(['/stripePay', this.idMembresia, this.nameMembresia, this.precioId]);
              } else {
              }
            });
          });
        }
      });
    } else {
    // El formulario no es válido, muestra un mensaje de error
      this.message = "Por favor, complete todos los campos requeridos.";
    }
  }
}
