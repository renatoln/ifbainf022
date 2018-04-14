import QtQuick 2.10
import QtQuick.Controls 2.0
import QtQuick.Layouts 1.0
import "Rest.js" as Rest


Rectangle{
    color: "White"

ColumnLayout{
    spacing: 0
    width: parent.width
    height: parent.height

    Rectangle {
        //Layout.alignment: Qt.AlignCenter
        color: "#2296F3"
        Layout.fillWidth: true
        Layout.fillHeight: true
        visible: true

        Label{
        text:"Emile"
        font.pixelSize:  24 * pixelDensity
        anchors.centerIn: parent

        }
        //Layout.preferredWidth: 40
        //Layout.preferredHeight: 40
    }

    Rectangle {
       // Layout.alignment: Qt.AlignRight
        color: "#2296F3"
        //Layout.preferredWidth: 40
        //Layout.preferredHeight: 70
        Layout.fillWidth: true
        Layout.fillHeight: true

        Rectangle{


            width: parent.width/2
            height: parent.height
            anchors.centerIn: parent
            color:"Red"
       ColumnLayout{
           spacing: 1
           width: parent.width
           height: parent.height

            RowLayout {
                id: layout
                //height: parent.height
                anchors.fill: parent
                Rectangle{width: parent.width/2
                    height: parent.height/3
                    color:"White"
                Label{
                    id:labLogin
                    text:"Login:"
                    anchors.centerIn:parent}
                }
                Rectangle{width: parent.width/2
                    x:parent.width/2
                    height: parent.height/3
                    color:"Yellow"
                    TextField
                    {
                        id:textEmail
                        //text:"exemplo@gmail.com"
                        //font: 30 * 24 * pixelDensity
                        color:"Black"
                        width:parent.width
                        height: parent.height

                        focus:true
                        anchors.centerIn: parent
                        //font: 24 * pixelDensity
                    }


                }

            }
            RowLayout {
                id: layout2
                //anchors.fill: parent/3
                height: layout.height
                y: parent.height
                Rectangle{width: parent.width/2
                    height: parent.height/3
                    color:"White"
                Label{text:"Senha:"
                    anchors.centerIn:parent}
                }
                Rectangle{width: parent.width/2
                    x:parent.width/2
                    height: parent.height/3
                    color:"Yellow"
                    TextField
                    {
                        id:textSenha
                        //text:"exemplo@gmail.com"
                        color:"Black"
                        width:parent.width
                        height: parent.height

                        focus:true
                        anchors.centerIn: parent
                        //font: 24 * pixelDensity
                    }


                }

            }

            RowLayout {
                id: layout3
                //anchors.fill: parent/3
                height: layout.height
                y: parent.height
                Rectangle{width: parent.width/2
                    height: parent.height/3
                    color:"Pink"

                    Button{


                        text:"Entrar"
                        width:parent.width/2
                        height:parent.height
                        anchors.centerIn: parent
                        font.pixelSize: 100*pixelDensity


                        onClicked:
                        {


                                     //labLogin.text=
                                     console.log(Rest.logar(textEmail.text,textSenha.text))
                                     var teste= Rest.logar(textEmail.text,textSenha.text)
                                     labLogin.text=teste
                                     load.source=Qt.resolvedUrl("Emile.qml")
                                     //Qt.resolvedUrl("Emile.qml")




                        }


                    }


                }
                Rectangle{width: parent.width/2
                    x:parent.width/2
                    height: parent.height/3
                    color:"Blue"

                    Button
                    {
                        width:parent.width/2
                        height:parent.height
                        text:"Esqueci Senha"
                        font.pixelSize: 24 * pixelDensity
                        anchors.centerIn: parent

                    }


                }

            }
         }

        }
    }

    Rectangle {
       //   Layout.alignment: Qt.AlignBottom
        Layout.fillWidth: true
        Layout.fillHeight: true
        color: "#2296F3"
        //Layout.preferredWidth: 70
        //Layout.preferredHeight: 40
    }
}
Loader{
    id:load
    width:parent.width
    height: parent.height
    //source: Qt.resolvedUrl("pag2.qml");
}
}













/*
Rectangle{
    width: 200
    height: 228

Rectangle{
    width: parent.width
    height: 300
    color: "blue"
    anchors.centerIn:parent
Rectangle{
    width: parent.width/2+50
    height: 300
    anchors.centerIn:parent
    color:"#2296F3"

Label
{
id:labLogin
y:100
//anchors.centerIn:parent
anchors.verticalCenter:parent
x:120
text:"Login:"
font.pixelSize: 30



}
TextInput
{
    id:textEmail
    text:"exemplo@gmail.com"
    font.pixelSize: 30
    color:"white"
    // background-color:"white"
    focus: true
    y:100
    x:labLogin.x+100

}
Label
{
 id:senhaLab
text:"Senha:"
y:labLogin.y+40
x:120
font.pixelSize: 30
}

TextInput
{
    id:senha
    text:"******************"
    focus: true
    font.pixelSize: 30
    y:labLogin.y+40
    x:senhaLab.x+100
}

Button
{
    id:entrar
    text:"Entrar"
    width: 220
    y:senhaLab.y+40
    x:120

    onClicked:
    {


                 //labLogin.text=
                 console.log(Rest.logar(textEmail.text,senha.text))
                 var teste= Rest.logar(textEmail.text,senha.text)
                  labLogin.text=teste



    }


}

Button
{
    text:"Esqueci Senha"
    y: senhaLab.y+40
    x:400
    width:220
    ColorAnimation {
        from: "blue"
        to: "black"
        duration: 200
    }
}
}

}
}
*/
