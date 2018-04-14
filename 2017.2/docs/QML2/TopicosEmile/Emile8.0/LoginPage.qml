import QtQuick 2.7
import QtQuick.Controls 2.1
import QtQuick.Layouts 1.3
import "Rest.js" as Rest


Page {
    id: loginPage

    signal registerClicked()

    background: Rectangle {

    }

    Rectangle { // parte superior da imagem
        id: iconRect
        width: parent.width
        height: parent.height / 3


        Text { //referente a imagem
            id: icontext
            Image {
                id: emile
                width: 100 ; height: 100
                source: "data"

            }
            //text: adicionar referência a algum icone
            anchors.centerIn: parent
            font.pointSize: 112
            font.family: "fontawesome"
            //color: mainAppColor
        }
    }

    ColumnLayout {
        width: parent.width
        anchors.top: iconRect.bottom
        spacing: 15

        TextField {
            id: loginUsername
            placeholderText: qsTr("Login")
            Layout.preferredWidth: parent.width - 20
            Layout.alignment: Qt.AlignHCenter
            font.pointSize: 14
            font.family: "fontawesome"
            leftPadding: 30
            background: Rectangle {
                implicitWidth: 200
                implicitHeight: 50
                radius: implicitHeight / 2
                color: "transparent"

                Text {
                    //text: adicionar referência a algum icone
                    font.pointSize: 14
                    font.family: "fontawesome"
                    color: mainAppColor
                    anchors.left: parent.left
                    anchors.verticalCenter: parent.verticalCenter
                    leftPadding: 10
                }

                Rectangle {
                    width: parent.width - 10
                    height: 1
                    anchors.horizontalCenter: parent.horizontalCenter
                    anchors.bottom: parent.bottom
                    color: "#000000"
                }
            }
        }

        TextField {
            id: loginPassword
            placeholderText: qsTr("Senha")
            Layout.preferredWidth: parent.width - 20
            Layout.alignment: Qt.AlignHCenter
            font.pointSize: 14
            font.family: "fontawesome"
            leftPadding: 30
            echoMode: TextField.PasswordEchoOnEdit
            background: Rectangle {
                implicitWidth: 200
                implicitHeight: 50
                radius: implicitHeight / 2
                color: "transparent"
                Text {
                    //text: "\uf023"
                    font.pointSize: 14
                    font.family: "fontawesome"
                    color: mainAppColor
                    anchors.left: parent.left
                    anchors.verticalCenter: parent.verticalCenter
                    leftPadding: 10
                }

                Rectangle {
                    width: parent.width - 10
                    height: 1
                    anchors.horizontalCenter: parent.horizontalCenter
                    anchors.bottom: parent.bottom
                    color: "#000000"
                }
            }
        }

        Item {
            height: 20
        }

        MyBtn{
            height: 50
            Layout.preferredWidth: loginPage.width - 20
            Layout.alignment: Qt.AlignHCenter
            name: "Login"
            baseColor: mainAppColor
            borderColor: "#000000"
            onClicked: {

                console.log(Rest.logar(loginUsername.text, loginPassword.text))
                var teste=Rest.logar(loginUsername.text, loginPassword.text)
                session=teste
                load.source=Qt.resolvedUrl("Emile.qml")// chamar loar usuário
            }
        }

        MyBtn{
            height: 50
            Layout.preferredWidth: loginPage.width - 20
            Layout.alignment: Qt.AlignHCenter
            name: "Resetar senha"
            baseColor: mainAppColor
            borderColor: "#000000"
            onClicked: stackView.push("") //chamar alterar senha
        }


    }

    Loader{
        id:load
        width:parent.width
        height: parent.height
        //source: Qt.resolvedUrl("pag2.qml");
    }
}
