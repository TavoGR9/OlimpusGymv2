import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {

  }

  navegarPagina(url: String): void {
    console.log("Va a navegar", url);

    this.router.navigate([ url ]);
  }

}
