import { Injectable } from '@angular/core';
import { Item } from '../model/item';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class CestaService {
  private itens: Item[] = [];

  constructor() {
    // Carregar a cesta salva no localStorage (se houver)
    this.itens = this.obterItensDoLocalStorage(); // Renomeando a função privada
  }

  // Adicionar item à cesta (com quantidade ou sem)
  adicionarItem(produto: Produto, quantidade: number = 1): void {
    const itemExistente = this.itens.find(item => item.produto.codigo === produto.codigo);

    if (itemExistente) {
      itemExistente.quantidade += quantidade; // Se o item já estiver na cesta, aumenta a quantidade
    } else {
      const novoItem = new Item();
      novoItem.produto = produto;
      novoItem.quantidade = quantidade;
      this.itens.push(novoItem); // Adiciona um novo item
    }

    // Salvar os itens da cesta no localStorage
    this.salvarItens();
  }

  // Remover item da cesta
  removerItem(produto: Produto): void {
    const index = this.itens.findIndex(item => item.produto.codigo === produto.codigo);
    if (index !== -1) {
      this.itens.splice(index, 1);
    }

    // Salvar os itens da cesta no localStorage
    this.salvarItens();
  }

  // Atualizar a quantidade de um item
  atualizarQuantidade(produto: Produto, novaQuantidade: number): void {
    const item = this.itens.find(item => item.produto.codigo === produto.codigo);
    if (item && novaQuantidade > 0) {
      item.quantidade = novaQuantidade;
    }

    // Salvar os itens da cesta no localStorage
    this.salvarItens();
  }

  // Calcular o total da cesta
  calcularTotal(): number {
    return this.itens.reduce((total, item) => total + (item.produto.valor * item.quantidade), 0);
  }

  // Obter os itens da cesta
  obterItens(): Item[] {
    return this.itens;
  }

  // Limpar a cesta
  limparCesta(): void {
    this.itens = [];
    // Remover os itens do localStorage
    localStorage.removeItem('cesta');
  }

  // Salvar os itens no localStorage
  private salvarItens(): void {
    localStorage.setItem('cesta', JSON.stringify(this.itens));
  }

  // Carregar os itens do localStorage
  private obterItensDoLocalStorage(): Item[] {
    const cestaSalva = localStorage.getItem('cesta');
    return cestaSalva ? JSON.parse(cestaSalva) : [];
  }
}
