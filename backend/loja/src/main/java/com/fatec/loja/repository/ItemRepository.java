package com.fatec.loja.repository;

import com.fatec.loja.model.ItemCesta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<ItemCesta, Long> {
}