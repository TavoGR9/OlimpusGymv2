import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StripeServiceService {
private stripeApiUrl = 'https://api.stripe.com/v1';
  constructor(private http: HttpClient) { }

  createCustomer(email:string): Observable<any> {
    const url = `${this.stripeApiUrl}/customers`;
    const body = new FormData();
    body.append('email', email);
    return this.http.post(url,body);
  }

  createSubscription(customerId: string, priceId: string): Observable<any> {
    const url = `${this.stripeApiUrl}/subscriptions`;
    const body = new FormData();
    body.append('customer', customerId);
    body.append('items[0][price]', priceId);
    return this.http.post(url, body);
  }
}

