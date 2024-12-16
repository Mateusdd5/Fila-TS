export class Fila<T> {
  private itens: T[] = [];

  adicionar(item: T): void {
    this.itens.push(item);
  }

  // Remove o item mais antigo da fila
  remover(): T | undefined {
    return this.itens.shift();
  }

  exibir(): void {
    console.log("Fila:", this.itens);
  }
}
