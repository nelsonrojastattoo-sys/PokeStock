export abstract class ProductoBase {
  constructor(
    protected nombre: string,
    protected precio: number,
    protected stock: number
  ) {}

  abstract mostrarInformacion(): string;
}