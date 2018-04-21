package br.edu.ifba.emile.adapter;

import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import org.w3c.dom.Text;

import java.util.ArrayList;

import br.edu.ifba.emile.R;
import br.edu.ifba.emile.dominio.Notificacao;

/**
 * Created by douglas on 17/04/2018.
 */

public class NotificacaoAdapter extends RecyclerView.Adapter<NotificacaoAdapter.NotificacaoViewHolder> {

    private ArrayList<Notificacao> mLista;
    private Context context;
    private LayoutInflater mLayoutInflater;

    public NotificacaoAdapter(ArrayList<Notificacao> mLista,Context context){
        this.mLista=mLista;
        this.context=context;
        mLayoutInflater=(LayoutInflater)context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
    }


    @Override
    public NotificacaoViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {

        View view=mLayoutInflater.inflate(R.layout.item_notificacao,parent,false);

        NotificacaoViewHolder holder= new NotificacaoViewHolder(view);

        return holder;
    }

    @Override
    public void onBindViewHolder(NotificacaoViewHolder holder, int position) {
        NotificacaoViewHolder hold=(NotificacaoViewHolder) holder;

        Notificacao n=mLista.get(position);
        hold.professor.setText(n.getRemetente());
        hold.mensagem.setText(n.getTexto());
        hold.date_hora.setText(n.getData());
        hold.grupo.setText(n.getTitulo());


    }

    @Override
    public int getItemCount() {
        return mLista.size();
    }



    public class NotificacaoViewHolder extends RecyclerView.ViewHolder {

        public TextView professor;
        public TextView grupo;
        public TextView mensagem;
        public TextView date_hora;

        public NotificacaoViewHolder(View itemView){
            super(itemView);
            professor=(TextView) itemView.findViewById(R.id.txt_professor);
            grupo=(TextView)itemView.findViewById(R.id.txt_grupo);
            mensagem=(TextView)itemView.findViewById(R.id.txt_mensagem);
            date_hora=(TextView)itemView.findViewById(R.id.txt_data);
        }


    }
}
