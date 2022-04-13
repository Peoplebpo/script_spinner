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

	$('#plan_aceptado').prop("disabled", true);
	$('#fecha_retiro').prop("disabled", true);
	$('#descuento_aceptado').prop("disabled", true);
	$('#sucursal').prop("disabled", true);
	$('#equipo_aceptado').prop("disabled", true);
	$('#num_interaccion').prop("disabled", true);
	$('#bolsa_aceptada').prop("disabled", true);
			$('#check1').prop("disabled", true);
		$('#check2').prop("disabled", true);
		$('#check3').prop("disabled", true);
		$('#check4').prop("disabled", true);

	var ch1 = 0;
	var ch2 = 0;
	var ch3 = 0;
	var ch4 = 0;

	$(".radio").click(function(){
		if($('#radio_button').prop('checked')){

		$('#descuento_aceptado').prop("disabled", false);
		$('#plan_aceptado').prop("disabled", true);
		$('#fecha_retiro').prop("disabled", true);	
		$('#sucursal').prop("disabled", true);
		$('#equipo_aceptado').prop("disabled", true);
		$('#num_interaccion').prop("disabled", true);
		$('#bolsa_aceptada').prop("disabled", true);

		}else if($('#radio_button1').prop('checked')){

		$('#plan_aceptado').prop("disabled", false);
		$('#fecha_retiro').prop("disabled", false);
		$('#descuento_aceptado').prop("disabled", false);
		$('#sucursal').prop("disabled", false);
		$('#equipo_aceptado').prop("disabled", false);
		$('#num_interaccion').prop("disabled", false);
		$('#bolsa_aceptada').prop("disabled", false);		
		}else{

		$('#plan_aceptado').prop("disabled", true);
		$('#fecha_retiro').prop("disabled", true);
		$('#descuento_aceptado').prop("disabled", true);
		$('#sucursal').prop("disabled", true);
		$('#equipo_aceptado').prop("disabled", true);
		$('#num_interaccion').prop("disabled", true);
		$('#bolsa_aceptada').prop("disabled", true);
		}

		if ($('#descuento_aceptado').val() == '' ){

		$('#check1').prop("disabled", true);
		$('#check2').prop("disabled", true);
		$('#check3').prop("disabled", true);
		$('#check4').prop("disabled", true);

		}else{

		$('#check1').prop("disabled", false);
		$('#check2').prop("disabled", false);
		$('#check3').prop("disabled", false);
		$('#check4').prop("disabled", false);
		}
	});


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

    if(suma_ch === 4){
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

    if(suma_ch === 4){
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

    if(suma_ch === 4){
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
	
	if(suma_ch === 4){
	$('#btn_info_siempre1').attr("disabled", false);
	}else{
	$('#btn_info_siempre1').attr("disabled", true);
	}
	
	});

});

//FIN DIV VENTA

// incio div informaciones

