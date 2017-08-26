/**
 *
 * @author Enoque
 */
class Pessoa {

    public Pessoa(String nome, String email) {
        this.nome  = nome;
        this.email = email;
    }

    public String get(String property) {

        if( property.equals("nome") ) {
             return this.nome;
        } else if ( property.equals("email") ) {
            return this.email;
        }

        return "";
    }

    public void set(String property, String value) {

        if( property.equals("nome") ) {
             this.nome = value;
        } else if ( property.equals("email") ) {
            this.email = value;
        }
    }

    private String nome;
    private String email;
}