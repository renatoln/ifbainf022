import QtQuick 2.7
import QtQuick.Controls 2.1
import "./"


ApplicationWindow {
    id: window
    width: 420
    height: 680
    visible: true
    property var session

    property color backGroundColor : "#394454"
    property color mainAppColor: "#00BFFF"
    property color mainTextCOlor: "#f0f0f0"
    property color popupBackGroundColor: "#b44"
    property color popupTextCOlor: "#ffffff"

    FontLoader {
        id: fontAwesome
        name: "fontawesome"
        source: "qrc:/fontawesome-webfont.ttf"
    }


    header: ToolBar{
    visible: false
    id:head
    Label
    {

        text:"Notificações"
        y:20
        transform: Translate {
            x: Emile.drawer.position * Emile.swipeView.width * 0.50
        }

    }
}
    Rectangle
        {
            width:parent.width
            height:parent.height
            color : "#006CE5"

            Image{
                width:parent.width/3
                height:parent.height/3
                anchors.centerIn: parent
                //x:parent.width/2-140
                //y:parent.height/2-120

                source:"data"
            }


        }




Timer
    {
        interval: 5000
        repeat: true
        running: true
        onTriggered:
        {
            //head.visible=true
            lo.source=Qt.resolvedUrl("LoginPage.qml")



        }
    }


    Loader{
        id:lo
        width:parent.width
        height: parent.height
        //source: Qt.resolvedUrl("pag2.qml");
 }



}
