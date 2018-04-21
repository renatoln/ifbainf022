package br.edu.ifba.emile.fragment;

import android.app.Fragment;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import java.util.ArrayList;
import java.util.List;

import br.edu.ifba.emile.R;
import br.edu.ifba.emile.adapter.DisciplinaAdapter;
import br.edu.ifba.emile.adapter.NotificacaoAdapter;
import br.edu.ifba.emile.dominio.Disciplinas;
import br.edu.ifba.emile.rest.RestService;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * Created by douglas on 19/04/2018.
 */

public class GrupoFragment extends Fragment implements Callback<List<Disciplinas>> {

    View myview;

    public RecyclerView mRecyclerView;
    public LinearLayoutManager layoutManager;
    public ArrayList<Disciplinas> disciplinas;
    public DisciplinaAdapter mAdapter;
    public Retrofit retrofit;
    public String id;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, Bundle savedInstanceState) {

        myview=inflater.inflate(R.layout.fragment_grupos,container,false);

        retrofit = new Retrofit.Builder()
                .baseUrl("http://renatoln.pythonanywhere.com/disciplinas/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        id =getArguments().getString("id");


        initView();
        layoutManager.setOrientation(LinearLayoutManager.VERTICAL);
        mRecyclerView.setLayoutManager(layoutManager);


        return myview;

    }

    public void initView() {
        mRecyclerView = (RecyclerView) myview.findViewById(R.id.frag_grupos_recycleview);
        mRecyclerView.setHasFixedSize(true);
        layoutManager = new LinearLayoutManager(getActivity());
        disciplinas = new ArrayList<>();

        mAdapter = new DisciplinaAdapter(disciplinas,getActivity());
        mRecyclerView.setAdapter(mAdapter);

    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
            getActivity().setTitle("Grupos");



    }

    @Override
    public void onStop() {
        super.onStop();
        disciplinas.clear();
    }

    @Override
    public void onResume() {
        super.onResume();
    }

    @Override
    public void onStart() {
        super.onStart();
        disciplinas.clear();

        RestService service= retrofit.create(RestService.class);
        Call<List<Disciplinas>> call=service.getDisciplinas("?professor="+id.toString());

        call.enqueue(this);

    }

    @Override
    public void onResponse(Call<List<Disciplinas>> call, Response<List<Disciplinas>> response) {
        if (response.isSuccessful()) {
            ArrayList<Disciplinas> lista= (ArrayList<Disciplinas>) response.body();

            for(Disciplinas n: lista){
                disciplinas.add(n);
                mAdapter = new DisciplinaAdapter(disciplinas,getActivity().getApplicationContext());
                mRecyclerView.setAdapter(mAdapter);
                mAdapter.notifyDataSetChanged();
            }

        }

    }

    @Override
    public void onFailure(Call<List<Disciplinas>> call, Throwable t) {

    }
}
