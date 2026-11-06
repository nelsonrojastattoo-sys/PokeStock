import { Identificable } from "./Identificable";

export interface Categoria extends Identificable {
  readonly id: string;
  nombre: string;
  descripcion?: string;
  fechaLanzamiento: Date;
}