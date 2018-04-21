import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';

@Component({
  selector: 'page-list',
  templateUrl: 'disciplinas.html'
})
export class DisciplinasPage {

  private lista = new Array<any>();
  private listaDisciplinas = new Array<any>();
  // public muralDeDisciplinas1 = false;
  public muralDeDisciplinas1;
  // public muralDeDisciplinas2 = false;
  public muralDeDisciplinas2;

  constructor(
    public navCtrl: NavController, public navParams: NavParams, private userProvider: UsersProvider) {
      this.lista = JSON.parse(localStorage.getItem('listaObjetos'));
      var aluno = JSON.parse(localStorage.getItem("flagHtml"));
      var idProfessor = JSON.parse(localStorage.getItem("idRemetente"));

      if(!aluno){
        this.consultasDisciplinas(this.lista[0].idAluno);
        // this.muralDeDisciplinas1 = false;
        // this.muralDeDisciplinas2 = true;
      }else{
        this.consultasDisciplinasProfessor(idProfessor);
        // this.muralDeDisciplinas1 = true;
        // this.muralDeDisciplinas2 = false;
      }
  }

  /*
    MÉTODO PARA CONSULTAR DISCIPLINAS
  */
  consultasDisciplinas(id: number){
    this.userProvider.listarDisciplinas(id)
    .then((result: any) => {
    this.listaDisciplinas = result;
    // this.muralDeDisciplinas1 = false;
    this.muralDeDisciplinas1 = true;
    // this.muralDeDisciplinas2 = false;
    // this.muralDeDisciplinas2 = true;
  });
  }

   /*
    MÉTODO PARA CONSULTAR DISCIPLINAS DO PROFESSOR
  */
 consultasDisciplinasProfessor(id: number){
  this.userProvider.listarDisciplinasProfessor(id)
  .then((result: any) => {
  this.listaDisciplinas = result;
  // this.muralDeDisciplinas1 = true;
  // this.muralDeDisciplinas2 = false;
  this.muralDeDisciplinas2 = true;
  // this.muralDeDisciplinas1 = false;

});
}
}
