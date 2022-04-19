var opciones = {
    "":[""],

    "Rechazo": ["CDP Actualizado por otro Usuario",
    "CDP Realizado en Sucursal","Cliente Moroso",
    "Cliente Portado","Conforme con sus Servicios Actuales",
    "Corta Llamada","Desconfia De La Llamada",
    "Descuento Realizado Por Otro Usuario",
    "Oferta de Equipo",
    "Oferta No Aplicada",
    "Mala Atencion CAC",
    "Mala Atencion Call Center",
    "Mala Cobertura",
    "Mejor Oferta Competencia Entel",
    "Mejor Oferta Competencia Movistar",
    "Mejor Oferta Competencia Wom",
    "Problemas De Facturacion",
    "Volver A Llamar"],

    "NO CONTACTADO": ["Fuera de Servicio",
    "Buzon de Voz",
    "No Contesta"]

}
$(function () {
    var fillSecondary = function () {
        var selected = $('#estado').val();
        $('#tipificacion').empty();
        opciones[selected].forEach(function (element, index) {
            $('#tipificacion').append('<option value="' + element + '">' + element + '</option>');
        });
    }
    $('#estado').change(fillSecondary);
    fillSecondary();
});