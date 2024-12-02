import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/produto';
import { CestaService } from '../services/cesta.service';
import { ProdutoService } from '../services/produto.service';  // Importando o serviço
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {
  produto: Produto | undefined;
  erro: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cestaService: CestaService,
    private produtoService: ProdutoService  // Injetando o serviço
  ) { }

  ngOnInit(): void {
    const codigoProduto = this.route.snapshot.paramMap.get('id'); // Obtém o ID do produto

    if (codigoProduto) {
      const codigo = Number(codigoProduto);
      this.produtoService.obterProdutoPorCodigo(codigo).pipe(
        catchError(err => {
          this.erro = 'Produto não encontrado!';
          return of(undefined);  // Em caso de erro, retornamos um observable vazio
        })
      ).subscribe((produto: Produto | undefined) => {
        if (produto) {
          this.produto = produto;  // Atribui o produto retornado
        }
      });
    }
  }

  comprar(): void {
    if (this.produto) {
      this.cestaService.adicionarItem(this.produto);
      alert(`${this.produto.nome} foi adicionado à cesta!`);
      this.router.navigate(['/cesta']);
    }
  }
}
