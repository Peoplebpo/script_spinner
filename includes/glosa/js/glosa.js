$(document).ready(function() {

		var valor1 = $('#pcs').val();
        $('#1').text(valor1);

        var valor3 = $('#plan').val();
        $('#3').text(valor3);

        var valor5 = $('#descuento').val();
        $('#5').text(valor5);

        var valor9 = $('#cep').val();
        $('#9').text(valor9);

        var valor11 = $('#sucursal').val();
        $('#11').text(valor11);

        var valor40 = 'Solicitudes Comerciales //Modificación al Contrato//Cambio de Oferta Comercial//IMPOSIBLE COMPLETAR';
        $('#40').text(valor40);




        $("#pcs").change(function(){

        var valor1 = $('#pcs').val();
        $('#1').text(valor1);

        });

        $("#plan").change(function(){

        var valor3 = $('#plan').val();
        $('#3').text(valor3);

    	});

        $("#descuento").change(function(){

        var valor5 = $('#descuento').val();
        $('#5').text(valor5);

    	});

    	$("#cep").change(function(){

        var valor9 = $('#cep').val();
        $('#9').text(valor9);

    	});

    	$("#sucursal").change(function(){

        var valor11 = $('#sucursal').val();
        $('#11').text(valor11);

    	});


        var clipboard = new ClipboardJS('.copiarresumen', {
        target: function () {
            return document.querySelector('#foo');
        },
        });

        var clipboard = new ClipboardJS('.copiartemple', {
        target: function () {
            return document.querySelector('#foo2');
        },
        });

        var clipboard = new ClipboardJS('.copiarmotivos', {
        target: function () {
            return document.querySelector('#foo3');
        },
        });




});




//fin campos desabiitados y requeridos