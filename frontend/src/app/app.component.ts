import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loja';
  termoPesquisa: string = ''; // Variável para armazenar o termo de pesquisa
  isLoggedIn: boolean = false; // Inicialmente, o usuário não está logado

  constructor(private router: Router) {
    // Verifica no localStorage se o usuário está logado
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      this.isLoggedIn = true; // Se estiver logado, mantém o estado
    }
  }

  // Método para simular o login
  

  // Método para redirecionar para a página de pesquisa com o termo
  redirecionarParaPesquisa() {
    if (this.termoPesquisa.trim() !== '') {
      this.router.navigate(['/pesquisa'], { queryParams: { termo: this.termoPesquisa } });
    }
  }

  // Método para redirecionar para outras páginas
  redirecionarParaDesconto() {
    this.router.navigate(['/vitrine']);
  }

  redirecionarParaLogin() {
    this.router.navigate(['/login']);
  }

  redirecionarParaCadastro() {
    this.router.navigate(['/cadastro']);
  }

  redirecionarParaCesta() {
    this.router.navigate(['/cesta']);
  }

  // Método para logout
  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn'); // Remove o estado de login do localStorage
    this.router.navigate(['/']);
  }
}
