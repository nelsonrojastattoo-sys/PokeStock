import { Pedido } from "../models/Pedido.js";
import { Producto } from "../models/Producto.js";

export function calcularTotalPedido(
  pedido: Pedido,
  productos: Producto[]
): number {
  return pedido.productos.reduce((total, idProducto) => {
    const producto = productos.find(
      (producto) => producto.id === idProducto
    );

    return total + (producto?.precio ?? 0);
  }, 0);
}

export function validarDisponibilidadPedido(
  pedido: Pedido,
  productos: Producto[]
): boolean {
  return pedido.productos.every((idProducto) => {
    const producto = productos.find(
      (producto) => producto.id === idProducto
    );

    return producto !== undefined && producto.stock > 0;
  });
}