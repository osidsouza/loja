package com.fatec.loja.model;
import java.util.List;

public class CestaRequest {
    private Long clienteId;
    private List<ItemCestaRequest> itens;

    // Getters e Setters
    public Long getClienteId() {
        return clienteId;
    }

    public void setClienteId(Long clienteId) {
        this.clienteId = clienteId;
    }

    public List<ItemCestaRequest> getItens() {
        return itens;
    }

    public void setItens(List<ItemCestaRequest> itens) {
        this.itens = itens;
    }
}