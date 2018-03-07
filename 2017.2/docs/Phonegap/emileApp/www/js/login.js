


$( document ).ready(function() {
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
			window.location.href = "ListaMensagem2.html";
        },
        error: function(request, status, error) {
            console.log("erro ao logar");
        }
    });

 });

});
