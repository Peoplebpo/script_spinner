<!DOCTYPE html>
<html>

<head>
	<title></title>
	<meta charset="UTF-8">

	<link rel="stylesheet" href="lib/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
	<link rel="stylesheet" href="css/main.css">

	<script src="lib/jquery.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
		integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous">
	</script>
	<script type="lib/popper.min.js"></script>
	<script src="js/agregar.js"></script>
	<script src="js/divs.js"></script>

</head>

<body>
	<div class="container-fluid my-2">
		<div class="row">

			<div class="col-2">
			
				<button type="button" class="btn_script btn btn-danger btn-xs text-white my-2" onclick="c_llamada();">Cerrar Llamada</button>
			
			</div>


			<div class="col-3">

				<div class="input-group mt-2">
					<input type="text" class="form-control" placeholder="Ingrese Teléfono" aria-describedby="button-addon2"><button
						class="btn btn-outline-secondary" type="button" id="button-addon2">Llamar</button>
				</div>

			</div>

			<div class="col-7">

				<a href="#"><button type="button" class="btn btn-light btn-xs text-dark border border-dark my-2"
						style="float:right; margin-right: 5px;"> Legrado Cobranza </button></a>

				<a href="#"><button type="button" class="btn btn-light btn-xs text-dark border border-dark my-2"
						style="float:right; margin-right: 5px;"> Generador de Glosa </button></a>
			</div>

		</div>
		<!--INICIO DIV PERMANENTE -->
		<?php
	 include ('includes/div_permanente.php')
	?>
		<!--FIN DIV PERMANENTE -->
		<div class="row border border-secondary mx-0 shadow-sm py-3 bg-light my-2 rounded border">

			<!-- PANTALLA INICIO -->

			<?php
	 include ('includes/div_inicial.php')
	?>

			<!-- FIN PANTALLA INICIO -->

			<!-- PANTALLA VENTA -->

			<?php
	 include ('includes/div_venta.php')
	?>

			<!-- FIN PANTALLA VENTA -->

			<!-- PANTALLA LINEAS ADICIONALES -->

			<?php
	 include ('includes/div_linea_adicional.php')
	?>

			<!--FIN PANTALLA LINEAS ADICIONALES -->

			<!--PANTALLA INFORMAR SIEMPRE -->

			<?php
	 include ('includes/div_info_siempre.php')
	?>

			<!--FIN PANTALLA INFORMAR SIEMPRE -->

			<!--PANTALLA INFORMAR RELEVANTE -->

			<?php
	 include ('includes/div_info_relevante.php')
	?>

			<!--FIN PANTALLA INFORMAR RELEVANTE -->

			<!--PANTALLA CIERRE VENTA -->

			<?php
	 include ('includes/div_cierre_venta.php')
	?>

			<!--FIN PANTALLA CIERRE VENTA -->

			<!--PANTALLA CERRAR LLAMADA -->

			<?php
	 include ('includes/div_cerrar_llamada.php')
	?>

			<!--FIN PANTALLA CERRAR LLAMADA -->
		</div>

	</div>


</body>

</html>