package br.edu.ifba.emile.adapter;

import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import java.util.ArrayList;

import br.edu.ifba.emile.R;
import br.edu.ifba.emile.dominio.Disciplinas;

/**
 * Created by douglas on 19/04/2018.
 */

public class DisciplinaAdapter extends RecyclerView.Adapter<DisciplinaAdapter.DisciplinasViewHolder>{

    private ArrayList<Disciplinas> mLista;
    private Context context;
    private LayoutInflater mLayoutInflater;


    public DisciplinaAdapter(ArrayList<Disciplinas> mLista, Context context) {
        this.mLista=mLista;
        this.context=context;
        mLayoutInflater=(LayoutInflater)context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
    }

    @Override
    public DisciplinasViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {

        View view=mLayoutInflater.inflate(R.layout.item_grupo,parent,false);

        DisciplinasViewHolder holder= new DisciplinasViewHolder(view);
        return holder;
    }

    @Override
    public void onBindViewHolder(DisciplinasViewHolder holder, int position) {
            DisciplinasViewHolder hold=(DisciplinasViewHolder) holder;

        Disciplinas d=mLista.get(position);
             hold.txt_grupo_disciplina.setText(d.getNome());
    }

    @Override
    public int getItemCount() {
        return mLista.size();
    }


    public class DisciplinasViewHolder extends RecyclerView.ViewHolder{

        public TextView txt_grupo_disciplina;


        public DisciplinasViewHolder(View itemView) {
            super(itemView);

            txt_grupo_disciplina=(TextView)itemView.findViewById(R.id.txt_grupo_disciplina);
        }
    }
}
