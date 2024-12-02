package com.fatec.loja.model;

import java.util.ArrayList;
import java.util.List;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;






@Entity
public class Cesta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Cliente  cliente; // Associação com o cliente

    @OneToMany(mappedBy="cesta", cascade = CascadeType.ALL)
    private List<ItemCesta> itens = new ArrayList<>();

   


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public List<ItemCesta> getItens() {
        return itens;
    }

    public void setItens(List<ItemCesta> itens) {
        this.itens = itens;
    }
}

