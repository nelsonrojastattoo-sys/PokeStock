import { Producto } from "../models/Producto.js";

export function obtenerProductosConStockBajo(
  productos: Producto[]
): Producto[] {
  return productos.filter((producto) => producto.stock < 5);
}

export function obtenerProductosDisponibles(
  productos: Producto[]
): Producto[] {
  return productos.filter((producto) => producto.stock > 0);
}