$(document).ready(function () {

$('#info_relevante1').attr("disabled", true);

	var ch_i_1 = 0;
	var ch_i_2 = 0;
	var ch_i_3 = 0;
	var ch_i_4 = 0;
	var ch_i_5 = 0;
	var ch_i_6 = 0;
	var ch_i_7 = 0;
	var ch_i_8 = 0;
	var ch_i_9 = 0;

$("#check_info1").click(function(){

	if($('#check_info1').prop('checked')){
		ch_i_1 = 1;
		var suma_ch_i = ch_i_1 + ch_i_2 + ch_i_3 + ch_i_4 + ch_i_5 + ch_i_6 + ch_i_7 + ch_i_8 + ch_i_9;
		console.log(suma_ch_i);
    } else {
    	ch_i_1 = 0; 
      	var suma_ch_i = ch_i_1 + ch_i_2 + ch_i_3 + ch_i_4 + ch_i_5 + ch_i_6 + ch_i_7 + ch_i_8 + ch_i_9
      	console.log(suma_ch_i);     	
    }

    if(suma_ch_i === 9){
	$('#info_relevante1').attr("disabled", false);
	}else{
	$('#info_relevante1').attr("disabled", true);
	}

	});

$("#check_info2").click(function(){
	if($('#check_info2').prop('checked')){
		ch_i_2 = 1;
		var suma_ch_i = ch_i_1 + ch_i_2 + ch_i_3 + ch_i_4 + ch_i_5 + ch_i_6 + ch_i_7 + ch_i_8 + ch_i_9;
		console.log(suma_ch_i);
    } else {
    	ch_i_2 = 0; 
      	var suma_ch_i = ch_i_1 + ch_i_2 + ch_i_3 + ch_i_4 + ch_i_5 + ch_i_6 + ch_i_7 + ch_i_8 + ch_i_9
      	console.log(suma_ch_i);     	
    }

    if(suma_ch_i === 9){
	$('#info_relevante1').attr("disabled", false);
	}else{
	$('#info_relevante1').attr("disabled", true);
	}

	});

$("#check_info3").click(function(){
	if($('#check_info3').prop('checked')){
		ch_i_3 = 1;
		var suma_ch_i = ch_i_1 + ch_i_2 + ch_i_3 + ch_i_4 + ch_i_5 + ch_i_6 + ch_i_7 + ch_i_8 + ch_i_9;
		console.log(suma_ch_i);
    } else {
    	ch_i_3 = 0; 
      	var suma_ch_i = ch_i_1 + ch_i_2 + ch_i_3 + ch_i_4 + ch_i_5 + ch_i_6 + ch_i_7 + ch_i_8 + ch_i_9
      	console.log(suma_ch_i);     	
    }

    if(suma_ch_i === 9){
	$('#info_relevante1').attr("disabled", false);
	}else{
	$('#info_relevante1').attr("disabled", true);
	}

	});

$("#check_info4").click(function(){
	if($('#check_info4').prop('checked')){
		ch_i_4 = 1;
		var suma_ch_i = ch_i_1 + ch_i_2 + ch_i_3 + ch_i_4 + ch_i_5 + ch_i_6 + ch_i_7 + ch_i_8 + ch_i_9;
		console.log(suma_ch_i);
    } else {
    	ch_i_4 = 0; 
      	var suma_ch_i = ch_i_1 + ch_i_2 + ch_i_3 + ch_i_4 + ch_i_5 + ch_i_6 + ch_i_7 + ch_i_8 + ch_i_9
      	console.log(suma_ch_i);     	
    }

    if(suma_ch_i === 9){
	$('#info_relevante1').attr("disabled", false);
	}else{
	$('#info_relevante1').attr("disabled", true);
	}

	});

$("#check_info5").click(function(){
	if($('#check_info5').prop('checked')){
		ch_i_5 = 1;
		var suma_ch_i = ch_i_1 + ch_i_2 + ch_i_3 + ch_i_4 + ch_i_5 + ch_i_6 + ch_i_7 + ch_i_8 + ch_i_9;
		console.log(suma_ch_i);
    } else {
    	ch_i_5 = 0; 
      	var suma_ch_i = ch_i_1 + ch_i_2 + ch_i_3 + ch_i_4 + ch_i_5 + ch_i_6 + ch_i_7 + ch_i_8 + ch_i_9
      	console.log(suma_ch_i);     	
    }

    if(suma_ch_i === 9){
	$('#info_relevante1').attr("disabled", false);
	}else{
	$('#info_relevante1').attr("disabled", true);
	}

	});

$("#check_info6").click(function(){
	if($('#check_info6').prop('checked')){
		ch_i_6 = 1;
		var suma_ch_i = ch_i_1 + ch_i_2 + ch_i_3 + ch_i_4 + ch_i_5 + ch_i_6 + ch_i_7 + ch_i_8 + ch_i_9;
		console.log(suma_ch_i);
    } else {
    	ch_i_6 = 0; 
      	var suma_ch_i = ch_i_1 + ch_i_2 + ch_i_3 + ch_i_4 + ch_i_5 + ch_i_6 + ch_i_7 + ch_i_8 + ch_i_9
      	console.log(suma_ch_i);     	
    }

    if(suma_ch_i === 9){
	$('#info_relevante1').attr("disabled", false);
	}else{
	$('#info_relevante1').attr("disabled", true);
	}

	});

$("#check_info7").click(function(){
	if($('#check_info7').prop('checked')){
		ch_i_7 = 1;
		var suma_ch_i = ch_i_1 + ch_i_2 + ch_i_3 + ch_i_4 + ch_i_5 + ch_i_6 + ch_i_7 + ch_i_8 + ch_i_9;
		console.log(suma_ch_i);
    } else {
    	ch_i_7 = 0; 
      	var suma_ch_i = ch_i_1 + ch_i_2 + ch_i_3 + ch_i_4 + ch_i_5 + ch_i_6 + ch_i_7 + ch_i_8 + ch_i_9
      	console.log(suma_ch_i);     	
    }

    if(suma_ch_i === 9){
	$('#info_relevante1').attr("disabled", false);
	}else{
	$('#info_relevante1').attr("disabled", true);
	}

	});

$("#check_info8").click(function(){
	if($('#check_info8').prop('checked')){
		ch_i_8 = 1;
		var suma_ch_i = ch_i_1 + ch_i_2 + ch_i_3 + ch_i_4 + ch_i_5 + ch_i_6 + ch_i_7 + ch_i_8 + ch_i_9;
		console.log(suma_ch_i);
    } else {
    	ch_i_8 = 0; 
      	var suma_ch_i = ch_i_1 + ch_i_2 + ch_i_3 + ch_i_4 + ch_i_5 + ch_i_6 + ch_i_7 + ch_i_8 + ch_i_9
      	console.log(suma_ch_i);     	
    }

    if(suma_ch_i === 9){
	$('#info_relevante1').attr("disabled", false);
	}else{
	$('#info_relevante1').attr("disabled", true);
	}

	});

$("#check_info9").click(function(){
	if($('#check_info9').prop('checked')){
		ch_i_9 = 1;
		var suma_ch_i = ch_i_1 + ch_i_2 + ch_i_3 + ch_i_4 + ch_i_5 + ch_i_6 + ch_i_7 + ch_i_8 + ch_i_9;
		console.log(suma_ch_i);
    } else {
    	ch_i_9 = 0; 
      	var suma_ch_i = ch_i_1 + ch_i_2 + ch_i_3 + ch_i_4 + ch_i_5 + ch_i_6 + ch_i_7 + ch_i_8 + ch_i_9
      	console.log(suma_ch_i);     	
    }

    if(suma_ch_i === 9){
	$('#info_relevante1').attr("disabled", false);
	}else{
	$('#info_relevante1').attr("disabled", true);
	}

	});

});

