package com.fatec.loja.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.loja.model.Produto;
import com.fatec.loja.repository.ProdutoRepository;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public Produto salvarProduto(Produto produto) {
        return produtoRepository.save(produto);
    }

    public Produto alterarProduto(Produto produto) {
        return produtoRepository.save(produto);
    }

    public Produto carregarProduto(int codigo) {
        return produtoRepository.findById(codigo).orElse(null);
    }

    public void removerProduto(int codigo) {
        produtoRepository.deleteById(codigo);
    }

    public List<Produto> obterTodosProdutos() {
        return produtoRepository.findAll();
    }
    
    public List<Produto> buscarProdutosPorTermo(String termo) {
        return produtoRepository.buscarPorNomeOuKeywords(termo);
    }
}
