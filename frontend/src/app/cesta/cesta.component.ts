import { Component } from '@angular/core';
import { CestaService } from '../services/cesta.service';
import { Item } from '../model/item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent {
  public itens: Item[] = [];
  public total: number = 0;

  constructor(private cestaService: CestaService, private router: Router) {
    this.itens = this.cestaService.obterItens();  // Obtendo os itens da cesta
    this.calcularTotal();                         // Calculando o total
  }

  // Método para remover o produto da cesta
  removerProduto(item: Item) {
    this.cestaService.removerItem(item.produto); // Passando o produto para remover
    this.itens = this.cestaService.obterItens();  // Atualizando os itens da cesta
    this.calcularTotal();                         // Recalculando o total
  }

  // Método para calcular o total
  calcularTotal() {
    this.total = this.cestaService.calcularTotal(); // Calculando total pela cestaService
  }

  // Método para atualizar a quantidade do produto e recalcular o total
  atualizarQuantidade(item: Item, novaQuantidade: number) {
    if (novaQuantidade < 1) {
      novaQuantidade = 1; // Impede valores menores que 1
    }
    this.cestaService.atualizarQuantidade(item.produto, novaQuantidade);
    this.calcularTotal();  // Recalcular o total após alterar a quantidade
  }

  // Método para limpar a cesta
  limparCesta() {
    this.cestaService.limparCesta();
    this.itens = [];
    this.total = 0;  // Resetando o total
  }

  // Método para finalizar a compra
  finalizarCompra() {
    if (this.itens.length === 0) { // Verifica se a cesta está vazia
      alert('A cesta está vazia! Adicione produtos antes de finalizar a compra.');
      return; // Sai do método se a cesta estiver vazia
    }

    const confirmacao = confirm('Você está prestes a finalizar a compra. Deseja continuar?'); // Confirmação do usuário

    if (confirmacao) { // Se o usuário confirmar
      this.router.navigate(['/login'], { queryParams: { total: this.total } }); // Redireciona para a página de login com o total
    }
  }
}
