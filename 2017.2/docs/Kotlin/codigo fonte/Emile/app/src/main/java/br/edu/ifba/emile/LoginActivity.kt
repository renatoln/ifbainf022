package br.edu.ifba.emile

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.support.annotation.IdRes
import android.support.v7.app.AppCompatActivity
import android.view.View
import android.widget.Button
import br.edu.ifba.emile.dominio.User

/**
 * Created by douglas on 24/01/2018.
 */
class LoginActivity : AppCompatActivity() {


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        val btn_click_me = findViewById<Button>(R.id.login_btn_logar)

        btn_click_me.setOnClickListener(View.OnClickListener {
            val login = Intent(this, MainActivity::class.java)
            startActivity(login)
            finish()

        })


        val btn_click_me2 = findViewById<Button>(R.id.login_btn_esqueci_senha)

        btn_click_me2.setOnClickListener(View.OnClickListener {
            val login = Intent(this, EsqueciSenhaActivity::class.java)
            startActivity(login)

        })

    }

    override fun onRestart() {
        super.onRestart()
    }

    override fun onPause() {
        super.onPause()
    }

    override fun onStop() {
        super.onStop()
    }

    override fun onDestroy() {
        super.onDestroy()
    }

    override fun onResume() {
        super.onResume()
    }

}



