package br.edu.ifba.emile;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.annotation.RestrictTo;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import br.edu.ifba.emile.dominio.Mensagem;
import br.edu.ifba.emile.dominio.Usuario;
import br.edu.ifba.emile.rest.RestService;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * Created by douglas on 19/04/2018.
 */

public class ActivityEnviarMensagem extends AppCompatActivity implements Callback<Mensagem> {

    public EditText edt_enviar_mensagem,edt_titulo;
    public Button btn_enviar_mensagem;
    public Retrofit retrofit;
    public Mensagem mensagem;

    public Usuario remetente,destinatario;



    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_enviar_mensagem);
        mensagem=new Mensagem();
        remetente=new Usuario();
        destinatario=new Usuario();
        remetente.setId(7);
        destinatario.setId(1);


        edt_enviar_mensagem= (EditText)findViewById(R.id.edt_enviar_mensagem);
        edt_titulo=(EditText)findViewById(R.id.edt_titulo);
        btn_enviar_mensagem=(Button)findViewById(R.id.btn_enviar_mensagem);


        btn_enviar_mensagem.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy-HH:mm:ss");
                Date data = new Date();
                Calendar cal = Calendar.getInstance();
                cal.setTime(data);
                Date data_atual = cal.getTime();

                String data_completa = dateFormat.format(data_atual);

                mensagem.setData(data_completa.toString());
                mensagem.setTitulo( edt_titulo.getText().toString());
                mensagem.setTexto(edt_enviar_mensagem.getText().toString());
                mensagem.setRemetente(remetente);
                mensagem.setDestinatario(destinatario);

                enviarRequest(mensagem);
            }
        });

        retrofit = new Retrofit.Builder()
                .baseUrl("http://renatoln.pythonanywhere.com/mensagens/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();
    }


    public void enviarRequest(Mensagem mensagem){

        RestService service= retrofit.create(RestService.class);
        Call<Mensagem> call=service.enviarMensagem(mensagem);
        call.enqueue(this);

    }

    @Override
    public void onResponse(Call<Mensagem> call, Response<Mensagem> response) {

        if(response.isSuccessful()) {
            response.body().toString();
            Toast.makeText(this, "Enviado Com Sucesso", Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    public void onFailure(Call<Mensagem> call, Throwable t) {

    }
}
