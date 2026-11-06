import { Identificable } from "../models/Identificable.js";

export class Repositorio<T extends Identificable> {
  private elementos: T[] = [];

  agregar(elemento: T): void {
    this.elementos.push(elemento);
  }

  buscarPorId(id: string): T | undefined {
    return this.elementos.find((elemento) => elemento.id === id);
  }

  eliminar(id: string): boolean {
    const cantidadInicial = this.elementos.length;

    this.elementos = this.elementos.filter(
      (elemento) => elemento.id !== id
    );

    return this.elementos.length < cantidadInicial;
  }

  filtrar(criterio: (elemento: T) => boolean): T[] {
    return this.elementos.filter(criterio);
  }

  obtenerTodos(): T[] {
    return [...this.elementos];
  }
}