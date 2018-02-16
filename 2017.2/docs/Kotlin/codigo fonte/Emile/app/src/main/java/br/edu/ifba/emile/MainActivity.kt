package br.edu.ifba.emile

import android.annotation.TargetApi
import android.app.Fragment
import android.content.Intent
import android.os.Build
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.support.annotation.RequiresApi
import android.support.design.widget.AppBarLayout
import android.support.design.widget.FloatingActionButton

import android.support.design.widget.NavigationView

import android.support.v4.view.GravityCompat
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.widget.Toolbar
import android.view.MenuItem
import android.view.View
import android.widget.Button
import br.edu.ifba.emile.fragment.*
import kotlinx.android.synthetic.main.app_bar.*
import java.nio.file.Files.find
import kotlin.properties.Delegates


class MainActivity : AppCompatActivity(),NavigationView.OnNavigationItemSelectedListener {

     var  frag: Fragment? = null;
    // inicia o Fragment Home
    private var mPendingRunnable: Runnable? = null
    var app_bar: AppBarLayout? = null

    var fab_main:FloatingActionButton?= null


    @RequiresApi(Build.VERSION_CODES.LOLLIPOP)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val navigationView=findViewById<NavigationView>(R.id.nav_view)

        app_bar=findViewById(R.id.app_bar_main)

        val toolbar=findViewById<Toolbar>(R.id.toolbar)
        setSupportActionBar(toolbar);

        setTitle(getString(R.string.app_name));

        val drawerLayout = findViewById<DrawerLayout>(R.id.drawer_layout)

        val toggle = ActionBarDrawerToggle(this,
                drawerLayout,
                toolbar, 0, 0)

        drawerLayout.addDrawerListener(toggle)
        toggle.syncState();

       navigationView.setNavigationItemSelectedListener(this);

        initiHomeFragment()
        // executa o Runnable
        mPendingRunnable!!.run();


        val btn_click_me = findViewById<Button>(R.id.nav_btn_sing_out)

        btn_click_me.setOnClickListener(View.OnClickListener {
            val login = Intent(this, LoginActivity::class.java)
            startActivity(login)

        })

        fab_main=findViewById<FloatingActionButton>(R.id.fab_main)


    }
    @RequiresApi(Build.VERSION_CODES.LOLLIPOP)
    @SuppressWarnings("StatementWithEmptyBody")
    override fun onNavigationItemSelected(item: MenuItem): Boolean {
        val itemId = item.itemId

          when(itemId){
              R.id.nav_sobre-> callSobre()
              R.id.nav_grupos->callGrupos()
              R.id.nav_perfil->callPerfil();
              R.id.nav_encontre_nos->callEncontre()
              R.id.nav_contato->callFalaConosco()
              else ->callNotification()
          }

        val fragmentManager = fragmentManager
        fragmentManager.beginTransaction()
                .replace(R.id.content_frame, frag)
                .commit()

        val drawerLayout = findViewById<View>(R.id.drawer_layout) as DrawerLayout
        drawerLayout.closeDrawer(GravityCompat.START)

        return true
    }

    // inicializa um Fragment Home
    fun initiHomeFragment() {
        mPendingRunnable = Runnable {
            // update the main content by replacing fragments
            callNotification()
            val fragmentManager = fragmentManager
            fragmentManager.beginTransaction()
                    .replace(R.id.content_frame, frag)
                    .commit()
        }
    }

    @TargetApi(Build.VERSION_CODES.LOLLIPOP)
    fun callPerfil(){
       app_bar!!.elevation=0.0f
        frag=PerfilFragment()
        fab_main?.setVisibility(View.INVISIBLE)
    }

    @TargetApi(Build.VERSION_CODES.LOLLIPOP)
    fun callNotification(){
        app_bar!!.elevation=0.0f
        frag=NotificacaoFragment()
        fab_main?.setVisibility(View.VISIBLE)
    }
    @TargetApi(Build.VERSION_CODES.LOLLIPOP)
    fun callSobre(){
        app_bar!!.elevation=0.0f
        frag = SobreFragment();
        fab_main?.setVisibility(View.VISIBLE)
    }
    @TargetApi(Build.VERSION_CODES.LOLLIPOP)
    fun callGrupos(){
        app_bar!!.elevation=0.0f
        frag= GruposFrafment()
        fab_main?.setVisibility(View.VISIBLE)
    }

    @TargetApi(Build.VERSION_CODES.LOLLIPOP)
    fun callFalaConosco(){
        app_bar!!.elevation=0.0f
        frag=FalaConoscoFragment()
        fab_main?.setVisibility(View.VISIBLE)
    }

    @TargetApi(Build.VERSION_CODES.LOLLIPOP)
    fun callEncontre(){
        app_bar!!.elevation=0.0f
        frag=EncontreFragment();
        fab_main?.setVisibility(View.INVISIBLE)

    }


    override fun onBackPressed() {
        val drawer = findViewById<View>(R.id.drawer_layout) as DrawerLayout
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START)
        } else {
            super.onBackPressed()
        }
    }

    override fun onRestart() {
        super.onRestart()
    }

    override fun onStart() {
        super.onStart()
    }

    override fun onStop() {
        super.onStop()
    }

    override fun onDestroy() {
        super.onDestroy()
    }

    override fun onPause() {
        super.onPause()
    }
}
