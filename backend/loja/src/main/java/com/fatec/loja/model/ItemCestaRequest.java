package com.fatec.loja.model;



public class ItemCestaRequest {
    private int produtoId;
    private int quantidade;
    private Long clienteId;  // Adicionando o campo clienteId
    

    // Construtores
    public ItemCestaRequest() {}

    public ItemCestaRequest(int produtoId, int quantidade, Long clienteId) {
        this.produtoId = produtoId;
        this.quantidade = quantidade;
        this.clienteId = clienteId;  // Inicializando clienteId
    }

    // Getters e Setters
    public int getProdutoId() {
        return produtoId;
    }

    public void setProdutoId(int produtoId) {
        this.produtoId = produtoId;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public Long getClienteId() {
        return clienteId;  // Método para acessar clienteId
    }

    public void setClienteId(Long clienteId) {
        this.clienteId = clienteId;  // Método para definir clienteId
    }

   

  
    
}
