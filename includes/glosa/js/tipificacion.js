$(function() {

            $("#plan").prop("disabled", true);
            $("#descuento").prop("disabled", true);
            $("#cep").prop("disabled", true);

            $("#2").text("");
            $("#4").text("");
            $("#6").text("");
            $("#8").text("");
            $("#10").text("");
            
    $("#accion").change(function() {
        if ($(this).val() === "CDP") {
            
            // CAMPOS DISABLED
            
            $("#plan").prop("disabled", false);
            $("#descuento").prop("disabled", true);
            $("#cep").prop("disabled", true);
            $("#sucursal").prop("disabled", true);
            $("#descuento").val("");
            $("#cep").val("");
            $("#sucursal").val("");

            $("#2").text("CDP");
            $("#4").text("");
            $("#5").text("");
            $("#6").text("");
            $("#7").text("");
            $("#8").text("");
            $("#9").text("");
            $("#10").text(""); 
            $("#11").text("");
        
        
        }else if ($(this).val() === "DESC"){

            $("#plan").prop("disabled", true);
            $("#descuento").prop("disabled", false);
            $("#cep").prop("disabled", true);
            $("#sucursal").prop("disabled", true);
            $("#plan").val("");
            $("#cep").val("");
            $("#sucursal").val("");

            $("#2").text("");
            $("#3").text("");
            $("#4").text("DESC");
            $("#6").text("");
            $("#7").text("");
            $("#8").text("");
            $("#9").text("");
            $("#10").text(""); 
            $("#11").text("");          
            
        }else if ($(this).val() === "CDP + DESC"){

            $("#plan").prop("disabled", false);
            $("#descuento").prop("disabled", false);
            $("#cep").prop("disabled", true);
            $("#sucursal").prop("disabled", true);
            $("#cep").val("");
            $("#sucursal").val("");

            $("#2").text("CDP");
            $("#4").text("DESC");
            $("#6").text("");
            $("#7").text("");
            $("#8").text("");
            $("#9").text("");
            $("#10").text(""); 
            $("#11").text("");   

        }else if ($(this).val() === "CDP + DESC + BOLSA"){

            $("#plan").prop("disabled", false);
            $("#descuento").prop("disabled", false);
            $("#cep").prop("disabled", true);
            $("#sucursal").prop("disabled", true);
            $("#sucursal").val("");

            $("#2").text("CDP");
            $("#4").text("DESC");
            $("#6").text("BOLSA");
            $("#7").text("DOBLE DE GB EN SU PLAN");
            $("#8").text("");
            $("#9").text("");
            $("#10").text("");      
            $("#11").text(""); 

        }else if ($(this).val() === "DESC + BOLSA"){

            $("#plan").prop("disabled", true);
            $("#descuento").prop("disabled", false);
            $("#cep").prop("disabled", true);
            $("#sucursal").prop("disabled", true);
            $("#cep").val("");
            $("#sucursal").val("");

            $("#2").text("");
            $("#3").text("");
            $("#4").text("DESC");
            $("#6").text("BOLSA");
            $("#7").text("DOBLE DE GB EN SU PLAN");
            $("#8").text("");
            $("#9").text("");
            $("#10").text("");      
            $("#11").text("");

        }else if ($(this).val() === "BOLSA MIN"){

            $("#plan").prop("disabled", true);
            $("#descuento").prop("disabled", true);
            $("#cep").prop("disabled", true);
            $("#sucursal").prop("disabled", true);
            $("#plan").val("");
            $("#descuento").val("");
            $("#cep").val("");
            $("#sucursal").val("");

            $("#2").text("");
            $("#3").text("");            
            $("#4").text("");
            $("#5").text("");
            $("#6").text("BOLSA");
            $("#8").text("");
            $("#9").text("");
            $("#10").text(""); 
            $("#11").text("");    
     

        }else if ($(this).val() === "BOLSA INTERNET"){

            $("#plan").prop("disabled", true);
            $("#descuento").prop("disabled", true);
            $("#cep").prop("disabled", true);
            $("#sucursal").prop("disabled", true);
            $("#plan").val("");
            $("#descuento").val("");
            $("#cep").val("");
            $("#sucursal").val("");

            $("#2").text("");
            $("#3").text("");            
            $("#4").text("");
            $("#5").text("");
            $("#6").text("BOLSA");
            $("#8").text("");
            $("#9").text("");
            $("#10").text(""); 
            $("#11").text("");   

        }else if ($(this).val() === "CDP + CEP"){

            $("#plan").prop("disabled", false);
            $("#descuento").prop("disabled", true);
            $("#cep").prop("disabled", false);
            $("#sucursal").prop("disabled", false); 
            $("#descuento").val("");

            $("#2").text("CDP");
            $("#4").text("");
            $("#5").text("");
            $("#6").text("");
            $("#7").text("");
            $("#8").text("BONO CEP");
            $("#10").text("CAC");  

        }else if ($(this).val() === "CDP + DESC + CEP"){

            $("#plan").prop("disabled", false);
            $("#descuento").prop("disabled", false);
            $("#cep").prop("disabled", false);
            $("#sucursal").prop("disabled", false);

            $("#2").text("CDP");
            $("#4").text("DESC");
            $("#6").text("");
            $("#7").text("");
            $("#8").text("BONO CEP");
            $("#10").text("CAC");    

        }else if ($(this).val() === "CDP + DESC + BOLSA + CEP"){

            $("#plan").prop("disabled", false);
            $("#descuento").prop("disabled", false);
            $("#cep").prop("disabled", false);
            $("#sucursal").prop("disabled", false);
            $("#2").text("CDP");
            $("#4").text("DESC");
            $("#6").text("BOLSA");
            $("#7").text("DOBLE DE GB EN SU PLAN");
            $("#8").text("BONO CEP");
            $("#10").text("CAC");    

        }else if ($(this).val() === "CEP"){

            $("#plan").prop("disabled", true);
            $("#descuento").prop("disabled", true);
            $("#cep").prop("disabled", false);
            $("#sucursal").prop("disabled", false);
            $("#plan").val("");
            $("#descuento").val("");

            $("#2").text("");
            $("#3").text("");
            $("#4").text("");
            $("#5").text("");
            $("#6").text("");
            $("#7").text("");            
            $("#8").text("BONO CEP");
            $("#10").text("CAC");    

        }else{

            $("#plan").prop("disabled", true);
            $("#descuento").prop("disabled", true);
            $("#cep").prop("disabled", true);
            $("#sucursal").prop("disabled", true);
            $("#plan").val("");
            $("#descuento").val("");
            $("#cep").val("");
            $("#sucursal").val("");


            $("#2").text("");
            $("#3").text("");
            $("#4").text("");
            $("#5").text("");
            $("#6").text("");
            $("#7").text("");            
            $("#8").text("");
            $("#9").text("");
            $("#10").text("");
            $("#11").text("");  

        }


    });
});

