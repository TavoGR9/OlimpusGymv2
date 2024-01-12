import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PlanService } from 'src/app/servicios/plan.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  urlImages: string = 'https://olympus.arvispace.com/assets/img/prods-img/';
  plan: any;
  products: any;
  index: number = 0;
  image!: string;
  starIndex: number = 0;
  endIndex: number = 0;
  productsIndex: Product[] = [];
  constructor(private router: Router,  private planService:PlanService, private productshttp: HttpClient) {
  }

  ngOnInit(): void {
    this.planService.obternerPlan().subscribe(respuesta=>{console.log(respuesta)
    this.plan=respuesta;
    });

    this.planService.obtenerProducts().subscribe(respuesta=>{console.log(respuesta)
      this.products=respuesta;
      this.mostrarProducts();
    })
  }

  navegarPagina(url: String): void {
    console.log("Va a navegar", url);
    this.router.navigate([ url ]);
  }

  //muestra los productos al iniciar el componente, muestra solo de 3 en 3
  mostrarProducts() {
    this.starIndex = 0;
    this.endIndex = 2;

    if(this.products) {
      console.log("tengo datos :)");
      for(let i = this.starIndex; i <= this.endIndex; i++) {
        const product = { ...this.products[i] };
        product.imageurl = this.products[i].imageurl;
        this.productsIndex.push(product);
        console.log("ruta imagen:", product.imageurl);
      }
    } else {
      console.log("algo salió mal :( ");
    }
}


  //boton siguiente carrusel
  botonSiguiente() {
    this.productsIndex = [];

    // Verifica si hay elementos siguientes en el arreglo
    if (this.endIndex < this.products.length - 1) {
      this.starIndex += 3;
      this.endIndex += 3;

      for (let i = this.starIndex; i <= this.endIndex; i++) {
        if (this.products[i] && 'name' in this.products[i]) {
          const product = { ...this.products[i] };
          product.imageurl = this.products[i].imageurl;
          this.productsIndex.push(product);
          console.log("URL de la imagen:", product.imageurl);
          console.log("esto es lo que trae prodcut: ", product);
          console.log("esto es lo que tiene productindex: ", this.productsIndex);
        }
      }
    } else {
      this.mostrarProducts();
    }

    return this.productsIndex;
}

  
  
  
  
  botonAnterior() {
    this.productsIndex = [];
  
    if (this.starIndex > 0) {
      this.starIndex -= 3;
      this.endIndex -= 3;
    } else {
      // Has llegado al principio, muestra los últimos 3 productos
      this.starIndex = this.products.length - 3;
      this.endIndex = this.products.length - 1;
    }
  
    for (let i = this.starIndex; i <= this.endIndex; i++) {
      if (this.products[i] && 'name' in this.products[i]) {
        const product = { ...this.products[i] }; // Copia el producto
        this.productsIndex.push(product);
        console.log("URL de la imagen:", product.imageurl);
      }
    }
  
    return this.productsIndex;
  }
  
  


  //Boton anterior carrusel
  /*botonAnterior() {
    this.productsIndex = [];
  
    if (this.starIndex > 0) {
      this.starIndex -= 3;
      this.endIndex -= 3;
    } else {
      // Has llegado al principio, muestra los últimos 3 productos
      this.starIndex = this.products.length - 3;
      this.endIndex = this.products.length - 1;
    }
  
    for (let i = this.starIndex; i <= this.endIndex; i++) {
      if (this.products[i] && 'name' in this.products[i]) {
        const product = { ...this.products[i] }; // Copia el producto
        product.imageurl = this.urlImages + this.products[i].imageurl; // Asigna la URL de la imagen
        this.productsIndex.push(product);
        console.log("URL de la imagen:", product.imageurl);
      }
    }
  
    return this.productsIndex;
  }*/
  

}

interface Product {
  id: string;
  name: string;
  price: string;
  imageurl: string;
}
