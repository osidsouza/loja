import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente'; // Supondo que você tenha esse modelo

@Injectable({
  providedIn: 'root' // Isso torna o serviço disponível globalmente
})
export class ClienteService {

  private apiUrl = 'http://localhost:8080/api/clientes'; // URL do seu backend

  constructor(private http: HttpClient) { }

  // Método para buscar clientes
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  // Método para cadastrar cliente
  cadastrarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }
}
