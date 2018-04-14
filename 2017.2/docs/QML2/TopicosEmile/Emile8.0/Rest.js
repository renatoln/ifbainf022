function getUrlBase(){
 return "http://renatoln.pythonanywhere.com";
}

function getJsonMensagem(){
 return JSON.parse("");
}

function logar(login, senha){
 var url = getUrlBase() + "/usuarios?email="+ login + "&senha=" + senha;
    console.log(url+"url");
 var jsonResposta = requestHttp("GET", url, false, null);
 var retorno = usuarioExiste(jsonResposta);
    console.log(retorno+"retorno");
 if(retorno){
     console.log(retorno+ "teste");
     return jsonResposta[0].id;

 }

 return undefined;
}

function listarMensagens(filtro){
     console.log("respostaAntesAntes")
 var url = getUrlBase() + "/mensagens_por_usuario/" + filtro;
     console.log("respostaAntes")
 var jsonResposta = requestHttp("GET", url, false, null);
    console.log(jsonResposta+"resposta1")
 if(jsonResposta.length > 0){
      console.log(jsonResposta+"resposta2")
     return jsonResposta;
 }
  console.log(jsonResposta+"respostaErro")
 return undefined;
}

function enviarMensagem(jsonMsg){
 var url = getUrlBase() + "/mensagens";
 var code = requestHttpPost("POST", url, false, jsonMsg);
 if(code >= 200 && code < 300){
     return true;
 }
 return false;
}

function listarUsuarios(filtro){
 var url = getUrlBase() + "/usuarios/" + filtro;
 var jsonResposta = requestHttp("GET", url, false, null);
 if(jsonResposta.length > 0){
     return jsonResposta;
 }
 return undefined;
}

function listarDisciplinas(filtro){
 var url = getUrlBase() + "/disciplinas/" + filtro;
 var jsonResposta = requestHttp("GET", url, false, null);
 if(jsonResposta.length > 0){
     return jsonResposta;
 }
 return undefined;
}

function usuarioExiste(array){
 if(array.length==0 || array==undefined || array==null){
     return false;
 }
 return true;
}

function requestHttp(metodo, url, sincrono, jsonReq){
 var xhr = new XMLHttpRequest();
 xhr.open(metodo, url, sincrono);
 xhr.setRequestHeader("Content-type", "Application/Json");
 xhr.send(jsonReq);
 return JSON.parse(xhr.responseText);
}

function requestHttpPost(metodo, url, sincrono, jsonReq){
 var xhr = new XMLHttpRequest();
 xhr.open(metodo, url, sincrono);
 xhr.setRequestHeader("Content-type", "Application/Json");
 xhr.send(jsonReq);
 return xhr.status;
}
