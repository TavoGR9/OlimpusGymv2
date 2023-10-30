import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-miguel',
  templateUrl: './header-miguel.component.html',
  styleUrls: ['./header-miguel.component.css']
})
export class HeaderMiguelComponent {
  constructor(private router: Router) {

  }

  navegarPagina(url: String): void {
    console.log("Va a navegar", url);

    this.router.navigate([ url ]);
  }
}
