var formacaoEscondido = true;
var experienciaEscondido = true;
var cursosEscondido = true;
var complementosEscondido = true;

$(document).ready(function(){
	$("#map_canvas").hide();
	$("ul").hide();
;})

function toggleFormacao(){

	if (formacaoEscondido){
		$("#listaFormacao").fadeIn(1800);
		formacaoEscondido= false;
		$("#listaExperiencia").fadeOut();
		experienciaEscondido=true;
		$("#listaCursos").fadeOut();
		cursosEscondido= true;
		$("#listaComplementos").fadeOut();
		complementosEscondido= true;
	}
	else{
		$("#listaFormacao").fadeOut();
		formacaoEscondido=true;}
}

function toggleExperiencia(){

	if (experienciaEscondido){
		$("#listaExperiencia").fadeIn(1800);
		experienciaEscondido= false;
		$("#listaFormacao").fadeOut();
		formacaoEscondido= true;
		$("#listaCursos").fadeOut();
		cursosEscondido= true;
		$("#listaComplementos").fadeOut();
		complementosEscondido= true;
	}
	else{
		$("#listaExperiencia").fadeOut();
		experienciaEscondido=true;}
}

function toggleCursos(){

	if (cursosEscondido){
		$("#listaCursos").fadeIn(1800);
		cursosEscondido= false;
		$("#listaFormacao").fadeOut();
		formacaoEscondido= true;
		$("#listaExperiencia").fadeOut();
		experienciaEscondido= true;
		$("#listaComplementos").fadeOut();
		complementosEscondido= true;
	}
	else{
		$("#listaCursos").fadeOut();
		cursosEscondido=true;}
}

function toggleComplementos(){

	if (complementosEscondido){
		$("#listaComplementos").fadeIn(1800);
		complementosEscondido= false;
		$("#listaFormacao").fadeOut();
		formacaoEscondido= true;
		$("#listaExperiencia").fadeOut();
		experienciaEscondido=true;
		$("#listaCursos").fadeOut();
		cursosEscondido= true;
	}
	else{
		$("#listaComplementos").fadeOut();
		complementosEscondido=true;}
}

$.ajax({
        url: 'http://rarolabs.com.br:88/alunos.json',
        dataType: 'json',

        success: function (data) {
            
            data.sort(function (a, b) {
                if (a.nome > b.nome)
                    return 1;
                
                if (a.nome == b.nome)
                    return 0;
                
                if (a.nome > b.nome)
                    return -1;
            });

            $('document').delay(1000);

            data.forEach(function (e, i) {
                var link;

                if (e.link_html != "") {
                    link = e.link_html
                } else {
                    link = "#"
                }

                if (e.nome.toLowerCase().indexOf("bruno azevedo") < 0)
                {
                    $("#divRelacionados").append("\n <a href='" + link + "' class='list-group-item'><h4 class='list-group-item-heading'>" + e.nome + "</h4><p class='list-group-item-text'>" + e.mini_curriculo + "</p></a>");
                }
            });

            $("#divAlerta").remove();
        },

        error: function (xhr, status, errorThrown) {
            console.log(errorThrown + '\n' + status + '\n' + xhr.statusText);
        }
    });
