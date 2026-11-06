import { Identificable } from "./Identificable.js";

export type EstadoPedido =
  | "Pendiente"
  | "Confirmado"
  | "Preparando"
  | "Enviado"
  | "Entregado"
  | "Cancelado";

export interface Pedido extends Identificable {
  readonly id: string;
  cliente: string;
  productos: string[];
  total: number;
  estado: EstadoPedido;
  observaciones?: string;
}