import { Component, OnInit } from '@angular/core';
import { RogelioService } from 'src/app/servicios/rogelio.service';

@Component({
  selector: 'app-sucursales-lista',
  templateUrl: './sucursales-lista.component.html',
  styleUrls: ['./sucursales-lista.component.css']
})
export class SucursalesListaComponent implements OnInit {
  public gimnasios: any;
  public page: number = 0;
  public search: string = '';

  constructor(private http: RogelioService){}
  nextPage() {
    this.page += 5;
  }

  ngOnInit(): void {
    this.http.sucursaleslista().subscribe({
      next: (resultData) => {
        this.gimnasios = resultData;
        console.log(this.gimnasios);
      }, error: (error) => {
        console.error(error);
      }
    });
  }

  /*METODO ELIMINAR SUCURSAL*/
  borrarR(id: string){
    console.log(id);
  }

  /* INICIAN METODOS DE PAGINACION*/
  prevPage() {
    if ( this.page > 0 )
      this.page -= 5;
  }

  onSearchPokemon( search: string ) {
    this.page = 0;
    this.search = search;
  }
}
