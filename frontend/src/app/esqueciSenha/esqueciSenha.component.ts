import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importando o HttpClient para fazer a requisição
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';
import { LoginService } from '../services/login.service'; 
@Component({
  selector: 'app-esqueci-senha',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './esqueciSenha.component.html',
  styleUrls: ['./esqueciSenha.component.css']
})
export class EsqueciSenhaComponent {
  obj: Cliente = new Cliente();
  mensagem: string = ''; // Usando "any" para simplificar no momento, mas você pode usar um modelo com campos específicos

  constructor(private loginService: LoginService) {} // Certifique-se de injetar o serviço corretamente

  // Método para enviar a requisição ao backend
  esqueciSenha(): void {
    this.loginService.forgotPassword(this.obj).subscribe(
      (response) => {
        // Sucesso: E-mail encontrado
        this.mensagem = response; // Exibe a mensagem de sucesso no frontend
      },
      (error) => {
        // Erro: E-mail não encontrado ou outro problema
        if (error.status === 404) {
          this.mensagem = 'E-mail não encontrado. Por favor, verifique o endereço informado.';
        } else {
          this.mensagem = `Erro ao tentar recuperar a senha: ${error.message || 'Erro desconhecido'}`;
        }
        console.error('Erro no esqueci a senha:', error);
      }
    );
  }
}