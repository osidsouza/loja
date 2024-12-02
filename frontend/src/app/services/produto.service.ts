import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = 'http://localhost:8080/api/produtos'; // Ajuste conforme o endpoint do backend

  constructor(private http: HttpClient) {}

  // Método para obter todos os produtos
  obterProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  // Método para obter um produto específico por código
  obterProdutoPorCodigo(codigo: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${codigo}`);
  }

  // Método para pesquisar produtos por um termo
  pesquisarProdutos(termo: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}/pesquisar?termo=${termo}`);
  }
}
