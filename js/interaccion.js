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

//FIN DIV INICIAL

//INICIO DIV VENTA

$(document).ready(function () {
	$('#btn_info_siempre1').attr("disabled", true);

	$('#descuento').prop("disabled", true);
	$('#plan_aceptado').prop("disabled", true);
	$('#fecha_retiro').prop("disabled", true);
	$('#descuento_aceptado').prop("disabled", true);
	$('#sucursal').prop("disabled", true);
	$('#equipo_aceptado').prop("disabled", true);
	$('#num_interaccion').prop("disabled", true);
	$('#bolsa_aceptada').prop("disabled", true);

	$("#radio_button").click(function(){
		if($('.radio').prop('checked')){

		$('#descuento').prop("disabled", false);
		$('#descuento_aceptado').prop("disabled", false);
		$('#plan_aceptado').prop("disabled", true);
		$('#fecha_retiro').prop("disabled", true);	
		$('#sucursal').prop("disabled", true);
		$('#equipo_aceptado').prop("disabled", true);
		$('#num_interaccion').prop("disabled", true);
		$('#bolsa_aceptada').prop("disabled", true);

		}else if($('.radio1').prop('checked')){

		$('#descuento').prop("disabled", false);
		$('#plan_aceptado').prop("disabled", false);
		$('#fecha_retiro').prop("disabled", false);
		$('#descuento_aceptado').prop("disabled", false);
		$('#sucursal').prop("disabled", false);
		$('#equipo_aceptado').prop("disabled", false);
		$('#num_interaccion').prop("disabled", false);
		$('#bolsa_aceptada').prop("disabled", false);		
		}else{
			$('#descuento').prop("disabled", true);
			$('#plan_aceptado').prop("disabled", true);
			$('#fecha_retiro').prop("disabled", true);
			$('#descuento_aceptado').prop("disabled", true);
			$('#sucursal').prop("disabled", true);
			$('#equipo_aceptado').prop("disabled", true);
			$('#num_interaccion').prop("disabled", true);
			$('#bolsa_aceptada').prop("disabled", true);
		}
	});


	var ch1 = 0;
	var ch2 = 0;
	var ch3 = 0;
	var ch4 = 0;

	$("#check1").click(function(){
	if($('#check1').prop('checked')){
		ch1 = 1;
		var suma_ch = ch1+ch2+ch3+ch4;
		console.log(suma_ch);
    } else {
    	ch1 = 0; 
      	var suma_ch = ch1+ch2+ch3+ch4;
      	console.log(suma_ch);     	
    }

    if(ch1+ch2+ch3+ch4 === 4){
	$('#btn_info_siempre1').attr("disabled", false);
	}else{
	$('#btn_info_siempre1').attr("disabled", true);
	}

	});

	$("#check2").click(function(){
	if($('#check2').prop('checked')){
		ch2 = 1;
		var suma_ch = ch1+ch2+ch3+ch4;
		console.log(suma_ch);
    } else {
      	ch2 = 0; 
      	var suma_ch = ch1+ch2+ch3+ch4;
      	console.log(suma_ch);
    }

    if(ch1+ch2+ch3+ch4 === 4){
	$('#btn_info_siempre1').attr("disabled", false);
	}else{
	$('#btn_info_siempre1').attr("disabled", true);
	}

	});

	$("#check3").click(function(){
	if($('#check3').prop('checked')){
		ch3 = 1;
		var suma_ch = ch1+ch2+ch3+ch4;
		console.log(suma_ch);
    } else {
      	ch3 = 0; 
      	var suma_ch = ch1+ch2+ch3+ch4;
      	console.log(suma_ch);
    }

    if(ch1+ch2+ch3+ch4 === 4){
	$('#btn_info_siempre1').attr("disabled", false);
	}else{
	$('#btn_info_siempre1').attr("disabled", true);
	}

	});

	$("#check4").click(function(){
	if($('#check4').prop('checked')){
		ch4 = 1;
		var suma_ch = ch1+ch2+ch3+ch4;
		console.log(suma_ch);
    } else {
      	ch4 = 0; 
      	var suma_ch = ch1+ch2+ch3+ch4;
      	console.log(suma_ch);
    }
	
	if(ch1+ch2+ch3+ch4 === 4){
	$('#btn_info_siempre1').attr("disabled", false);
	}else{
	$('#btn_info_siempre1').attr("disabled", true);
	}
	
	});

});

//FIN DIV VENTA