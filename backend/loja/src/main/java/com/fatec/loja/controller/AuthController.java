package com.fatec.loja.controller;




import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.loja.model.Cliente;
import com.fatec.loja.repository.ClienteRepository;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200") // Adiciona a permissão CORS para o frontend
public class AuthController {

    @Autowired
    private ClienteRepository clienteRepository;

    // Endpoint para autenticar o usuário
    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        // Buscar o cliente pelo email
        Cliente cliente = clienteRepository.findByEmail(loginRequest.getEmail());

        if (cliente == null) {
            return "Usuário não encontrado";
        }

        // Verificar se a senha fornecida corresponde à senha do banco
        if (cliente.getSenha().equals(loginRequest.getSenha())) {
            return "Login com sucesso!";
        } else {
            return "Email ou senha incorretos";
        }
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<String> forgotPassword(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        System.out.println("Email recebido: " + email);
        Cliente cliente = clienteRepository.findByEmail(email);
        if (cliente != null) {
            // Lógica de envio de e-mail
            System.out.println("E-mail de recuperação enviado");
            return ResponseEntity.ok("E-mail de recuperação enviado");
        } else {
            System.out.println("E-mail não encontrado");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("E-mail não encontrado");
        }
    }
    

    // Classe interna para mapear os dados do login
    public static class LoginRequest {
        private String email;
        private String senha;

        // Getters e setters
        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getSenha() {
            return senha;
        }

        public void setSenha(String senha) {
            this.senha = senha;
        }
    }

}