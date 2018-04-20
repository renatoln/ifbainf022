package br.edu.ifba.emile.rest;

import java.util.List;

import br.edu.ifba.emile.dominio.Disciplinas;
import br.edu.ifba.emile.dominio.Mensagem;
import br.edu.ifba.emile.dominio.Notificacao;
import br.edu.ifba.emile.dominio.Usuario;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Url;

/**
 * Created by douglas on 28/03/2018.
 */

public interface RestService {


    // login usuario
    @GET
    Call<List<Usuario>> validateUser(@Url String url);

    @GET
    Call<List<Notificacao>> getMensagem(@Url String url);

    @GET
    Call<Usuario> getRemetent(@Url String url);

    @GET
    Call<List<Disciplinas>> getDisciplinas(@Url String url);

    @POST
    @FormUrlEncoded
    Call<Mensagem> enviarMensagem(@Body Mensagem mensagem);




   /* @POST("/mensagem")
    @FormUrlEncoded
    Call<Notificacao> savePost(@Body Notificacao not);*/


  /*  @POST("/posts")
    @FormUrlEncoded
    Call<Post> savePost(@Field("title") String title,
                        @Field("body") String body,
                        @Field("userId") long userId);
*/


/*
    @GET("disciplina_alunoss")
    Call<List<Disciplinas2>> getDisciplinasAlunos();

    //recupera todos os usuarios
    @GET("usuarios")
    Call<List<Usuario>> getUsers();

    @GET("disciplinas")
    Call<List<Disciplinas2>> getDisciplinas();


    @GET("mensagens_por_usuario")
    Call<List<Notificacao>> getMensagem();

    @GET("usuarios")
	Call<Usuario> validateUser(
            @Field("email") String username,
            @Field("senha") String password
    );
*/

}