$(document).ready(function () {

$('#cierre').attr("disabled", true);

	var ch_ir_1 = 0;
	var ch_ir_2 = 0;
	var ch_ir_3 = 0;
	var ch_ir_4 = 0;
	var ch_ir_5 = 0;
	var ch_ir_6 = 0;
	var ch_ir_7 = 0;
	var ch_ir_8 = 0;
	var ch_ir_9 = 0;

$("#check_rel1").click(function(){

	if($('#check_rel1').prop('checked')){
		ch_ir_1 = 1;
		var suma_ch_ir = ch_ir_1 + ch_ir_2 + ch_ir_3 + ch_ir_4 + ch_ir_5 + ch_ir_6 + ch_ir_7 + ch_ir_8 + ch_ir_9;
		console.log(suma_ch_ir);
    } else {
    	ch_ir_1 = 0; 
      	var suma_ch_ir = ch_ir_1 + ch_ir_2 + ch_ir_3 + ch_ir_4 + ch_ir_5 + ch_ir_6 + ch_ir_7 + ch_ir_8 + ch_ir_9;
      	console.log(suma_ch_ir);     	
    }

    if(suma_ch_ir === 9){
	$('#cierre').attr("disabled", false);
	}else{
	$('#cierre').attr("disabled", true);
	}

	});

$("#check_rel2").click(function(){
	if($('#check_rel2').prop('checked')){
		ch_ir_2 = 1;
		var suma_ch_ir = ch_ir_1 + ch_ir_2 + ch_ir_3 + ch_ir_4 + ch_ir_5 + ch_ir_6 + ch_ir_7 + ch_ir_8 + ch_ir_9;
		console.log(suma_ch_ir);
    } else {
    	ch_ir_2 = 0; 
      	var suma_ch_ir = ch_ir_1 + ch_ir_2 + ch_ir_3 + ch_ir_4 + ch_ir_5 + ch_ir_6 + ch_ir_7 + ch_ir_8 + ch_ir_9;
      	console.log(suma_ch_ir);     	
    }

    if(suma_ch_ir === 9){
	$('#cierre').attr("disabled", false);
	}else{
	$('#cierre').attr("disabled", true);
	}

	});

$("#check_rel3").click(function(){
	if($('#check_rel3').prop('checked')){
		ch_ir_3 = 1;
		var suma_ch_ir = ch_ir_1 + ch_ir_2 + ch_ir_3 + ch_ir_4 + ch_ir_5 + ch_ir_6 + ch_ir_7 + ch_ir_8 + ch_ir_9;
		console.log(suma_ch_ir);
    } else {
    	ch_ir_3 = 0; 
      	var suma_ch_ir = ch_ir_1 + ch_ir_2 + ch_ir_3 + ch_ir_4 + ch_ir_5 + ch_ir_6 + ch_ir_7 + ch_ir_8 + ch_ir_9;
      	console.log(suma_ch_ir);     	
    }

    if(suma_ch_ir === 9){
	$('#cierre').attr("disabled", false);
	}else{
	$('#cierre').attr("disabled", true);
	}

	});

$("#check_rel4").click(function(){
	if($('#check_rel4').prop('checked')){
		ch_ir_4 = 1;
		var suma_ch_ir = ch_ir_1 + ch_ir_2 + ch_ir_3 + ch_ir_4 + ch_ir_5 + ch_ir_6 + ch_ir_7 + ch_ir_8 + ch_ir_9;
		console.log(suma_ch_ir);
    } else {
    	ch_ir_4 = 0; 
      	var suma_ch_ir = ch_ir_1 + ch_ir_2 + ch_ir_3 + ch_ir_4 + ch_ir_5 + ch_ir_6 + ch_ir_7 + ch_ir_8 + ch_ir_9;
      	console.log(suma_ch_ir);     	
    }

    if(suma_ch_ir === 9){
	$('#cierre').attr("disabled", false);
	}else{
	$('#cierre').attr("disabled", true);
	}

	});

$("#check_rel5").click(function(){
	if($('#check_rel5').prop('checked')){
		ch_ir_5 = 1;
		var suma_ch_ir = ch_ir_1 + ch_ir_2 + ch_ir_3 + ch_ir_4 + ch_ir_5 + ch_ir_6 + ch_ir_7 + ch_ir_8 + ch_ir_9;
		console.log(suma_ch_ir);
    } else {
    	ch_ir_5 = 0; 
      	var suma_ch_ir = ch_ir_1 + ch_ir_2 + ch_ir_3 + ch_ir_4 + ch_ir_5 + ch_ir_6 + ch_ir_7 + ch_ir_8 + ch_ir_9;
      	console.log(suma_ch_ir);     	
    }

    if(suma_ch_ir === 9){
	$('#cierre').attr("disabled", false);
	}else{
	$('#cierre').attr("disabled", true);
	}

	});

$("#check_rel6").click(function(){
	if($('#check_rel6').prop('checked')){
		ch_ir_6 = 1;
		var suma_ch_ir = ch_ir_1 + ch_ir_2 + ch_ir_3 + ch_ir_4 + ch_ir_5 + ch_ir_6 + ch_ir_7 + ch_ir_8 + ch_ir_9;
		console.log(suma_ch_ir);
    } else {
    	ch_ir_6 = 0; 
      	var suma_ch_ir = ch_ir_1 + ch_ir_2 + ch_ir_3 + ch_ir_4 + ch_ir_5 + ch_ir_6 + ch_ir_7 + ch_ir_8 + ch_ir_9;
      	console.log(suma_ch_ir);     	
    }

    if(suma_ch_ir === 9){
	$('#cierre').attr("disabled", false);
	}else{
	$('#cierre').attr("disabled", true);
	}

	});

$("#check_rel7").click(function(){
	if($('#check_rel7').prop('checked')){
		ch_ir_7 = 1;
		var suma_ch_ir = ch_ir_1 + ch_ir_2 + ch_ir_3 + ch_ir_4 + ch_ir_5 + ch_ir_6 + ch_ir_7 + ch_ir_8 + ch_ir_9;
		console.log(suma_ch_ir);
    } else {
    	ch_ir_7 = 0; 
      	var suma_ch_ir = ch_ir_1 + ch_ir_2 + ch_ir_3 + ch_ir_4 + ch_ir_5 + ch_ir_6 + ch_ir_7 + ch_ir_8 + ch_ir_9;
      	console.log(suma_ch_ir);     	
    }

    if(suma_ch_ir === 9){
	$('#cierre').attr("disabled", false);
	}else{
	$('#cierre').attr("disabled", true);
	}

	});

$("#check_rel8").click(function(){
	if($('#check_rel8').prop('checked')){
		ch_ir_8 = 1;
		var suma_ch_ir = ch_ir_1 + ch_ir_2 + ch_ir_3 + ch_ir_4 + ch_ir_5 + ch_ir_6 + ch_ir_7 + ch_ir_8 + ch_ir_9;
		console.log(suma_ch_ir);
    } else {
    	ch_ir_8 = 0; 
      	var suma_ch_ir = ch_ir_1 + ch_ir_2 + ch_ir_3 + ch_ir_4 + ch_ir_5 + ch_ir_6 + ch_ir_7 + ch_ir_8 + ch_ir_9;
      	console.log(suma_ch_ir);     	
    }

    if(suma_ch_ir === 9){
	$('#cierre').attr("disabled", false);
	}else{
	$('#cierre').attr("disabled", true);
	}

	});

$("#check_rel9").click(function(){
	if($('#check_rel9').prop('checked')){
		ch_ir_9 = 1;
		var suma_ch_ir = ch_ir_1 + ch_ir_2 + ch_ir_3 + ch_ir_4 + ch_ir_5 + ch_ir_6 + ch_ir_7 + ch_ir_8 + ch_ir_9;
		console.log(suma_ch_ir);
    } else {
    	ch_ir_9 = 0; 
      	var suma_ch_ir = ch_ir_1 + ch_ir_2 + ch_ir_3 + ch_ir_4 + ch_ir_5 + ch_ir_6 + ch_ir_7 + ch_ir_8 + ch_ir_9;
      	console.log(suma_ch_ir);     	
    }

    if(suma_ch_ir === 9){
	$('#cierre').attr("disabled", false);
	}else{
	$('#cierre').attr("disabled", true);
	}

	});

});


//fin div informaciones
