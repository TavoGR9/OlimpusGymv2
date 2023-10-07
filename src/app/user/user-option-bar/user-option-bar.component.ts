import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-option-bar',
  templateUrl: './user-option-bar.component.html',
  styleUrls: ['./user-option-bar.component.css']
})
export class UserOptionBarComponent {

  constructor(private router: Router) {

  }

  navegarPagina(url: String): void {
    console.log("Va a navegar", url);

    this.router.navigate([ url ]);
  }
}
