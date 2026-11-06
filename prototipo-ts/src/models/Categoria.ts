import { Identificable } from "./Identificable.js";

export interface Categoria extends Identificable {
  readonly id: string;
  nombre: string;
  descripcion?: string;
  fechaLanzamiento: Date;
}