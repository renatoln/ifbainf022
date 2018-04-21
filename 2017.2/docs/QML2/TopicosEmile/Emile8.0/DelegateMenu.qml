import QtQuick 2.0
import QtQuick.Window 2.0

Item{

   width: drawer.width
   height: drawer.height/15




Rectangle{
    id:baseRec
    width: drawer.width
    height: drawer.height/10
    //color:"#2296F3"
Text {


text: name
anchors.centerIn: baseRec
font.pixelSize: 22
}

}

}



