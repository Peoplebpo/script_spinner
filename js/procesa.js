$(document).ready(function () {

$('#btn_ingresar_venta').click(function () {
	opcion = 1;

	var nombre_cliente 		= $('#nombre_cliente').val();
	var rut_cliente			  = $('#rut_cliente').val();
	var telefono_cliente	= $('#telefono_cliente').val();
	var prioriza			    = $('#prioriza').val();
	var tipo_cliente 		  = $('#tipo_cliente').val();
	var plan_actual			  = $('#plan_actual').val();
	var minutos				    = $('#minutos').val();
	var consumo				    = $('#consumo').val();
	var c_fijos				    = $('#c_fijos').val();
	var gb					      = $('#gb').val();
	var plan_aceptado 		= $('#plan_aceptado').val();
	var fecha_retiro		  = $('#fecha_retiro').val();
	var descuento_aceptado= $('#descuento_aceptado').val();
	var sucursal_des			= $('#sucursal_des').val();
	var equipo_aceptado		= $('#equipo_aceptado').val();
	var num_interaccion		= $('#num_interaccion').val();
	var bolsa_aceptada		= $('#bolsa_aceptada').val();
	var comentarios			  = $('#comentarios').val();
	var sel_venta			    = $('#sel_venta').val();
	var funcion_correo		= $('#funcion_correo').val();
	var correo 				    = $('#correo').val();

  var pcs               = $('#pcs').val();
  var sucursal          = $('#sucursal').val();
  var equipo            = $('#equipo').val();
  var bolsa             = $('#bolsa').val();
  var interaccion       = $('#interaccion').val();
  var descuento         = $('#descuento').val();
  var plan              = $('#plan').val();
  var fecha             = $('#fecha').val();

	$.ajax({
        url: "includes/crud_procesa.php",
        type: "POST",
        datatype: "json",
        data: {
          nombre_cliente,
          rut_cliente,
          telefono_cliente,
          prioriza,
          tipo_cliente,
          plan_actual,
          minutos,
          consumo,
          c_fijos,
          gb,
          plan_aceptado,
          fecha_retiro,
          descuento_aceptado,
          sucursal,
          equipo_aceptado,
          num_interaccion,
          bolsa_aceptada,
          comentarios,
          sel_venta,
          funcion_correo,
          correo,
          pcs,
          sucursal,
          equipo,
          bolsa,
          interaccion,
          descuento,
          plan,
          fecha,
          opcion
        },
        success: function (respuesta) {

			Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Registro Ingresado con Exito'
            })

        }

        });


});

$('#btn_cierre_llamada').click(function () {
  opcion = 2;

  var nombre_cliente    = $('#nombre_cliente').val();
  var rut_cliente       = $('#rut_cliente').val();
  var telefono_cliente  = $('#telefono_cliente').val();
  var prioriza          = $('#prioriza').val();

  var estado           = $('#estado').val();
  var num_rellamada    = $('#num_rellamada').val();
  var tipificacion     = $('#tipificacion').val();
  var fecha_rellamada  = $('#fecha_rellamada').val();
  var hora_rellamada   = $('#hora_rellamada').val();

  $.ajax({
        url: "includes/crud_procesa.php",
        type: "POST",
        datatype: "json",
        data: {
          nombre_cliente,
          rut_cliente,
          telefono_cliente,
          prioriza,
          estado,
          num_rellamada,
          tipificacion,
          fecha_rellamada,
          hora_rellamada,
          opcion
        },
        success: function (respuesta) {

      Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Registro Ingresado con Exito'
            })

        }
});


});