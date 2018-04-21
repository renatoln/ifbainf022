import QtQuick 2.7
import QtQuick.Controls 2.1
import "./"
/*
ApplicationWindow {

    id: window
    width: 200
    height: 228
    visible: true
}

#2296F3
    header: ToolBar{

    Label
    {

        text:"Notificações"
        y:20
        transform: Translate {
            x: drawer.position * swipeView.width * 0.60
        }

    }


    }
*/


Rectangle{


    id:tela
    width: 200
    height: 228





    Drawer {
        id: drawer
        width: 0.50 * tela.width
        height: tela.height

     Rectangle
     {
     id:backTopo
     width: parent.width
     height: 300
     color:"#2296F3"

     }

     Rectangle
     {
         id:backgroudmeio
         width:parent.width
         height: (parent.height/4)*3

         y:300

         ListView
         {

             width:parent.width
             height:200
             //y:300

         model:mod

         delegate:DelegateMenu{}

         MenuModelo{id:mod}
     }
     }

    }
//testando paginas


SwipeView {
        id: swipeView
        //anchors.fill: parent
        width:  parent.width
        height: parent.height

    //currentIndex: tabBar.currentIndex

        Page {
            Label{text:session+"sou session"
                x:300}

            ListView
            {
                id:listNot
                width:parent.width
                height:parent.height
                spacing: 2
                //y:300

            model:resolvido
            //isolandodelegate
            delegate:
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
               // valorTitulo


          //isolandodelegate


            //valorTitulo



            //delegate: DelegateNotificacao{}

            NotificacaoModelo{id:resolvido}


            }
          }

        Page {
            Label {
                text: qsTr("Second page")
                anchors.centerIn: parent
            }
        }


        transform: Translate {
            x: drawer.position * swipeView.width * 0.50
        }

 }

}

//}



