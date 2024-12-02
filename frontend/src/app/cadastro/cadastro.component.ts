import { Component } from '@angular/core';
import { ClienteService } from '../services/cliente.service'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Importando o serviço
import { Cliente } from '../model/cliente';  // Importando o modelo de Cliente

@Component({
  selector: 'app-cadastro',
  standalone: true, // Se estiver usando standalone components
  imports: [CommonModule, FormsModule], 
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  obj: Cliente = new Cliente();  // Inicializando o objeto 'obj'
  mensagem: string = '';

  constructor(private clienteService: ClienteService) {}

  gravar(): void {
    this.clienteService.cadastrarCliente(this.obj).subscribe(
      (response) => {
        this.mensagem = 'Cadastro realizado com sucesso!';
      },
      (error) => {
        this.mensagem = 'Erro ao cadastrar cliente';
        console.error(error);
      }
    );
  }
}
