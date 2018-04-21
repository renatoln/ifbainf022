 $( document ).ready(function() {

    $.ajax({
        type: "GET",
        url: "http://renatoln.pythonanywhere.com/mensagens/?destinatario=" + localStorage.idUsuarioLogado,
        success: function (responseData, status, xhr) {
                       
           var htmlMensagens = '<ul data-role=\"listview\" data-inset=\"true\">';

            for (index in responseData)
            {
                var item = responseData[index];

                htmlMensagens +=

	            '<li data-role=\"list-divider\"><h2>' + item.data + '</h2>'
	            +'<li>'
	                + '<h2>' + item.remetente + '</h2>'
	                + '<p><strong>' + item.titulo + '</strong></p>'
	                + '<p>' + item.texto + '</p>'
	            + '</li>';
            }

            htmlMensagens += '</ul>';

            $("#divMensagens").append(htmlMensagens).trigger('create');
			
        },
        error: function (request, status, error) {
            console.log("erro exibi��o mural de mensagens");
        }
    });
	

});