package com.fatec.loja.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fatec.loja.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Integer> {
       @Query("SELECT p FROM Produto p WHERE LOWER(p.nome) LIKE LOWER(CONCAT('%', :termo, '%')) OR LOWER(p.descritivo) LIKE LOWER(CONCAT('%', :termo, '%'))")
        List<Produto> buscarPorNomeOuKeywords(String termo);

}