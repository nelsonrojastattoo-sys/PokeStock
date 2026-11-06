import { Categoria } from "../models/Categoria.js";
import { Producto } from "../models/Producto.js";

export function contarProductosPorCategoria(
  categorias: Categoria[],
  productos: Producto[]
): Map<string, number> {
  const resultado = new Map<string, number>();

  categorias.forEach((categoria) => {
    const cantidad = productos.filter(
      (producto) => producto.categoriaId === categoria.id
    ).length;

    resultado.set(categoria.nombre, cantidad);
  });

  return resultado;
}

export function obtenerCategoriaConMasProductos(
  categorias: Categoria[],
  productos: Producto[]
): Categoria | undefined {
  return categorias.reduce((mayor, actual) => {
    const cantidadMayor = productos.filter(
      (producto) => producto.categoriaId === mayor.id
    ).length;

    const cantidadActual = productos.filter(
      (producto) => producto.categoriaId === actual.id
    ).length;

    return cantidadActual > cantidadMayor ? actual : mayor;
  });
}