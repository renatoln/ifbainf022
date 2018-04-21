import QtQuick 2.0
import QtQuick.Window 2.0

Item{

   width:swipeView.width
   height: swipeView.height/3


Rectangle{
    id:recMessage
    width: swipeView.width
    height: swipeView.height/5

Rectangle{
    id:cabecalho
    width:parent.width
    height:swipeView.height/22
    color:"#4355A5"
    Text {



    text:valorTitulo
    //anchors.centerIn: recMessage
    font.pixelSize: 15

    }

}

Text {


text: valorTexto
y:30
font.pixelSize: 10
}
}

}
