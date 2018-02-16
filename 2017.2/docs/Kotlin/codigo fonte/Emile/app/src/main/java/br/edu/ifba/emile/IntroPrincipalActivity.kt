package br.edu.ifba.emile

import agency.tango.materialintroscreen.MaterialIntroActivity
import agency.tango.materialintroscreen.MessageButtonBehaviour
import agency.tango.materialintroscreen.SlideFragmentBuilder
import android.os.Bundle
import android.view.View
import android.Manifest
import android.content.Intent
import com.componentes.douglas.telaintroucao1.SPInfo
import postbook.com.br.postbook.fragments.TermsConditionsSlide

/**
 * Created by douglas on 07/02/2018.
 */
class IntroPrincipalActivity : MaterialIntroActivity() {


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

// Verifica pra ver se ja passou pela tela de introducao
        verifyIntroActivity()

// Slide 1
        addSlide(
                SlideFragmentBuilder()
                        .backgroundColor(R.color.colorPrimary)
                        .buttonsColor(R.color.colorAccent)
                        .title(resources.getString(R.string.slide1))
                        .description(resources.getString(R.string.slide1_descricao))
                        .image(R.drawable.ic_content_save_white_24dp)
                        .build(),
                MessageButtonBehaviour(object: View.OnClickListener{
                    override fun onClick(p0: View?) {
                        showMessage("Voce pode usar da forma que voce quizer e como quiser")
                    }
                },"Formato")
        )
// Permissoes
        val needPermissions= arrayOf(
                Manifest.permission.INTERNET,
                Manifest.permission.WRITE_EXTERNAL_STORAGE,
                Manifest.permission.READ_EXTERNAL_STORAGE,
                Manifest.permission.ACCESS_NETWORK_STATE,
                Manifest.permission.READ_CONTACTS,
                Manifest.permission.READ_PHONE_STATE,
                Manifest.permission.GET_ACCOUNTS,
                Manifest.permission.ACCESS_FINE_LOCATION,
                Manifest.permission.ACCESS_COARSE_LOCATION,
                Manifest.permission.CAMERA

        )

        // Slide 2
        addSlide(
                SlideFragmentBuilder()
                        .backgroundColor(R.color.colorPrimary)
                        .buttonsColor(R.color.colorAccent)
                        .title(resources.getString(R.string.slide1))
                        .description(resources.getString(R.string.slide1_descricao))
                        .image(R.drawable.ic_account_circle_grey600_24dp)
                        .neededPermissions(needPermissions)
                        .build()

        )

        //Possibilidade de Permissoes
        val possibPermissions= arrayOf(
                Manifest.permission.BATTERY_STATS
        )

        addSlide(
                SlideFragmentBuilder()
                        .backgroundColor(R.color.colorPrimary)
                        .buttonsColor(R.color.colorAccent)
                        .title(resources.getString(R.string.slide1))
                        .description(resources.getString(R.string.slide1_descricao))
                        .image(R.drawable.ic_camera_white_24dp)
                        .possiblePermissions(possibPermissions)
                        .build()

        )

        addSlide( TermsConditionsSlide())


    }

    private fun verifyIntroActivity(){
        if(SPInfo(this).isIntroAcetivityShow()){
            startActivity(
                    Intent(this, IntroActivity::class.java)
            )
            finish()
        }
    }
}