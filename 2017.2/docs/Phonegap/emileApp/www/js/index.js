/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
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

// alteracoes do desenvolvedor


   /** alteracoes referentes a masterpage**/
   
     /**
 * Load page into url
 *
 * @param url           The url to load
 */
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
    xmlhttp.open("GET", url , true);
    xmlhttp.send();
};

/**
 * Function called when page has finished loading.
 */
function init() {

    // Load first page into container
	window.location.href = "Login.html";
};
// function submitLogIn() {
	// alert("Submitting: " + $('#username').val() + $('#password').val());
	// var username = $('#username').val();
	// var password = $('#password').val();
	// $.ajax({
		// type: "POST",
		// url: "http://emileweb.pythonanywhere.com/login/",
		// data:{"login":username,"password":password},
		// success: function(data) {
			// if (data) {
				   // alert(data);
				// }
				// else {
					// alert('Successfully not posted.');
				// }
			// }
		// });

// }


$( document ).ready(function() {
    $( "#mypanel" ).panel().enhanceWithin();
	
  /*  $("#submit").click(function(){
		var user = $('#username').val();
		var pass = $('#password').val();
	*/
//$("#submit").click(function(){
$("#submit").click(function(){
	var user = $('#username').val();
	var pass = $('#password').val();
	$.ajax({
        type: "POST",
        url: "http://emileweb.pythonanywhere.com/login/",
        headers: {
            'Authorization': "Basic bWFub2VsOnU1UDV5N1Uz "
        },
       // crossDomain: true,
        data: {login: user, password: pass},
        //dataType: 'json',
        success: function(responseData, status, xhr) {
            console.log(responseData);
        },
        error: function(request, status, error) {
            console.log(request.responseText);
        }
    });

 });
 	window.location.href = "Login.html";

});
