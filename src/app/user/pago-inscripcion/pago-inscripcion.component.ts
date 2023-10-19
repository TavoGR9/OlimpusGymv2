import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, formulario: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = formulario && formulario.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-pago-inscripcion',
  templateUrl: './pago-inscripcion.component.html',
  styleUrls: ['./pago-inscripcion.component.css']
})
export class PagoInscripcionComponent {
  hide = true;
  form: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor (private fb: FormBuilder){

    this.form = this.fb.group({
      cp: ['', Validators.compose([Validators.required, Validators.pattern(/^(0|[1-9][0-9]*)$/)])],
      estado: ['', Validators.compose([ Validators.required])],
      ciudad: ['', Validators.compose([ Validators.required])],
      colonia: ['', Validators.compose([ Validators.required])],
      calle: ['', Validators.compose([ Validators.required])],
      exterior: ['', Validators.compose([Validators.required, Validators.maxLength(5), Validators.pattern(/^(0|[1-9][0-9]*)$/)])],
      interior: ['']
    })    
  }

  hacerAlgo(){
    console.log("algo por aca")
  }

}
