import { ProductoBase } from "./ProductoBase.js";

export class ProductoSellado extends ProductoBase {
  constructor(
    nombre: string,
    precio: number,
    stock: number,
    private cantidadSobres: number
  ) {
    super(nombre, precio, stock);
  }

  mostrarInformacion(): string {
    return `
Producto Sellado
----------------
Nombre: ${this.nombre}
Precio: ₡${this.precio}
Stock: ${this.stock}
Cantidad de sobres: ${this.cantidadSobres}
`;
  }
}