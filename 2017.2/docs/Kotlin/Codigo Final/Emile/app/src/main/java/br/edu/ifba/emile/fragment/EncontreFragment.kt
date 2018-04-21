package br.edu.ifba.emile.fragment

import android.annotation.SuppressLint
import android.app.Fragment
import android.os.Bundle
import android.support.annotation.Nullable

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import br.edu.ifba.emile.R
import com.google.android.gms.maps.GoogleMap
import com.google.android.gms.maps.MapView
import com.google.android.gms.maps.OnMapReadyCallback
import com.google.android.gms.maps.model.LatLng
import com.google.android.gms.maps.model.MarkerOptions
import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.CameraUpdate
import com.google.android.gms.common.GooglePlayServicesNotAvailableException
import com.google.android.gms.maps.MapsInitializer
import br.edu.ifba.emile.R.id.mapView
import br.edu.ifba.emile.R.id.mapView






/**
 * Created by douglas on 27/01/2018.
 */
class EncontreFragment : Fragment(), OnMapReadyCallback {


    private var mMap: MapView? = null
    var map: GoogleMap? = null

    override fun onSaveInstanceState(outState: Bundle?) {
        super.onSaveInstanceState(outState)

        mMap?.onSaveInstanceState(outState)
    }


    @SuppressLint("MissingPermission")
    override fun onCreateView(inflater: LayoutInflater?, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        val view = inflater?.inflate(R.layout.fragment_encontre, container, false)

        mMap = view?.findViewById<MapView>(R.id.mapView) as MapView
        mMap?.onCreate(savedInstanceState)
        mMap?.getMapAsync(this)

        return view
    }



    override fun onCreate(@Nullable savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        activity.title = "Encontre-nos"

    }

    override fun onResume() {
        super.onResume()
        mMap?.onResume()
    }

    override fun onPause() {
        super.onPause()
        mMap?.onPause()
    }

    override fun onStart() {
        super.onStart()
        mMap?.onStart()
    }

    override fun onStop() {
        super.onStop()
        mMap?.onStop()
    }

    override fun onDestroy() {
        super.onDestroy()
        mMap?.onDestroy()
    }

    override fun onLowMemory() {
        super.onLowMemory()
        mMap?.onLowMemory()
    }

    @SuppressLint("MissingPermission")
    override fun onMapReady(googleMap: GoogleMap) {

        map=googleMap
        map!!.uiSettings.isMyLocationButtonEnabled = true
        map!!.uiSettings.isMapToolbarEnabled = true
        map!!.uiSettings.isZoomControlsEnabled = true
        map!!.uiSettings.isCompassEnabled = true
        map!!.uiSettings.setAllGesturesEnabled(true)
        map!!.uiSettings.isIndoorLevelPickerEnabled = true
        map!!.uiSettings.isZoomGesturesEnabled = true
        map!!.uiSettings.isScrollGesturesEnabled = true
        map!!.uiSettings.isRotateGesturesEnabled = true
        map!!.uiSettings.isTiltGesturesEnabled = true
        map!!.isMyLocationEnabled = true

        val ifba = LatLng(-12.962628, -38.500899)
        googleMap.addMarker(MarkerOptions().position(ifba)
                .title("Instituto Federal Da Bahia"))
        googleMap.moveCamera(CameraUpdateFactory.newLatLng(ifba))

    /*    // Add a marker in Sydney, Australia, and move the camera.
        val sydney = LatLng(-34.0, 151.0)
        map!!.addMarker(MarkerOptions().position(sydney).title("Marker in Sydney"))
        map!!.moveCamera(CameraUpdateFactory.newLatLng(sydney))*/

    }
}