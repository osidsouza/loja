import { ProdutoService } from '../services/produto.service';
import { CestaService } from '../services/cesta.service';
import { Produto } from '../model/produto';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports:  [FormsModule, CommonModule],
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  public produtos: Produto[] = [];
  public termoPesquisa: string = ''; // Variável para armazenar o termo de pesquisa

  constructor(
    private produtoService: ProdutoService, 
    private cestaService: CestaService, 
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // Verifica o parâmetro "termo" na URL
    this.activatedRoute.queryParams.subscribe(params => {
      this.termoPesquisa = params['termo'] || ''; // Define o termo de pesquisa
      if (this.termoPesquisa) {
        this.buscarProdutos(); // Se tiver termo, busca os produtos
      }
    });
  }

  // Método para buscar produtos
  buscarProdutos() {
    this.produtoService.pesquisarProdutos(this.termoPesquisa).subscribe(produtos => {
      this.produtos = produtos; // Atualiza a lista de produtos
    });
  }

  // Método para adicionar produto à cesta
  adicionarProdutoALista(produto: Produto) {
    this.cestaService.adicionarItem(produto); // Adiciona o item à cesta
    alert(`${produto.nome} adicionado à cesta!`); // Feedback ao usuário
  }
}