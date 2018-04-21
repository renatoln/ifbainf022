import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public lista_mensagens = new Array<any>();
  public lista = new Array<any>();
  public muralDeMensagens_card21 = false;
  public muralDeMensagens_card22 = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lista = JSON.parse(localStorage.getItem('listaObjetos'));
    this.muralDeMensagens_card21 = JSON.parse(localStorage.getItem('flagHtml'));
    var id;

    if(this.muralDeMensagens_card21 != false){
      this.muralDeMensagens_card22 = false;
      id = document.getElementById('Envio');
      id.hidden = false;
    }else{
      id = document.getElementById('Envio');
      id.hidden = true;
      this.muralDeMensagens_card22 = true;
    }
    
  }
  

}

