import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detailscard',
  templateUrl: './detailscard.component.html',
  styleUrls: ['./detailscard.component.css']
})
export class DetailscardComponent {
  constructor(private router: Router) {

  }

  navegarPagina(url: String): void {
    console.log("Va a navegar", url);

    this.router.navigate([ url ]);
  }
}
