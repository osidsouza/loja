package com.fatec.loja.repository;

import com.fatec.loja.model.Cesta;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CestaRepository extends JpaRepository<Cesta, Long> {
    Optional<Cesta> findByClienteId(Long clienteId); // Encontrar cesta do cliente
}