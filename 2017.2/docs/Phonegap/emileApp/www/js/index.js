var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

function loadPage(url) {
    var xmlhttp = new XMLHttpRequest();

    // Callback function when XMLHttpRequest is ready
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState === 4){
            if (xmlhttp.status === 200) {               
				document.getElementById('container').innerHTML = xmlhttp.responseText;
            }
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};
/**
 * Function called when page has finished loading.
 */
function init() {

    if(localStorage.idUsuarioLogado == 0){
        window.location.href = 'Login.html';
    }

    if(localStorage.IsProfessor){
        document.getElementsByClassName("teacher")[0].style.display = 'block';
    }
};

function logout(){
    localStorage.idUsuarioLogado = 0;
    window.location.href = 'Login.html';
}

$( document ).ready(function() {
    $( "#mypanel" ).panel().enhanceWithin();
});