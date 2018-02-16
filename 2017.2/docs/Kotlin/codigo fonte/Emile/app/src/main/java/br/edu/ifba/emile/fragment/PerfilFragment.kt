package br.edu.ifba.emile.fragment

import android.app.Fragment
import android.os.Bundle
import android.support.annotation.Nullable
import android.view.*

import br.edu.ifba.emile.R
import android.view.MenuInflater



/**
 * Created by douglas on 27/01/2018.
 */
class PerfilFragment : Fragment() {

    override fun onCreateView(inflater: LayoutInflater?, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        val view: View = inflater!!.inflate(R.layout.fragment_perfil, container, false)


        return  view
    }

    override fun onCreate(@Nullable savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setHasOptionsMenu(true);
        activity.title = "Perfil"

    }

    override fun onOptionsItemSelected(item: MenuItem?): Boolean {
        return super.onOptionsItemSelected(item)
    }

    override fun onCreateOptionsMenu(menu: Menu, inflater: MenuInflater) {
        inflater.inflate(R.menu.menu_perfil, menu)
        super.onCreateOptionsMenu(menu, inflater)
    }
}