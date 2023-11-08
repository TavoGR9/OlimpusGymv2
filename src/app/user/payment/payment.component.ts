import { Component, OnInit } from '@angular/core';
import { Stripe, loadStripe } from '@stripe/stripe-js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  stripe: Stripe | null = null;
  paymentHandler: any = null;
  idMembresia: any; // Propiedad para almacenar el ID de la membresía
  nameMembresia: any; // Propiedad para almacenar el nombre de la membresía
  precioId: any;

  constructor(private activeRoute: ActivatedRoute) {}

  async ngOnInit() {
    this.stripe = await loadStripe('pk_test_51O8Xe6H7O9a5IVLFmeNenwr6MX5c3C15TdnbuJ9gwoRFptyMYyrBT41Cc9Y8DXTWVAYzVHlc7uVCWLjb9COeaSaC00SSJXhGMK');
    this.paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'tu_clave_publica_de_stripe',
      locale: 'auto',
      token: (stripeToken: any) => {
        console.log(stripeToken);
        alert('Payment has been successful');
      }
    });

    this.idMembresia = this.activeRoute.snapshot.paramMap.get('idMembresia');
    this.nameMembresia = this.activeRoute.snapshot.paramMap.get('nameMembresia');
    this.precioId = this.activeRoute.snapshot.paramMap.get('precioId');
    


    console.log(this.idMembresia);
    console.log(this.nameMembresia);
    console.log(this.precioId);
  }

  makePayment() {
    if (this.paymentHandler) {
      this.paymentHandler.open({
        name: 'Nombre de tu gimnasio',
        description: this.nameMembresia,
        amount: this.precioId * 100, // Precio en centavos
      });
    }
  }
}
