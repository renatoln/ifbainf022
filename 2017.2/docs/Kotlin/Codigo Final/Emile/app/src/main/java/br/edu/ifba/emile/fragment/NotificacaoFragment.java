package br.edu.ifba.emile.fragment;

import android.app.Fragment;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import br.edu.ifba.emile.R;
import br.edu.ifba.emile.adapter.NotificacaoAdapter;
import br.edu.ifba.emile.dominio.Notificacao;
import br.edu.ifba.emile.dominio.Usuario;
import br.edu.ifba.emile.rest.RestService;
import okhttp3.Request;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * Created by douglas on 19/04/2018.
 */

public class NotificacaoFragment extends Fragment implements Callback<List<Notificacao>>{

    View myview;

    public RecyclerView mRecyclerView;
    public ArrayList<Notificacao> notificacoes;
    public NotificacaoAdapter mAdapter;
    public LinearLayoutManager layoutManager;
    public Retrofit retrofit,retrofit2;
    public String id;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, Bundle savedInstanceState) {
        myview=inflater.inflate(R.layout.fragment_notifocacao,container,false);

        retrofit = new Retrofit.Builder()
                .baseUrl("http://renatoln.pythonanywhere.com/mensagens_por_usuario/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        retrofit2 = new Retrofit.Builder()
                .baseUrl("https://renatoln.pythonanywhere.com/usuario/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

       id =getArguments().getString("id");

        initView();
        layoutManager.setOrientation(LinearLayoutManager.VERTICAL);
        mRecyclerView.setLayoutManager(layoutManager);

        return myview;
    }
    public void initView() {
        mRecyclerView = (RecyclerView) myview.findViewById(R.id.frag_notificacao_recycler);
        mRecyclerView.setHasFixedSize(true);
        layoutManager = new LinearLayoutManager(getActivity());
        notificacoes = new ArrayList<>();

        mAdapter = new NotificacaoAdapter(notificacoes,getActivity());
        mRecyclerView.setAdapter(mAdapter);

    }


    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getActivity().setTitle("Notificações");

    }

    @Override
    public void onStop() {
        super.onStop();
        notificacoes.clear();
    }

    @Override
    public void onResume() {
        super.onResume();
    }

    @Override
    public void onStart() {
        super.onStart();
        notificacoes.clear();

        RestService service= retrofit.create(RestService.class);
        Call<List<Notificacao>> call=service.getMensagem(id);
        call.enqueue(this);

    }

    @Override
    public void onResponse(Call<List<Notificacao>> call, Response<List<Notificacao>> response) {
        if (response.isSuccessful()) {
           ArrayList<Notificacao> lista= (ArrayList<Notificacao>) response.body();

                for(Notificacao n: lista){
                    notificacoes.add(n);
                    mAdapter = new NotificacaoAdapter(notificacoes,getActivity().getApplicationContext());
                    mRecyclerView.setAdapter(mAdapter);
                    mAdapter.notifyDataSetChanged();
                }

        }

    }

    @Override
    public void onFailure(Call<List<Notificacao>> call, Throwable t) {

    }




}
