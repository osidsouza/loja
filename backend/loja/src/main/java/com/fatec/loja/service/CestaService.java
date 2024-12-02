package com.fatec.loja.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.loja.model.Cesta;
import com.fatec.loja.model.ItemCesta;
import com.fatec.loja.model.Produto;
import com.fatec.loja.repository.CestaRepository;


@Service
public class CestaService {

    @Autowired
    private CestaRepository cestaRepository;

   

    public Cesta obterCestaDoCliente(Long clienteId) {
        return cestaRepository.findByClienteId(clienteId).orElseThrow(() -> new RuntimeException("Cesta não encontrada"));
    }

    public void adicionarItem(Long clienteId, Produto produto, int quantidade) {
        Cesta cesta = obterCestaDoCliente(clienteId);
        ItemCesta item = new ItemCesta();
        item.setProduto(produto);
        item.setQuantidade(quantidade);
        item.setCesta(cesta);
        cesta.getItens().add(item);
        cestaRepository.save(cesta);
    }

    public void removerItem(Long clienteId, Long itemId) {
        Cesta cesta = obterCestaDoCliente(clienteId);
        cesta.getItens().removeIf(item -> item.getId().equals(itemId));
        cestaRepository.save(cesta);
    }
}

