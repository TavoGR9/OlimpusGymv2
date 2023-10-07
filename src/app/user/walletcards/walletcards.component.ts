import { Component  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-walletcards',
  templateUrl: './walletcards.component.html',
  styleUrls: ['./walletcards.component.css']
})
export class WalletcardsComponent {
  constructor(private router: Router) {

  }

  navegarPagina(url: String): void {
    console.log("Va a navegar", url);

    this.router.navigate([ url ]);
  }
}
