package br.edu.ifba.emile

import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.ProgressBar
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.Retrofit
import android.widget.Toast
import br.edu.ifba.emile.dominio.Usuario
import br.edu.ifba.emile.rest.RestService

import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response





/**
 * Created by douglas on 24/01/2018.
 */
class LoginActivity : AppCompatActivity(),Callback<List<Usuario>> {

    // adicionar IMplements  ,Callback<List<Usuario>>
    //
      var retrofit: Retrofit? = null
      var login_edt_login: EditText?= null
      var login_edt_senha: EditText?= null
      var usuario : Usuario?= null
      var login: String ?= null
      var senha: String?=null
     var progressbar :ProgressBar?= null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

         login_edt_login = findViewById<EditText>(R.id.login_edt_login)
         login_edt_senha = findViewById<EditText>(R.id.login_edt_senha)
        progressbar= findViewById<ProgressBar>(R.id.progressbar_login)

        retrofit = Retrofit.Builder()
                .baseUrl("http://renatoln.pythonanywhere.com/usuarios/")
                .addConverterFactory(GsonConverterFactory.create())
                .build()

        val btn_click_me = findViewById<Button>(R.id.login_btn_logar)

        btn_click_me.setOnClickListener(View.OnClickListener {
            entrar()
        })
        val btn_click_me2 = findViewById<Button>(R.id.login_btn_esqueci_senha)

        btn_click_me2.setOnClickListener(View.OnClickListener {
            val login = Intent(this, EsqueciSenhaActivity::class.java)
            startActivity(login)
        })
    }

    fun entrar()  {

        var service = retrofit!!.create(RestService::class.java)
        var call= service.validateUser("?email="+
                                            login_edt_login!!.text.toString()+
                                            "&senha="+login_edt_senha!!.text.toString());
        call.enqueue(this)
    }



  override fun onResponse(call: Call<List<Usuario>>?, response: Response<List<Usuario>>?) {
      progressbar!!.visibility=View.VISIBLE
        if (response!!.isSuccessful()) {
            val changesList = response.body()
            if(changesList !=null){

            changesList!!.forEach {
                   // change -> Toast.makeText(this@LoginActivity,change.email.toString() , Toast.LENGTH_SHORT).show()
                   change ->   usuario=change
                    val login = Intent(this, MainActivity::class.java)
                     login.putExtra("usuario", usuario);
                    startActivity(login)
                    finish()

                }

            }

        }
    }

    override fun onFailure(call: Call<List<Usuario>>?, t: Throwable?) {
        Toast.makeText(this@LoginActivity, "Falha na Conexão", Toast.LENGTH_SHORT).show()
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

    /*
    override fun onResponse(call: Call<List<Usuario>>?, response: Response<List<Usuario>>?) {
        if (response!!.isSuccessful()) {
            val changesList = response.body()
            Toast.makeText(this@LoginActivity, "Sucesso"+ response.isSuccessful, Toast.LENGTH_SHORT).show()

             changesList!!.forEach {
               change -> Toast.makeText(this@LoginActivity,change.email.toString() , Toast.LENGTH_SHORT).show()
               //  System.out.println(change.subject)
                 if(change.email.toString().equals(login_edt_login.toString()) &&
                         change.senha.toString().equals(login_edt_senha.toString())){
                     val login = Intent(this, MainActivity::class.java)
                     startActivity(login)
                     finish()

                 }
             }
        } else {
            Toast.makeText(this@LoginActivity, "ERRO"+ response.errorBody(), Toast.LENGTH_SHORT).show()
        }
    }
    override fun onFailure(call: Call<List<Usuario>>?, t: Throwable?) {
        Toast.makeText(this@LoginActivity, "ERRO"+ t!!.printStackTrace(), Toast.LENGTH_SHORT).show()
    }
*/


}



