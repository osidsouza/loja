package com.fatec.loja.repository;

import com.fatec.loja.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    
    Cliente findByEmail(String email);
}
