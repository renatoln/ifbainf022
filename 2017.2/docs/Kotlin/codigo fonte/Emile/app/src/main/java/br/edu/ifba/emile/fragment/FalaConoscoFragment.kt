package br.edu.ifba.emile.fragment

import android.app.Fragment
import android.os.Bundle
import android.support.annotation.Nullable

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import br.edu.ifba.emile.R


/**
 * Created by douglas on 27/01/2018.
 */
class FalaConoscoFragment : Fragment(){

    override fun onCreateView(inflater: LayoutInflater?, container: ViewGroup?, savedInstanceState: Bundle?): View? {

        val view: View = inflater!!.inflate(R.layout.fragment_fale_conosco, container, false)
        return  view
    }

    override fun onCreate(@Nullable savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        activity.title = "Fale Conosco"

    }
}