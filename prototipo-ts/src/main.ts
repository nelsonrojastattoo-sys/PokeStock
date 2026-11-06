import { Categoria } from "./models/Categoria.js";
import { Producto } from "./models/Producto.js";
import { Pedido } from "./models/Pedido.js";

import { Repositorio } from "./repositories/Repositorio.js";

import {
  obtenerProductosConStockBajo,
  obtenerProductosDisponibles
} from "./utils/productoUtils.js";

import {
  contarProductosPorCategoria,
  obtenerCategoriaConMasProductos
} from "./utils/categoriaUtils.js";

import {
  calcularTotalPedido,
  validarDisponibilidadPedido
} from "./utils/pedidoUtils.js";

import { CartaPokemon } from "./classes/CartaPokemon.js";
import { ProductoSellado } from "./classes/ProductoSellado.js";

/* =========================
   DATOS DE PRUEBA
========================= */

const categorias: Categoria[] = [
  {
    id: "CAT001",
    nombre: "Scarlet & Violet",
    descripcion: "Expansion principal",
    fechaLanzamiento: new Date("2023-03-31")
  },
  {
    id: "CAT002",
    nombre: "Obsidian Flames",
    fechaLanzamiento: new Date("2023-08-11")
  },
  {
    id: "CAT003",
    nombre: "Temporal Forces",
    fechaLanzamiento: new Date("2024-03-22")
  },
  {
    id: "CAT004",
    nombre: "Surging Sparks",
    fechaLanzamiento: new Date("2024-11-08")
  },
  {
    id: "CAT005",
    nombre: "Prismatic Evolutions",
    fechaLanzamiento: new Date("2025-01-17")
  }
];

const productos: Producto[] = [
  {
    id: "PROD001",
    nombre: "Charizard ex",
    precio: 15000,
    stock: 3,
    rareza: "UltraRara",
    tipoProducto: "Carta",
    categoriaId: "CAT001"
  },
  {
    id: "PROD002",
    nombre: "Pikachu ex",
    precio: 8000,
    stock: 10,
    rareza: "Rara",
    tipoProducto: "Carta",
    categoriaId: "CAT004"
  },
  {
    id: "PROD003",
    nombre: "Mew ex",
    precio: 12000,
    stock: 0,
    rareza: "UltraRara",
    tipoProducto: "Carta",
    categoriaId: "CAT005"
  },
  {
    id: "PROD004",
    nombre: "Elite Trainer Box",
    precio: 35000,
    stock: 4,
    rareza: "Secreta",
    tipoProducto: "ETB",
    categoriaId: "CAT003"
  },
  {
    id: "PROD005",
    nombre: "Booster Box",
    precio: 80000,
    stock: 2,
    rareza: "Secreta",
    tipoProducto: "BoosterBox",
    categoriaId: "CAT004"
  }
];

const pedidos: Pedido[] = [
  {
    id: "PED001",
    cliente: "Juan Perez",
    productos: ["PROD001", "PROD002"],
    total: 0,
    estado: "Pendiente"
  },
  {
    id: "PED002",
    cliente: "Ana Mora",
    productos: ["PROD003"],
    total: 0,
    estado: "Confirmado"
  },
  {
    id: "PED003",
    cliente: "Carlos Rojas",
    productos: ["PROD004"],
    total: 0,
    estado: "Preparando"
  },
  {
    id: "PED004",
    cliente: "Laura Soto",
    productos: ["PROD002", "PROD005"],
    total: 0,
    estado: "Enviado"
  },
  {
    id: "PED005",
    cliente: "Mario Vargas",
    productos: ["PROD001"],
    total: 0,
    estado: "Entregado"
  }
];

/* =========================
   REPOSITORIOS
========================= */

const repositorioCategorias = new Repositorio<Categoria>();
const repositorioProductos = new Repositorio<Producto>();
const repositorioPedidos = new Repositorio<Pedido>();

categorias.forEach((categoria) =>
  repositorioCategorias.agregar(categoria)
);

productos.forEach((producto) =>
  repositorioProductos.agregar(producto)
);

pedidos.forEach((pedido) =>
  repositorioPedidos.agregar(pedido)
);

/* =========================
   ENCABEZADO
========================= */

console.log("=================================");
console.log("POKESTOCK");
console.log("PROTOTIPO TYPESCRIPT");
console.log("=================================");

console.log("\nRESUMEN GENERAL");
console.log("------------------------");
console.log(`Categorias: ${categorias.length}`);
console.log(`Productos: ${productos.length}`);
console.log(`Pedidos: ${pedidos.length}`);

/* =========================
   REGLAS DE PRODUCTO
========================= */

console.log("\nPRODUCTOS CON STOCK BAJO");
console.log("------------------------");

obtenerProductosConStockBajo(productos).forEach(
  (producto) => console.log(producto.nombre)
);

console.log("\nPRODUCTOS DISPONIBLES");
console.log("------------------------");

obtenerProductosDisponibles(productos).forEach(
  (producto) => console.log(producto.nombre)
);

/* =========================
   REGLAS DE CATEGORIA
========================= */

console.log("\nPRODUCTOS POR CATEGORIA");
console.log("------------------------");

const conteoCategorias =
  contarProductosPorCategoria(
    categorias,
    productos
  );

conteoCategorias.forEach(
  (cantidad, categoria) => {
    console.log(`${categoria}: ${cantidad}`);
  }
);

console.log("\nCATEGORIA CON MAS PRODUCTOS");
console.log("------------------------");

const categoriaMayor =
  obtenerCategoriaConMasProductos(
    categorias,
    productos
  );

console.log(categoriaMayor?.nombre);

/* =========================
   REGLAS DE PEDIDO
========================= */

const primerPedido = pedidos[0]!;

console.log("\nTOTAL DEL PRIMER PEDIDO");
console.log("------------------------");

console.log(
  calcularTotalPedido(
    primerPedido,
    productos
  )
);

console.log("\nVALIDACION DEL PRIMER PEDIDO");
console.log("------------------------");

console.log(
  validarDisponibilidadPedido(
    primerPedido,
    productos
  )
);

/* =========================
   REPOSITORIO GENERICO
========================= */

console.log("\nBUSQUEDA POR ID");
console.log("------------------------");

console.log(
  repositorioProductos.buscarPorId(
    "PROD001"
  )
);

console.log("\nFILTRO PERSONALIZADO");
console.log("------------------------");

const productosCaros =
  repositorioProductos.filtrar(
    (producto) =>
      producto.precio > 20000
  );

productosCaros.forEach(
  (producto) =>
    console.log(producto.nombre)
);

console.log("\nELIMINAR PRODUCTO");
console.log("------------------------");

console.log(
  "Eliminando PROD003:",
  repositorioProductos.eliminar("PROD003")
);

console.log(
  "Productos restantes:",
  repositorioProductos.obtenerTodos().length
);

/* =========================
   POLIMORFISMO
========================= */

const carta = new CartaPokemon(
  "Charizard ex",
  15000,
  3,
  "UltraRara"
);

const productoSellado =
  new ProductoSellado(
    "Booster Box",
    80000,
    2,
    36
  );

console.log("\nPOLIMORFISMO");
console.log("------------------------");

console.log(
  carta.mostrarInformacion()
);

console.log(
  productoSellado.mostrarInformacion()
);