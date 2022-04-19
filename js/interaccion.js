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



	group-check.addEventListener('click', function() {

		var cuenta_check = document.querySelectorAll(".group-check input[type=checkbox]:checked").length;

		console.log(cuenta_check);

		if(miCheck1.checked && miCheck2.checked && miCheck3.checked && miCheck4.checked) {

			$('#btn_info_siempre1').attr("disabled", false);
			$('#btn_linea_add').attr("disabled", false);
			$('#btn_g_grosa').attr("disabled", false);
			$('#btn_inicio1').attr("disabled", false);

		}else{

			$('#btn_info_siempre1').attr("disabled", true);
			$('#btn_linea_add').attr("disabled", true);
			$('#btn_g_grosa').attr("disabled", true);
			$('#btn_inicio1').attr("disabled", true);
		}

	});

});