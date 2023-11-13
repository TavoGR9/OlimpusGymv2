import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { PagoInscripcionService} from 'src/app/servicios/pago-inscripcion.service';
import { Router,  ActivatedRoute } from '@angular/router';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';

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
export class PagoInscripcionComponent implements OnInit {
  hide = true;
  form: FormGroup;
  radioSeleccionado!: string;
  matcher = new MyErrorStateMatcher();
  fecha: string = '';
  correo: any;
  // Inicializa responseData como un objeto vacío
  responseData: any = {};
  // Creacion de objeto de prueba para validaciones de pago
  responseData2: any = {
    "titulo": "Membresia basica",
    "nombreGym": "Gimansio suc.Panzacola",
    "duracion": "30",
    "precio": 299,
    "ID_Cliente": 59,
    "email": "pepe_pecas_pica_papas@gmail.com",
    "detalles": "Acceso completo",
    "fechaInicio": "10\/11\/2023",
    "fechaFin": "10\/12\/2023"
  };
  //Variable para menejar el pago de Paypal
  public payPalConfig?: IPayPalConfig;

  constructor (private fb: FormBuilder, private payInscripcion: PagoInscripcionService, private activeRoute: ActivatedRoute){

    this.correo = this.activeRoute.snapshot.paramMap.get('idEmail');

    this.form = this.fb.group({
      tc_nom: ['', Validators.compose([ Validators.required, Validators.pattern(/^[A-Za-zñÑáéíóú ]*[A-Za-z][A-Za-zñÑáéíóú ]*$/)])],
      tc_num: ['', Validators.compose([Validators.required, Validators.maxLength(16), Validators.pattern(/^(0|[1-9][0-9]*)$/)])],
      //tc_mes: ['', Validators.compose([ Validators.required])],
      //tc_ano: ['', Validators.compose([Validators.required, Validators.maxLength(4), Validators.pattern(/^(0|[1-9][0-9]*)$/)])],
      tc_fecha: ['', Validators.compose([Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)])],
      tc_cvv: ['', Validators.compose([Validators.required, Validators.maxLength(3), Validators.pattern(/^(0|[1-9][0-9]*)$/)])]
    })
  }

  cambiarSeleccion(radio: string) {
    if(radio === 'contenedor1'){
      this.form.reset();
      this.form.markAsPristine();
      this.form.markAsUntouched();
    }
    this.radioSeleccionado = radio;
  }

  hacerAlgo(){
    console.log("algo por aca")
  }

  formatearFecha() {
    const ahora = new Date();
    const anioActual = ahora.getFullYear().toString().slice(2, 4); // Obtiene los últimos 2 dígitos del año actual
    const mesActual = (ahora.getMonth() + 1).toString().padStart(2, '0'); // Obtiene el mes actual

    if (this.fecha.length === 2 && this.fecha.indexOf('/') === -1) {
      // Agregar "/" automáticamente después de ingresar los primeros 2 dígitos para el mes
      this.fecha += '/';
    } else if (this.fecha.length === 5) {
      // Validar el formato "MM/YY"
      const partes = this.fecha.split('/');
      const mes = partes[0];
      const anio = partes[1];

      if (parseInt(anio, 10) < parseInt(anioActual, 10) || (parseInt(anio, 10) === parseInt(anioActual, 10) && parseInt(mes, 10) < parseInt(mesActual, 10))) {
        // Si el año es menor al actual o si es igual pero el mes es menor al actual, restablecer la fecha
        this.fecha = '';
      }
    } else if (this.fecha.length > 5) {
      // Si la entrada supera los 5 caracteres (formato completo "MM/YY"), truncar la entrada
      this.fecha = this.fecha.slice(0, 5);
    }
  }

  ngOnInit(): void {
    this.initConfig();
    this.payInscripcion.consultarDataPago(this.correo).subscribe(respuesta =>{console.log(respuesta)
    this.responseData=respuesta;
    //console.log(this.responseData.titulo) 
    });
  }

  //Funcion pago con paypal *********** paypal - paypal - paypal - paypal - paypal - paypal - paypal- paypal
  private initConfig(): void {
    this.payPalConfig = {
    currency: 'MXN',
    clientId: 'AcXxpxeoadCNQcHM-pX-lS6w1A61T5tDNTXmOtaO2b-gtIyEibZmrgqG_EBNwv03t48H1-whDLWMJoPD',
    createOrderOnClient: (data) => <ICreateOrderRequest> {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'MXN',
            value: this.responseData2.precio,
            breakdown: {
              item_total: {
                currency_code: 'MXN',
                value: this.responseData2.precio
              }
            }
          },
          items: [
            {
              name: this.responseData2.titulo,
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'MXN',
                value: this.responseData2.precio,
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then((details: any) => {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },
    // Metodo que retorna los datos correspondientes al pago realizado por paypal
    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', JSON.stringify(data));
      //mandar datos a pantalla recibo
      //this.componentRecibo();
    },
    // Metodo que se activa cuando el usuario cierra la ventana de paypal
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
    },
    // Metodo que captura t pinta los errores
    onError: err => {
      console.log('OnError', err);
    },
    // Metodo que manda a llamar - abrir la ventana de paypal
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  }
/*
  componentRecibo(items, amount): void {
    
  }*/

}