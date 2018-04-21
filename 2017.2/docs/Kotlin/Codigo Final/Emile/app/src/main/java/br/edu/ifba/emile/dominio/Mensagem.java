package br.edu.ifba.emile.dominio;

/**
 * Created by douglas on 19/04/2018.
 */

/*
*   "data": "2018-03-11T17:14:00Z",
    "titulo": "Trabalho",
    "texto": "Nessa semana vamos fazer a implementação dos serviços rest no app",
    "remetente": 7,
    "destinatario": [
        1,
        2,
        3,
        14,
        15
    ]
}'

*
* */

public class Mensagem {

    private String data;
    private String titulo;
    private String texto;
    private Usuario remetente;
    private Usuario destinatario;

    public Mensagem(){

    }

    @Override
    public String toString() {
        return "Mensagem{" +
                "data='" + data + '\'' +
                ", titulo='" + titulo + '\'' +
                ", texto='" + texto + '\'' +
                ", remetente='" + getRemetente() + '\'' +
                ", destinatario='" + getDestinatario() + '\'' +
                '}';
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }



    public Usuario getDestinatario() {
        return destinatario;
    }

    public void setDestinatario(Usuario destinatario) {
        this.destinatario = destinatario;
    }

    public Usuario getRemetente() {
        return remetente;
    }

    public void setRemetente(Usuario remetente) {
        this.remetente = remetente;
    }
}
