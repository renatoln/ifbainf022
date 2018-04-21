import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersProvider {
   /*
    VARIÁVEIS DE ENDEREÇOS DOS SERVIÇOS
  */ 
  private API_REST_LOGIN = "http://renatoln.pythonanywhere.com/usuarios/?email=";
  private API_REST_MENSAGEM = "http://renatoln.pythonanywhere.com/mensagens/?destinatario=";
  private API_REST_MENSAGEM_ENVIADA = "http://renatoln.pythonanywhere.com/mensagens/?remetente=";
  private API_REST_USUARIOS = "http://renatoln.pythonanywhere.com/usuarios/";
  private API_REST_DISCIPLINAS_USUARIOS = "http://renatoln.pythonanywhere.com/disciplina_alunoss/?estudante=";
  private API_REST_DISCIPLINAS_PROFESSOR = "http://renatoln.pythonanywhere.com/disciplinas/?professor=";
  private API_REST_ENVIAR_MENSAGEM = "http://renatoln.pythonanywhere.com/mensagens/";

  constructor(public http : Http){
   } 

  /*
    MÉTODO PARA CONSULTAR LOGIN
  */  
  login(email: string, senha: string){
    return new Promise((resolve, reject) =>{
      if(email != null && senha != null){
      var data ={
        email: email,
        senha: senha
      };
    }else{
      (error) => {
        reject(error);
      }
    }      
      this.http.get(this.API_REST_LOGIN + data.email + '&senha=', data.senha)
      .subscribe((result: any) => {
        resolve(result.json())
      }),
      (error) => {
        reject(error);
      }
    });
   }

    /*
    MÉTODO PARA LISTAR MENSAGENS
  */ 
   listarMensagens(id: number){
    return new Promise((resolve, reject) =>{
      if(id != null){
      var objeto ={
        id: id
      };
    }else{
      (error) => {
        reject(error);
      }
    }      
      this.http.get(this.API_REST_MENSAGEM + objeto.id)
      .subscribe((result: any) => {
        resolve(result.json())
      }),
      (error) => {
        reject(error);
      }
    });
   }

 /*
    MÉTODO PARA LISTAR MENSAGENS ENVIADAS 
  */ 
 listarMensagensEnviadas(id: number){
  return new Promise((resolve, reject) =>{
    if(id != null){
    var objeto ={
      id: id
    };
  }else{
    (error) => {
      reject(error);
    }
  }      
    this.http.get(this.API_REST_MENSAGEM_ENVIADA + objeto.id)
    .subscribe((result: any) => {
      resolve(result.json())
    }),
    (error) => {
      reject(error);
    }
  });
 }


  /*
    MÉTODO PARA LISTAR USUARIOS
  */ 
   listarUsuarios(){
    return new Promise((resolve, reject) =>{        
      this.http.get(this.API_REST_USUARIOS)
      .subscribe((result: any) => {
        resolve(result.json())
      }),
      (error) => {
        reject(error);
      }
    });
   }

  /*
    MÉTODO PARA LISTAR DISCIPLINAS
  */ 
   listarDisciplinas(id: number){
    return new Promise((resolve, reject) =>{
      this.http.get(this.API_REST_DISCIPLINAS_USUARIOS + id)
      .subscribe((result: any) => {
        resolve(result.json())
      }),
      (error) => {
        reject(error);
      }
    });
   }


  /*
    MÉTODO PARA LISTAR DISCIPLINAS DO PROFESSOR
  */ 
 listarDisciplinasProfessor(id: number){
  return new Promise((resolve, reject) =>{
    this.http.get(this.API_REST_DISCIPLINAS_PROFESSOR + id)
    .subscribe((result: any) => {
      resolve(result.json())
    }),
    (error) => {
      reject(error);
    }
  });
   
 }
  /*
    MÉTODO PARA ENVIAR MENSAGEM PARA ALUNO
  */
   enviarMensagem(titulo: string, texto: string, destinatario: Array<number>, remetente: number){
    return new Promise((resolve, reject) =>{
      // Colocando informação no header da requisição usando o metodo post
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let header = new RequestOptions({headers : headers});

      var obj = {
        data : new Date,
        titulo : titulo, 
        texto : texto,
        remetente : remetente,
        destinatario : destinatario
      }
      this.http.post(this.API_REST_ENVIAR_MENSAGEM, obj, header)
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json());
      });
    })
   }
}
