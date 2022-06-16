<!DOCTYPE html>
<html>

<head>
	<title></title>
	<meta charset="UTF-8">

	<link rel="stylesheet" href="lib/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
	<link rel="stylesheet" href="css/main.css">

	<script src="lib/jquery.js"></script>
	<script src="includes/glosa/js/zoom.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
		integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous">
	</script>
	<script type="lib/popper.min.js"></script>
	<script src="js/interaccion.js"></script>
	<script src="js/tipificacion.js"></script>
	<script src="js/agregar.js"></script>
	<script src="js/divs.js"></script>
	<script src="js/procesa.js"></script>

	<!-- SCRIPT GENERADOR DE GLOSA-->
	<script src="lib/clipboard.min.js"></script>
	<script src="includes/glosa/js/tipificacion.js"></script>
	<script src="includes/glosa/js/glosa.js"></script>
	<script src="includes/glosa/js/descuento.js"></script>

	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>


</head>

<body>
	<div class="container-fluid my-2">
		<div class="row">

			<div class="col-2">
			
				<button type="button" class="btn_script btn btn-danger btn-xs text-white my-2" onclick="c_llamada();">Cerrar Llamada</button>
			
			</div>


			<div class="col-3">



			</div>

			<div class="col-7">

				<a href="#"><button type="button" class="btn btn-light btn-xs text-dark border border-dark my-2"
						style="float:right;"> Legrado Cobranza </button></a>

			</div>

		</div>
		<!--INICIO DIV PERMANENTE -->

		<?php
	 	include ('includes/div_permanente.php')
		?>

		<!--FIN DIV PERMANENTE -->

		<div class="row border border-secondary mx-0 shadow-sm bg-light my-2 rounded border p-3">


		<!-- PANTALLA INICIO -->

			<?php

			include ('includes/div_inicial.php')
			?>

		<!-- PANTALLA VENTA -->

			<?php

			include ('includes/div_venta.php')

			?>

		<!-- PANTALLA LINEAS ADICIONALES -->

			<?php
			include ('includes/div_linea_adicional.php')
			?>

		<!--PANTALLA INFORMAR SIEMPRE -->

			<?php
			include ('includes/div_info_siempre.php')
			?>

		<!--PANTALLA INFORMAR RELEVANTE -->

			<?php
			include ('includes/div_info_relevante.php')
			?>

		<!--PANTALLA CIERRE VENTA -->

			<?php
			include ('includes/div_cierre_venta.php')
			?>

		<!--PANTALLA CERRAR LLAMADA -->

			<?php
			include ('includes/div_cerrar_llamada.php')
			?>

		<!--PANTALLA GENERADOR DE GLOSA -->

			<?php
			include ('includes/glosa/agen_ingresar.php')
			?>
	
		</div>

	</div>


</body>

</html>