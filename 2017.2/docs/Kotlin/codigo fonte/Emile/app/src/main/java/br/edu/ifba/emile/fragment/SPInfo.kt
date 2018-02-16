package com.componentes.douglas.telaintroucao1

import android.content.Context
import android.support.v4.app.FragmentActivity

/**
 * Created by douglas on 27/06/2017.
 */
class SPInfo(val context: FragmentActivity?) {

    fun updateIntroStatus(status: Boolean) {
        if (context != null) {
            context.
                    getSharedPreferences("PREF", Context.MODE_PRIVATE)
                    .edit().putBoolean("status", status)
                    .apply()
        }
    }

    fun isIntroAcetivityShow() = context!!.
            getSharedPreferences("PREF", Context.MODE_PRIVATE)
            .getBoolean("status", false)

}