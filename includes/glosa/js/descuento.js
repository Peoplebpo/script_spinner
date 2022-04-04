$(document).ready(function(){
   var pcs = $('#pcs').val();
   var ejecutivo = $('#nombres').val();
   var cac = $('#sucursal').val();
   var descuento = $('#descuento').val();

   $('#23').text(ejecutivo); 

   $("#pcs").change(function(){

    var pcs = $('#pcs').val();
    $('#21').text(pcs);

    });

    $("#accion, #plan, #descuento, #cep").change(function(){

    if (concatenated_string = $("#accion").val() === "CDP" && $("#plan").val() === "PLAN CUENTA EXACTA XS" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil // Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");
         

    }else if (concatenated_string = $("#accion").val() === "CDP" && $("#plan").val() === "PLAN CUENTA EXACTA S" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP" && $("#plan").val() === "PLAN POSTPAGO MAX Y" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP" && $("#plan").val() === "PLAN POSTPAGO MAX M" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP" && $("#plan").val() === "PLAN POSTPAGO MAX L" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP" && $("#plan").val() === "PLAN POSTPAGO MAX XL" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP" && $("#plan").val() === "PLAN POSTPAGO MAX X" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS. Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "DESC" && $("#descuento").val() === "30% X 6 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta descuento, 30% X 6 MESES, Lo anterior sin costo para el Cliente. Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "DESC" && $("#descuento").val() === "50% X 6 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta descuento,  50% X 6 MESES, Lo anterior sin costo para el Cliente. Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "DESC" && $("#descuento").val() === "20% X 12 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta descuento, 20% X 12 MESES, Lo anterior sin costo para el Cliente. Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "DESC" && $("#descuento").val() === "30% X 12 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta descuento, 30% X 12 MESES, Lo anterior sin costo para el Cliente. Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "DESC" && $("#descuento").val() === "40% X 12 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta descuento, 40% X 12 MESES, Lo anterior sin costo para el Cliente. Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "DESC" && $("#descuento").val() === "50% X 12 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta descuento, 50% X 12 MESES, Lo anterior sin costo para el Cliente. Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#descuento").val() === "30% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 6 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#descuento").val() === "50% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 6 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#descuento").val() === "20% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 20% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#descuento").val() === "30% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#descuento").val() === "40% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 40% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#descuento").val() === "50% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#descuento").val() === "30% X 6 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 6 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejem. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#descuento").val() === "50% X 6 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 6 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejem. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#descuento").val() === "20% X 12 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 20% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejem. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#descuento").val() === "30% X 12 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejem. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#descuento").val() === "40% X 12 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("22").text("Acepta PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 40% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#descuento").val() === "50% X 12 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("22").text("Acepta PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#descuento").val() === "30% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 6 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#descuento").val() === "50% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 6 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#descuento").val() === "20% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 20% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#descuento").val() === "30% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#descuento").val() === "40% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 40% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#descuento").val() === "50% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#descuento").val() === "30% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 6 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#descuento").val() === "50% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 6 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#descuento").val() === "20% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 20% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#descuento").val() === "30% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#descuento").val() === "40% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 40% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#descuento").val() === "50% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#descuento").val() === "30% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 6 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#descuento").val() === "50% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 6 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#descuento").val() === "20% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 20% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#descuento").val() === "30% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#descuento").val() === "40% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 40% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#descuento").val() === "50% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#descuento").val() === "30% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 6 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#descuento").val() === "50% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 6 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#descuento").val() === "20% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 20% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#descuento").val() === "30% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#descuento").val() === "40% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 40% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#descuento").val() === "50% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#descuento").val() === "30% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 6 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#descuento").val() === "50% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 6 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#descuento").val() === "20% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 20% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#descuento").val() === "30% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#descuento").val() === "40% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 40% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#descuento").val() === "50% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#descuento").val() === "30% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 6 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#descuento").val() === "50% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 6 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#descuento").val() === "20% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 20% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#descuento").val() === "30% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#descuento").val() === "40% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 40% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#descuento").val() === "50% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#descuento").val() === "30% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS// + DESCUENTO 30% X 6 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#descuento").val() === "50% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS// + DESCUENTO 50% X 6 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#descuento").val() === "20% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS// + DESCUENTO 20% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#descuento").val() === "30% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS// + DESCUENTO 30% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#descuento").val() === "40% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS// + DESCUENTO 40% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#descuento").val() === "50% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS// + DESCUENTO 50% X 12 MESES// + BOLSA DE DOBLE GB sobre su plan, por 12 meses// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#descuento").val() === "30% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 6 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#descuento").val() === "50% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 6 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#descuento").val() === "20% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 20% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#descuento").val() === "30% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#descuento").val() === "40% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 40% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#descuento").val() === "50% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#descuento").val() === "30% X 6 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 6 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#descuento").val() === "50% X 6 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 6 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#descuento").val() === "20% X 12 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 20% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#descuento").val() === "30% X 12 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#descuento").val() === "40% X 12 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 40% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#descuento").val() === "50% X 12 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#descuento").val() === "30% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 6 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#descuento").val() === "50% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 6 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#descuento").val() === "20% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 20% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#descuento").val() === "30% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#descuento").val() === "40% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 40% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#descuento").val() === "50% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#descuento").val() === "30% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 6 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#descuento").val() === "50% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 6 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#descuento").val() === "20% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 20% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#descuento").val() === "30% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#descuento").val() === "40% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 40% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#descuento").val() === "50% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#descuento").val() === "30% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 6 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#descuento").val() === "50% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 6 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#descuento").val() === "20% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 20% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#descuento").val() === "30% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#descuento").val() === "40% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 40% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#descuento").val() === "50% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#descuento").val() === "30% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 6 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#descuento").val() === "50% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 6 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#descuento").val() === "20% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 20% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#descuento").val() === "30% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#descuento").val() === "40% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 40% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#descuento").val() === "50% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#descuento").val() === "30% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 6 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#descuento").val() === "50% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 6 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#descuento").val() === "20% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 20% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#descuento").val() === "30% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#descuento").val() === "40% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 40% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#descuento").val() === "50% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#descuento").val() === "30% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 6 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#descuento").val() === "50% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 6 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#descuento").val() === "20% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 20% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#descuento").val() === "30% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 30% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#descuento").val() === "40% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 40% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#descuento").val() === "50% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses.// + DESCUENTO 50% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#descuento").val() === "30% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS// + DESCUENTO 30% X 6 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#descuento").val() === "50% X 6 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS// + DESCUENTO 50% X 6 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#descuento").val() === "20% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS// + DESCUENTO 20% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#descuento").val() === "30% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS// + DESCUENTO 30% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#descuento").val() === "40% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS// + DESCUENTO 40% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#descuento").val() === "50% X 12 MESES") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS// + DESCUENTO 50% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "DESC + BOLSA" && $("#descuento").val() === "30% X 6 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta BOLSA DE DOBLE DE GB sobre su plan + DESCUENTO del 30% X 6 MESES//Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "DESC + BOLSA" && $("#descuento").val() === "50% X 6 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta BOLSA DE DOBLE DE GB sobre su plan + DESCUENTO del  50% X 6 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "DESC + BOLSA" && $("#descuento").val() === "20% X 12 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta BOLSA DE DOBLE DE GB sobre su plan + DESCUENTO del 20% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "DESC + BOLSA" && $("#descuento").val() === "30% X 12 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta BOLSA DE DOBLE DE GB sobre su plan + DESCUENTO del 30% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");

    }else if (concatenated_string = $("#accion").val() === "DESC + BOLSA" && $("#descuento").val() === "40% X 12 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta BOLSA DE DOBLE DE GB sobre su plan + DESCUENTO del 40% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");

    }else if (concatenated_string = $("#accion").val() === "DESC + BOLSA" && $("#descuento").val() === "50% X 12 MESES" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta BOLSA DE DOBLE DE GB sobre su plan + DESCUENTO del 50% X 12 MESES// Promoción sera activada dentre de 48 a 72 horas hábiles el cual se verá reflejado en su boleta subsiguiente, Ejec. Transcom EJECUTIVO");
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if ($("#accion").val() === "BOLSA MIN" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta Bolsa de 100 MINUTOS X 6 MESES, sin costo para el cliente, se reporta activacion del Back office Transcom Chile. La bolsa quedara activa dentre de 48 a 72 horas hábiles,Gestionado por Ejec. Transcom EJECUTIVO");
        $("#7").text('BOLSA MIN');
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if ($("#accion").val() === "BOLSA INTERNET" ) {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta Bolsa de 3 GB X 12 MESES, sin costo para el cliente, se reporta activacion del Back office Transcom Chile. La bolsa quedara activa dentre de 48 a 72 horas hábiles,Gestionado por Ejec. Transcom EJECUTIVO");
        $("#7").text('BOLSA INTERNET');
        $("#24").text("");
        $("#25").text("");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");
        
    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");
        
    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");
        
    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CDP + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + UPGRADE PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS. Promoción sera activada dentre de 48 a 72 horas hábiles // ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");
        
    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){
        var descuento = $('#descuento').val();
        $('#24').text(descuento);
        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){
        var cac = $('#sucursal').val();
        $('#26').text(cac);
        });

        $("#27").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){
        var descuento = $('#descuento').val();
        $('#24').text(descuento);
        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){
        var cac = $('#sucursal').val();
        $('#26').text(cac);
        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){
        var descuento = $('#descuento').val();
        $('#24').text(descuento);
        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){
        var cac = $('#sucursal').val();
        $('#26').text(cac);
        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO LSAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){
        var descuento = $('#descuento').val();
        $('#24').text(descuento);
        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){
        var cac = $('#sucursal').val();
        $('#26').text(cac);
        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DESC + UPGRADE PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){
        var descuento = $('#descuento').val();
        $('#24').text(descuento);
        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){
        var cac = $('#sucursal').val();
        $('#26').text(cac);
        });

        $("#27").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){
        var descuento = $('#descuento').val();
        $('#24').text(descuento);
        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){
        var cac = $('#sucursal').val();
        $('#26').text(cac);
        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){
        var descuento = $('#descuento').val();
        $('#24').text(descuento);
        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){
        var cac = $('#sucursal').val();
        $('#26').text(cac);
        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA XS" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN CUENTA EXACTA XS, CFM 6990, MINUTOS 400 MIN, 10 GB, 200 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){
        var descuento = $('#descuento').val();
        $('#24').text(descuento);
        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){
        var cac = $('#sucursal').val();
        $('#26').text(cac);
        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN CUENTA EXACTA S" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN CUENTA EXACTA S, CFM 9990, MINUTOS LIBRES A 100 NUMEROS, 20 GB, 500 SMS, RRSS (LIBRES). Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX Y" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN POSTPAGO MAX Y, CFM 12990, MINUTOS LIBRES A 100 NUMEROS, 35 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 10 MIN,10 SMS y 500 MB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX M" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN POSTPAGO MAX M, CFM 14990, MINUTOS LIBRES A 300 NUMEROS, 45 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 20 MIN, 20 SMS y 1 GB, LDI a 17 paises 20 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX L" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN POSTPAGO MAX L, CFM 19990, MINUTOS LIBRES A 300 NUMEROS, 50 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 40 MIN, 40 SMS y 2 GB, LDI a 17 paises 40 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX XL" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN POSTPAGO MAX XL, CFM 24990, MINUTOS LIBRES A 300 NUMEROS, 60 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 60 MIN, 60 SMS y 3 GB, LDI a 17 paises 60 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN MAX PREMIUM LIBRE" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN MAX PREMIUM LIBRE, CFM 29990, MINUTOS LIBRES A 300 NUMEROS, 70 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 80 MIN, 80 SMS y 4 GB, LDI a 17 paises 80 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN MAX PREMIUM BLACK LIBRE" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN MAX PREMIUM BLACK LIBRE, CFM 37990, MINUTOS LIBRES A 300 NUMEROS, 80 GB, 500 SMS, RRSS (LIBRES)// Roaming en 17 paises con 100 MIN, 100 SMS y 5 GB, LDI a 17 paises 100 MIN. Incluye suscripción a Claro Video por 12 meses Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. / Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CDP + DESC + BOLSA + CEP" && $("#plan").val() === "PLAN POSTPAGO MAX X" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta CDP + DCTO + BOLSA + UPGRADE= PLAN POSTPAGO MAX X, CFM 17990, MINUTOS LIBRES, 40 GB, 500 SMS Descuento");
        $("#24").text(descuento);

        $("#descuento").change(function(){

        var descuento = $('#descuento').val();
        $('#24').text(descuento);

        });

        $("#25").text("+ BOLSA DE DOBLE DE GB// Promoción sera activada dentre de 48 a 72 horas hábiles// ACEPTA OFERTA ESPECIAL UPGRADE CON EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#26").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#26').text(cac);

        });

        $("#27").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL) // CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");

    }else if (concatenated_string = $("#accion").val() === "CEP" && $("#cep").val() === "$30.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta UPGRADE/ACEPTA UPGRADE BONO $30.000 PARA SER EFECTIVO EN CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("BONO NO APLICA PARA EQUIPOS CLARO UP Y PAGO CONTADO,// SOLO APLICA CON EQUIPOS PACTADOS EN 12 CUOTAS EN BOLETA MENSUAL// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA. PROMOCION VALIDA POR 30 DIAS/ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");

    }else if (concatenated_string = $("#accion").val() === "CEP" && $("#cep").val() === "LG K22 / PIE $0/ 24 CUOTAS $4.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta OFERTA ESPECIAL UPGRADE CON EQUIPO LG K22 / PIE $0/ 24 CUOTAS $4.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");
    }else if (concatenated_string = $("#accion").val() === "CEP" && $("#cep").val() === "SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta OFERTA ESPECIAL UPGRADE CON EQUIPO SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");
    }else if (concatenated_string = $("#accion").val() === "CEP" && $("#cep").val() === "HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000") {
    
        $("#20").text("Call center Transcom campaña Resolutiva Movil// Area Cross Selling // PCS");
        $("#22").text("Acepta OFERTA ESPECIAL UPGRADE CON EQUIPO HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000 RETIRO CAC");
        $("#24").text(cac);

        $("#sucursal").change(function(){

        var cac = $('#sucursal').val();
        $('#24').text(cac);

        });

        $("#25").text("PROMOCION VALIDA HASTA EL 31-03-2021(SUJETO A STOCK SUCURSAL)// CLIENTE RENUEVA CONTRATO DE ARRIENDO, SE EXEPCIONAN REMANENTES Y OPCION DE COMPRA./ Gestionado por Ejec. Transcom");
        $("#26").text("");
        $("#27").text("");
    }



    })
})