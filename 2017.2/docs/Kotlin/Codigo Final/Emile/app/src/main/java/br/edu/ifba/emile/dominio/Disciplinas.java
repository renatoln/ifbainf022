package br.edu.ifba.emile.dominio;

/**
 * Created by douglas on 19/04/2018.
 */

public class Disciplinas {

 //   private  String id;
    private String codigo;
    private String nome;


    public Disciplinas(){}


/*   public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
**/
    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Override
    public String toString() {
        return "Disciplinas{" +
                ", codigo='" + codigo + '\'' +
                ", nome='" + nome + '\'' +
                '}';
    }
}
