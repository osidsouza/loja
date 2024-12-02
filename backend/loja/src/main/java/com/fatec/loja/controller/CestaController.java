package com.fatec.loja.controller;

import com.fatec.loja.model.Cesta;
import com.fatec.loja.model.ItemCestaRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import org.springframework.http.ResponseEntity;

import com.fatec.loja.model.CestaRequest;
import com.fatec.loja.model.Produto;
import com.fatec.loja.repository.ProdutoRepository;
import com.fatec.loja.service.CestaService;

@RestController
@RequestMapping("/api/cesta")
public class CestaController {

    @Autowired
    private CestaService cestaService;

    @Autowired
    private ProdutoRepository produtoRepository;

    @PostMapping("/adicionar")
    public ResponseEntity<String> adicionarItem(@RequestBody ItemCestaRequest request) {
        Produto produto = produtoRepository.findById(request.getProdutoId())
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));

        cestaService.adicionarItem(request.getClienteId(), produto, request.getQuantidade());
        return ResponseEntity.ok("Item adicionado à cesta");
    }

    @DeleteMapping("/remover/{itemId}")
    public ResponseEntity<String> removerItem(@PathVariable Long itemId, @RequestParam Long clienteId) {
        cestaService.removerItem(clienteId, itemId);
        return ResponseEntity.ok("Item removido da cesta");
    }

    @GetMapping("/{clienteId}")
    public ResponseEntity<Cesta> obterCesta(@PathVariable Long clienteId) {
        Cesta cesta = cestaService.obterCestaDoCliente(clienteId);
        return ResponseEntity.ok(cesta);
    }

    @PostMapping("/finalizar")
    public ResponseEntity<String> finalizarCompra(@RequestBody CestaRequest cestaRequest) {
        // Aqui você pode processar a cesta, por exemplo, salvar em banco de dados
        System.out.println("Finalizando a compra para o cliente ID: " + cestaRequest.getClienteId());
        System.out.println("Itens da cesta: " + cestaRequest.getItens());

        // Lógica para processar a compra (salvar em banco, gerar fatura, etc.)
        return ResponseEntity.ok("Compra finalizada com sucesso!");
    }

}

