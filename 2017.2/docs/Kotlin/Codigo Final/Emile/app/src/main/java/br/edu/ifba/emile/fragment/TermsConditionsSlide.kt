package postbook.com.br.postbook.fragments

import agency.tango.materialintroscreen.SlideFragment
import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import br.edu.ifba.emile.IntroActivity
import br.edu.ifba.emile.R
import com.componentes.douglas.telaintroucao1.SPInfo
import kotlinx.android.synthetic.main.fragment_termos_condicoes.*


/**
 * Created by douglas on 20/10/2017.
 */
class TermsConditionsSlide : SlideFragment() {

    override fun onCreateView(
            inflater: LayoutInflater?,
            container: ViewGroup?,
            savedInstanceState: Bundle?): View? {

        return inflater?.inflate(R.layout.fragment_termos_condicoes, container, false)
    }

    override fun canMoveFurther(): Boolean {
        if (cb_concordo.isChecked) {
            SPInfo(activity).updateIntroStatus(true)

            val intent = Intent(activity, IntroActivity::class.java)
            intent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP)
            startActivity(intent)
            activity.finish()
        }
        return cb_concordo.isChecked
    }

    override fun cantMoveFurtherErrorMessage(): String {
        return activity.resources.getString(R.string.slide_4_checkbox_error)
    }

    override fun backgroundColor(): Int {
        return R.color.accent
    }

    override fun buttonsColor(): Int {
        return R.color.colorPrimary
    }

}