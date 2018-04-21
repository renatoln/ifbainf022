import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';

/**
 * Generated class for the EnvioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-envio',
  templateUrl: 'envio.html',
})
export class EnvioPage {
  
  titulo: string;
  mensagem: string;
  destinatarios : string
  destinatario = new Array<number>();

  
  idRemetente: number;
  
  remetente = new Array<any>();
  
  private mensagemEnviada = new Array<any>();
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private userProvider: UsersProvider) {
      this.remetente = JSON.parse(localStorage.getItem("remetente"));
      this.idRemetente = JSON.parse(localStorage.getItem("idRemetente"));
      console.log(this.idRemetente);
    }
    
    enviarMensagem(){
    this.destinatario.push(parseInt(this.destinatarios));
    this.userProvider.enviarMensagem(this.titulo, this.mensagem, this.destinatario, this.idRemetente)
      .then((result: any) => {
        this.mensagemEnviada = result;
        if(!isEmpty(this.mensagemEnviada)){
          this.toast.create({message: "Mensagem enviada com sucesso. ", duration: 3000}).present();
        }else{
          this.toast.create({message: "Erro ao tentar enviar mensagem.", duration: 3000}).present();
        }
      })
      .catch((error: any) => {
        this.toast.create({message: "Erro ao tentar enviar mensagem.", duration: 3000}).present();
      })

      /*
        Valida se o objeto esta preenchido.
      */
     function isEmpty(obj) {
      for(var prop in obj) {
          if(obj.hasOwnProperty(prop))
              return false;
      }
  
      return true;
  }
  }
}
