import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UsersProvider } from '../../providers/users/users';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  senha: string;
  private usuarioLogado: any;
  private listaMensagens = new Array<any>();
  private listaUsuarios = new Array<any>();
  private lista = new Array<any>();
  private muralDeMensagens_card21 = false;
  private muralDeMensagens_card22 = false;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private userProvider: UsersProvider) {
  }

  login(){    
    this.userProvider.login(this.email, this.senha)
        .then((result: any) => {
          this.usuarioLogado = result;
        if(!isEmpty(this.usuarioLogado[0])){ 
          if(this.usuarioLogado[0].tipo == 1){// Usuário tipo 1 = professor
            localStorage.setItem('remetente',JSON.stringify(this.usuarioLogado[0]));
            localStorage.setItem('idRemetente', JSON.stringify(this.usuarioLogado[0].id));
            this.consultaMensagemEnviada(this.usuarioLogado[0].id);
          }else{   
            this.consultaUsuarios();
            this.consultaMensagem(this.usuarioLogado[0].id) ;      
          }
          this.toast.create({message: "Usuário logado com sucesso. ", duration: 3000}).present();
        }else{
          this.toast.create({message: "Erro ao tentar logar.", duration: 3000}).present();
        }        
     })
     .catch((error: any) => {
        this.toast.create({message: "Erro ao tentar logar.", duration: 3000}).present();
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
  consultaMensagem(id: number){
    this.userProvider.listarMensagens(id)
      .then((result: any) =>{
        this.listaMensagens = result;

        var i;
        var obj;
        var j = 0;
        var r = 0;
        for(i=0; i < this.listaMensagens.length; i++){
          for(j=0; j < this.listaUsuarios.length; j++){
            if (this.listaMensagens[i].remetente == this.listaUsuarios[j].id){
              obj = {
                idAluno: this.usuarioLogado[0].id,
                tituloMensagem: this.listaMensagens[i].titulo,
                textoMensagem: this.listaMensagens[i].texto,
                nomeRemetente: this.listaUsuarios[j].nome,
                dataEnvioMensagem: this.listaMensagens[i].data
              }
              this.lista[r] = obj;
              r++;
            }
          }
         }
        this.muralDeMensagens_card21 = false; 
        this.muralDeMensagens_card22 = true
        this.navCtrl.push(HomePage, {listaMensagens: this.listaMensagens, lista: this.lista,
           muralDeMensagens_card21: this.muralDeMensagens_card21, muralDeMensagens_card22: this.muralDeMensagens_card22});
         /*
          Objeto JavaScript que usamos para armazenar dados no navegador.
         */
         localStorage.setItem('listaObjetos',JSON.stringify(this.lista));
         localStorage.setItem('flagHtml', JSON.stringify(this.muralDeMensagens_card21));
    })
  }

  consultaUsuarios(){
    this.userProvider.listarUsuarios()
    .then((result: any) =>{
      this.listaUsuarios = result;
  })
  }

  consultaMensagemEnviada(id: number){
    this.userProvider.listarMensagensEnviadas(id)
      .then((result: any) =>{
        this.listaMensagens = result;
        this.muralDeMensagens_card21 = true; 
        this.muralDeMensagens_card22 = false;
        this.navCtrl.push(HomePage, {listaMensagens: this.listaMensagens, 
            muralDeMensagens_card21: this.muralDeMensagens_card21, muralDeMensagens_card22: this.muralDeMensagens_card22});
        localStorage.setItem('listaObjetos',JSON.stringify(this.listaMensagens));
        localStorage.setItem('flagHtml', JSON.stringify(this.muralDeMensagens_card21));
      });
  }
  
  
}