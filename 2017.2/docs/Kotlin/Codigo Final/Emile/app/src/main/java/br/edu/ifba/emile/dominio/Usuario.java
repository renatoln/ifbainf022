package br.edu.ifba.emile.dominio;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.io.Serializable;

/**
 * Created by douglas on 05/04/2018.
 */

public class Usuario implements Serializable {

    private int id;
    private String email;
    private String senha;
    private String nome;
    private int tipo;


    public Usuario(){}


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public int getTipo() {
        return tipo;
    }

    public void setTipo(int tipo) {
        this.tipo = tipo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", senha='" + senha + '\'' +
                ", nome='" + nome + '\'' +
                ", tipo=" + tipo +
                '}';
    }
}
