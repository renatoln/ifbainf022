package br.edu.ifba.emile

import android.os.Bundle
import android.os.Handler
import android.support.v7.app.AppCompatActivity
import br.edu.ifba.emile.R.layout.activity_intro
import android.content.Intent




/**
 * Created by douglas on 17/01/2018.
 */
class IntroActivity : AppCompatActivity(),Runnable {


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(activity_intro)
        val handler = Handler()
        handler.postDelayed(this, 4000)
    }

    override fun run() {
        val login = Intent(this, LoginActivity::class.java)
        startActivity(login)
        finish()
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