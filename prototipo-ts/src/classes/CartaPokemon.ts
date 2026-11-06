import { ProductoBase } from "./ProductoBase.js";
import { Rareza } from "../models/Producto.js";

export class CartaPokemon extends ProductoBase {
  constructor(
    nombre: string,
    precio: number,
    stock: number,
    private rareza: Rareza
  ) {
    super(nombre, precio, stock);
  }

  mostrarInformacion(): string {
    return `
Carta Pokémon
-------------
Nombre: ${this.nombre}
Precio: ₡${this.precio}
Stock: ${this.stock}
Rareza: ${this.rareza}
`;
  }
}