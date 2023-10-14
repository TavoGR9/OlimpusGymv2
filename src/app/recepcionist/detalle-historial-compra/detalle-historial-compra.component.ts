import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-historial-compra',
  templateUrl: './detalle-historial-compra.component.html',
  styleUrls: ['./detalle-historial-compra.component.css']
})
export class DetalleHistorialCompraComponent {
  productList = [
    { imageUrl: '../../../assets/img/detalleHistorial-img/Proteina.jpg', name: 'Proteina', description: 'La proteína es un suplemento',cantidad :'2', price: 800.00 },
    { imageUrl: '../../../assets/img/detalleHistorial-img/Powerade.jpeg', name: 'Powerade', description: 'Descripción 2', cantidad :'4', price: 150.00},
    // Agrega más productos según sea necesario
  ];

  volverAComprar(product: any) {
    // Aquí puedes implementar la lógica para volver a comprar el producto.
    // Por ejemplo, agregar el producto al carrito de compras.
  }
}
