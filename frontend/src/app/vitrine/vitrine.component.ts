import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { CestaService } from '../services/cesta.service';
import { ProdutoService } from '../services/produto.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent implements OnInit {
  public itens: Produto[] = []; // Lista original de produtos
  public produtosFiltrados: Produto[] = []; // Lista de produtos filtrados
  public pesquisaTermo: string = ''; // Termo de pesquisa
  public mensagen: string = 'Bem vindos!!!'; // Mensagem inicial

  constructor(
    private cestaService: CestaService,
    private produtoService: ProdutoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  // Método para carregar os produtos do backend
  carregarProdutos(): void {
    this.produtoService.obterProdutos().subscribe(
      (produtos) => {
        this.itens = produtos; // Carrega os produtos na lista principal
        this.produtosFiltrados = produtos; // Inicializa os produtos filtrados
      },
      (error) => {
        this.mensagen = 'Erro ao carregar os produtos.';
        console.error('Erro ao buscar produtos:', error);
      }
    );
  }

  // Método para filtrar produtos com base no termo de pesquisa
  filtrarProdutos(): void {
    const termo = this.pesquisaTermo.toLowerCase();
    this.produtosFiltrados = this.itens.filter((produto) =>
      produto.nome.toLowerCase().includes(termo) || 
      produto.descritivo.toLowerCase().includes(termo) ||
      produto.keywords.toLowerCase().includes(termo)
    );
  }

  // Método para adicionar produto à cesta
  comprar(item: Produto): void {
    this.cestaService.adicionarItem(item);
    alert(`${item.nome} foi adicionado à cesta!`);
    this.router.navigate(['/cesta']); // Redireciona para a página da cesta
  }

  // Método para exibir detalhes de um produto
  detalhe(item: Produto): void {
    this.router.navigate(['/detalhe', item.codigo]); // Passa o código do produto como parâmetro
  }
}
