package br.edu.ifba.emile.fragment

import android.app.Fragment
import android.os.Bundle
import android.support.annotation.Nullable
import android.support.design.widget.AppBarLayout

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import br.edu.ifba.emile.R
import kotlinx.android.synthetic.*


/**
 * Created by douglas on 27/01/2018.
 */
class NotificacaoFragment : Fragment() {


    override fun onCreateView(inflater: LayoutInflater?, container: ViewGroup?, savedInstanceState: Bundle?): View? {

        val view: View = inflater!!.inflate(R.layout.fragment_notifocacao, container, false)

        return  view
    }

    override fun onCreate(@Nullable savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        activity.title = "Notificação"


    }

}


