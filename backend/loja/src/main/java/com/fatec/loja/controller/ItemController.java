package com.fatec.loja.controller;

import com.fatec.loja.model.ItemCesta;
import com.fatec.loja.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/itens")
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;

    @GetMapping
    public List<ItemCesta> obterTodos() {
        return itemRepository.findAll();
    }

    @PostMapping
    public ItemCesta adicionar(@RequestBody ItemCesta item) {
        return itemRepository.save(item);
    }

    @GetMapping("/{id}")
    public ItemCesta obterPorId(@PathVariable Long id) {
        return itemRepository.findById(id).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        itemRepository.deleteById(id);
    }
}
