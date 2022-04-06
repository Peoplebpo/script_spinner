function(){

	$("#btn_venta").prop("disabled", true);
	
	$("#tipo_venta").change(function() {
        if ($(this).val() === ""){

        	$("#btn_venta").prop("disabled", true);

        }else{

        	$("#btn_venta").prop("disabled", false);
        }
	});


	


};