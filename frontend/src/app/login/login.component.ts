import { Component } from '@angular/core';
import { LoginService } from '../services/login.service'; 
import { Router } from '@angular/router';
import { Cliente } from '../model/cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  obj: Cliente = new Cliente();
  mensagem: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  login(): void {
    this.loginService.login(this.obj).subscribe(
      (response) => {
        if (response === 'Login com sucesso!') {
          alert('Login realizado com suceso!');
          localStorage.setItem('isLoggedIn', 'true')
          this.router.navigate(['/vitrine']);
          
        } else {
          this.mensagem = response;
        }
        
        
      },
      (error) => {
        this.mensagem = `Erro ao tentar fazer login: ${error.message || 'Erro desconhecido'}`;
        console.error('Erro no login:', error);
      }
    );
  }
  
  esqueci() {
    this.router.navigate(["./esqueciSenha"]);
  }

  redirecionarParaCadastro() {
    this.router.navigate(["/cadastro"]);
  }
}

