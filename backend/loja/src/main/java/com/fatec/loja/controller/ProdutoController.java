package com.fatec.loja.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.loja.model.Produto;
import com.fatec.loja.service.ProdutoService;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @PostMapping
    public Produto gravar(@RequestBody Produto produto) {
        return produtoService.salvarProduto(produto);
    }

    @PutMapping
    public Produto alterar(@RequestBody Produto produto) {
        return produtoService.alterarProduto(produto);
    }

    @GetMapping("/{codigo}")
    public Produto carregar(@PathVariable int codigo) {
        return produtoService.carregarProduto(codigo);
    }

    @DeleteMapping("/{codigo}")
    public String remover(@PathVariable int codigo) {
        produtoService.removerProduto(codigo);
        return "Produto " + codigo + " removido com sucesso!";
    }

    @GetMapping
    public List<Produto> todos() {
        return produtoService.obterTodosProdutos();
    }
    
    @GetMapping("/pesquisar")
public List<Produto> pesquisarProdutos(@RequestParam String termo) {
    return produtoService.buscarProdutosPorTermo(termo);
}
    
}
