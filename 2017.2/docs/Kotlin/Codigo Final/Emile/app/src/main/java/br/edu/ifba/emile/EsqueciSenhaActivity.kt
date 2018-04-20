package br.edu.ifba.emile

import android.app.Fragment
import android.content.Intent
import android.os.Bundle
import android.support.annotation.Nullable
import android.support.v7.app.AppCompatActivity
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.ImageView
import android.widget.Toolbar


/**
 * Created by douglas on 28/01/2018.
 */
class EsqueciSenhaActivity: AppCompatActivity() {


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_esqueci_senha)

        val toolbar=findViewById<android.support.v7.widget.Toolbar>(R.id.toolbar)
        setSupportActionBar(toolbar);
        getSupportActionBar()?.setDisplayHomeAsUpEnabled(true);

        setTitle("Esqueci Senha")

       val btn_voltar=findViewById<ImageView>(R.id.bt_esqueci_senha_voltar)

        btn_voltar.setOnClickListener(View.OnClickListener {
            val login = Intent(this, LoginActivity::class.java)
            startActivity(login)
        })



    }

}