$(document).ready(function () {
	$('#divDisciplinas').hide();
	$('#divAlunos').hide();
 
	$('#btnEnviar').click(function(){ 
		
	});
    
	$("#comboDestinatario").change(function (event) {
       if ($(this).val() == 1) // se for selecionado alunos como destinatario.
	   {
		  carregarComboDisciplinas();
	   }
    });
	
	$("#comboDisciplinas").change(function (event) {
       var idDisciplina =  $(this).val();
	   
	   carregarComboAlunos(idDisciplina);
	   
    });
	
	function carregarComboDisciplinas()
 {
	 $.ajax({
        type: "GET",
        url: "http://renatoln.pythonanywhere.com/disciplinas/?professor=" + localStorage.idUsuarioLogado,
        success: function (responseData, status, xhr) {
            $('#divDisciplinas').show();
			
           var htmlMensagens = '<option value=\'0\'>Alunos de Todas as Disciplinas</option>';

            for (index in responseData)
            {
                var item = responseData[index];

                htmlMensagens += '<option value=\''+ item.id +'\'> Da disciplina '+item.nome+'</option>'
            }

            $("#comboDisciplinas").append(htmlMensagens).trigger('create');
        },
        error: function (request, status, error) {
            console.log("erro exibição mural de mensagens");
        }
    });
 }
 
 function carregarComboAlunos(idDisciplina)
 {
	 $.ajax({
        type: "GET",
        url: "http://renatoln.pythonanywhere.com/disciplina_alunoss/?disciplina=" + idDisciplina,
        success: function (responseData, status, xhr) {
            $('#divAlunos').show();
			
           var htmlMensagens = '';

            for (index in responseData)
            {
                var item = responseData[index];

                htmlMensagens += '<option value=\''+ item.estudante.id +'\'>'+item.estudante.nome+'</option>'
            }

            $("#comboAlunos").append(htmlMensagens).trigger('create');
        },
        error: function (request, status, error) {
            console.log("erro exibição mural de mensagens");
        }
    });
 }
		
});
 
 