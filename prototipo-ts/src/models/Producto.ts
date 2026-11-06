import { Identificable } from "./Identificable.js";

export type Rareza =
  | "Comun"
  | "Infrecuente"
  | "Rara"
  | "UltraRara"
  | "Secreta";

export type TipoProducto =
  | "Carta"
  | "Sobre"
  | "ETB"
  | "BoosterBox";

export interface Producto extends Identificable {
  readonly id: string;
  nombre: string;
  descripcion?: string;
  precio: number;
  stock: number;
  rareza: Rareza;
  tipoProducto: TipoProducto;
  categoriaId: string;
}
