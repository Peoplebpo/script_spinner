//DIV INICIAL
$(document).ready(function () {

	$('#btn_venta1').attr("disabled", true);

	 $("#tipo_cliente").change(function () {
        if ($(this).val() === "") {

		$('#btn_venta1').attr("disabled", true);

		return false;

	}else{

		$('#btn_venta1').attr("disabled", false);

		return false;
	}
});

});

//FIN INICIA

$(document).ready(function () {
	$('#btn_info_siempre1').attr("disabled", true);
	$('#btn_linea_add').attr("disabled", true);
	$('#btn_g_grosa').attr("disabled", true);
	$('#btn_inicio1').attr("disabled", true);

	$('#plan_aceptado').prop("disabled", true);
	$('#fecha_retiro').prop("disabled", true);
	$('#descuento_aceptado').prop("disabled", true);
	$('#sucursal').prop("disabled", true);
	$('#equipo_aceptado').prop("disabled", true);
	$('#num_interaccion').prop("disabled", true);
	$('#bolsa_aceptada').prop("disabled", true);


	var miCheck1 = document.getElementById('check1');
	var miCheck2 = document.getElementById('check2');
	var miCheck3 = document.getElementById('check3');
	var miCheck4 = document.getElementById('check4');


  	miCheck4.addEventListener('click', function() {

    if(miCheck1.checked && miCheck2.checked && miCheck3.checked && miCheck4.checked) {
      	$('#btn_info_siempre1').attr("disabled", false);
		$('#btn_linea_add').attr("disabled", false);
		$('#btn_g_grosa').attr("disabled", false);
		$('#btn_inicio1').attr("disabled", false);

    } else {

      	$('#btn_info_siempre1').attr("disabled", true);
		$('#btn_linea_add').attr("disabled", true);
		$('#btn_g_grosa').attr("disabled", true);
		$('#btn_inicio1').attr("disabled", true);
    }
  });

});