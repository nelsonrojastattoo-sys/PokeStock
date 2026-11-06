import { Component } from '@angular/core';
import { Producto } from '../../models/Producto';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class InicioComponent {

  nombreProyecto = 'PokeStock';

  descripcion =
    'Tienda en línea especializada en productos Pokémon TCG';

  productoDestacado: Producto = {
    id: 'PROD001',
    nombre: 'Charizard ex',
    precio: 15000,
    stock: 3,
    rareza: 'UltraRara',
    tipoProducto: 'Carta',
    categoriaId: 'CAT001'
  };

  get precioFormateado(): string {
    return `₡${this.productoDestacado.precio}`;
  }

}