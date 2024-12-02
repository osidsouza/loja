package com.fatec.loja.service;

import com.fatec.loja.model.Cliente;
import com.fatec.loja.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    // Salvar um novo cliente
    public Cliente salvar(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    // Buscar cliente por ID
    public Optional<Cliente> buscarPorId(Long id) {
        return clienteRepository.findById(id);
    }

    // Remover cliente
    public void deletarPorId(Long id) {
        clienteRepository.deleteById(id);
    }

    // Atualizar cliente
    public Cliente atualizar(Cliente cliente) {
        Optional<Cliente> clienteExistente = clienteRepository.findById(cliente.getId());
        if (clienteExistente.isPresent()) {
            return clienteRepository.save(cliente);
        } else {
            throw new RuntimeException("Cliente não encontrado para atualização");
        }
    }
}
