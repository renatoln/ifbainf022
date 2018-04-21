import QtQuick 2.0
import QtQuick.Controls 2.1
import "Rest.js" as Rest

ListModel {

Component.onCompleted: {
  console.log(session)
  //var ses=session
  var JsonObject=(Rest.listarMensagens(session))
    console.log("teste"+JsonObject)


  for(var ix =0; ix < JsonObject.length; ix++){

      //delete.append({titulo.text : JsonObject[ix].titulo})
       //listNot.model.append({valorTitulo:JsonObject[ix].titulo+ix});
       listNot.model.append({valorTexto:JsonObject[ix].texto+ix});
     //  listNot.model.append({valorTitulo:JsonObject[ix].titulo+ix});



}



}


    /*
    ListElement
    {
        assunto:"Grupos"

        corpo:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor sollicitudin tempus. Nullam leo nisi, iaculis eget leo in, tincidunt lacinia tortor. In sed erat nec ligula hendrerit consectetur nec non dui. In elementum magna a massa dictum porta. Vestibulum non mauris nec dolor mattis varius. Suspendisse egestas risus et dui laoreet placerat. Donec mattis turpis sit amet risus euismod molestie. Praesent sed vestibulum augue.
        Sed elit nibh, sodales eu lacus eget, blandit finibus nisi.
        Proin in quam leo. Curabitur eget dui sed lorem vestibulum
        ultricies. In rutrum euismod felis in facilisis. Vestibulum
        nisi diam, dapibus a mi sit amet, congue dapibus diam. Donec
        venenatis, enim ac malesuada fermentum, lectus velit tristique
        ligula, ut sodales nunc augue in mi. Etiam sodales vitae erat vel
        euismod. Pellentesque sapien mi, sagittis sed euismod nec, vestibulum quis enim. Nulla pretium lectus ut volutpat condimentum. Donec vel felis finibus, ornare purus nec, varius massa. Mauris et pulvinar elit. Nullam ornare in ante vel varius. Quisque feugiat pretium risus, ac iaculis nisl mollis hendrerit. Ut ante magna, sagittis et elementum quis, sollicitudin vel lacus. "
    }


    ListElement
    {
        assunto:"Prova Remarcada"

        corpo:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor sollicitudin tempus. Nullam leo nisi, iaculis eget leo in, tincidunt lacinia tortor. In sed erat nec ligula hendrerit consectetur nec non dui. In elementum magna a massa dictum porta. Vestibulum non mauris nec dolor mattis varius. Suspendisse egestas risus et dui laoreet placerat. Donec mattis turpis sit amet risus euismod molestie. Praesent sed vestibulum augue.
        Sed elit nibh, sodales eu lacus eget, blandit finibus nisi.
        Proin in quam leo. Curabitur eget dui sed lorem vestibulum
        ultricies. In rutrum euismod felis in facilisis. Vestibulum
        nisi diam, dapibus a mi sit amet, congue dapibus diam. Donec
        venenatis nim ac malesuada fermentum, lectus velit tristique
        ligula, ut sodales nunc augue in mi. Etiam sodales vitae erat vel
        euismod. Pellentesque sapien mi, sagittis sed euismod nec, vestibulum quis enim. Nulla pretium lectus ut volutpat condimentum. Donec vel felis finibus, ornare purus nec, varius massa. Mauris et pulvinar elit. Nullam ornare in ante vel varius. Quisque feugiat pretium risus, ac iaculis nisl mollis hendrerit. Ut ante magna, sagittis et elementum quis, sollicitudin vel lacus. "
    }


    ListElement
    {
        assunto:"Prova teste"

        corpo:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor sollicitudin tempus. Nullam leo nisi, iaculis eget leo in, tincidunt lacinia tortor. In sed erat nec ligula hendrerit consectetur nec non dui. In elementum magna a massa dictum porta. Vestibulum non mauris nec dolor mattis varius. Suspendisse egestas risus et dui laoreet placerat. Donec mattis turpis sit amet risus euismod molestie. Praesent sed vestibulum augue.
        Sed elit nibh, sodales eu lacus eget, blandit finibus nisi.
        Proin in quam leo. Curabitur eget dui sed lorem vestibulum
        ultricies. In rutrum euismod felis in facilisis. Vestibulum
        nisi diam, dapibus a mi sit amet, congue dapibus diam. Donec
        venenatis nim ac malesuada fermentum, lectus velit tristique
        ligula, ut sodales nunc augue in mi. Etiam sodales vitae erat vel
        euismod. Pellentesque sapien mi, sagittis sed euismod nec, vestibulum quis enim. Nulla pretium lectus ut volutpat condimentum. Donec vel felis finibus, ornare purus nec, varius massa. Mauris et pulvinar elit. Nullam ornare in ante vel varius. Quisque feugiat pretium risus, ac iaculis nisl mollis hendrerit. Ut ante magna, sagittis et elementum quis, sollicitudin vel lacus. "
    }
//teste


    ListElement
    {
        assunto:"Teste1"

        corpo:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor sollicitudin tempus. Nullam leo nisi, iaculis eget leo in, tincidunt lacinia tortor. In sed erat nec ligula hendrerit consectetur nec non dui. In elementum magna a massa dictum porta. Vestibulum non mauris nec dolor mattis varius. Suspendisse egestas risus et dui laoreet placerat. Donec mattis turpis sit amet risus euismod molestie. Praesent sed vestibulum augue.
        Sed elit nibh, sodales eu lacus eget, blandit finibus nisi.
        Proin in quam leo. Curabitur eget dui sed lorem vestibulum
        ultricies. In rutrum euismod felis in facilisis. Vestibulum
        nisi diam, dapibus a mi sit amet, congue dapibus diam. Donec
        venenatis, enim ac malesuada fermentum, lectus velit tristique
        ligula, ut sodales nunc augue in mi. Etiam sodales vitae erat vel
        euismod. Pellentesque sapien mi, sagittis sed euismod nec, vestibulum quis enim. Nulla pretium lectus ut volutpat condimentum. Donec vel felis finibus, ornare purus nec, varius massa. Mauris et pulvinar elit. Nullam ornare in ante vel varius. Quisque feugiat pretium risus, ac iaculis nisl mollis hendrerit. Ut ante magna, sagittis et elementum quis, sollicitudin vel lacus. "
    }


    ListElement
    {
        assunto:"Teste 2"

        corpo:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor sollicitudin tempus. Nullam leo nisi, iaculis eget leo in, tincidunt lacinia tortor. In sed erat nec ligula hendrerit consectetur nec non dui. In elementum magna a massa dictum porta. Vestibulum non mauris nec dolor mattis varius. Suspendisse egestas risus et dui laoreet placerat. Donec mattis turpis sit amet risus euismod molestie. Praesent sed vestibulum augue.
        Sed elit nibh, sodales eu lacus eget, blandit finibus nisi.
        Proin in quam leo. Curabitur eget dui sed lorem vestibulum
        ultricies. In rutrum euismod felis in facilisis. Vestibulum
        nisi diam, dapibus a mi sit amet, congue dapibus diam. Donec
        venenatis nim ac malesuada fermentum, lectus velit tristique
        ligula, ut sodales nunc augue in mi. Etiam sodales vitae erat vel
        euismod. Pellentesque sapien mi, sagittis sed euismod nec, vestibulum quis enim. Nulla pretium lectus ut volutpat condimentum. Donec vel felis finibus, ornare purus nec, varius massa. Mauris et pulvinar elit. Nullam ornare in ante vel varius. Quisque feugiat pretium risus, ac iaculis nisl mollis hendrerit. Ut ante magna, sagittis et elementum quis, sollicitudin vel lacus. "
    }


    ListElement
    {
        assunto:"teste3"

        corpo:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor sollicitudin tempus. Nullam leo nisi, iaculis eget leo in, tincidunt lacinia tortor. In sed erat nec ligula hendrerit consectetur nec non dui. In elementum magna a massa dictum porta. Vestibulum non mauris nec dolor mattis varius. Suspendisse egestas risus et dui laoreet placerat. Donec mattis turpis sit amet risus euismod molestie. Praesent sed vestibulum augue.
        Sed elit nibh, sodales eu lacus eget, blandit finibus nisi.
        Proin in quam leo. Curabitur eget dui sed lorem vestibulum
        ultricies. In rutrum euismod felis in facilisis. Vestibulum
        nisi diam, dapibus a mi sit amet, congue dapibus diam. Donec
        venenatis nim ac malesuada fermentum, lectus velit tristique
        ligula, ut sodales nunc augue in mi. Etiam sodales vitae erat vel
        euismod. Pellentesque sapien mi, sagittis sed euismod nec, vestibulum quis enim. Nulla pretium lectus ut volutpat condimentum. Donec vel felis finibus, ornare purus nec, varius massa. Mauris et pulvinar elit. Nullam ornare in ante vel varius. Quisque feugiat pretium risus, ac iaculis nisl mollis hendrerit. Ut ante magna, sagittis et elementum quis, sollicitudin vel lacus. "
    }
*/


}
