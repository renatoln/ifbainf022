
$(document).ready(function () {
    $("#submit").click(function () {
        var user = $('#username').val();
        var pass = $('#password').val();
        $.ajax({
            type: "GET",
            url: "http://renatoln.pythonanywhere.com/usuarios?email=" + user + "&password=" + pass,
            success: function (responseData, status, xhr) {

                validado = responseData.length > 0 ? true : false;

                if (validado) {

                    if (typeof (Storage) !== "undefined") {
                        localStorage.IsProfessor = false;
                        localStorage.idUsuarioLogado = responseData[0].id;
                    	if (responseData[0].tipo == 1){
					        localStorage.IsProfessor = true;
					    }
                    } 
                    
				
                    else {
                        // Sorry! No Web Storage support..
                    }
                    window.location.href = "index.html";

                }
                else {
                    alert("login ou senha incorreto");
                }
            },
            error: function (request, status, error) {
                console.log("erro ao logar");
            }
        });

    });

});