<?php
require('../conexion/conexion.php');
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$nombre_cliente 	= (isset($_POST['nombre_cliente'])) ? $_POST['nombre_cliente'] : '';
$rut_cliente 		= (isset($_POST['rut_cliente'])) ? $_POST['rut_cliente'] : '';
$telefono_cliente 	= (isset($_POST['telefono_cliente'])) ? $_POST['telefono_cliente'] : '';
$prioriza 			= (isset($_POST['prioriza'])) ? $_POST['prioriza'] : '';
$tipo_cliente 		= (isset($_POST['tipo_cliente'])) ? $_POST['tipo_cliente'] : '';
$plan_actual 		= (isset($_POST['plan_actual'])) ? $_POST['plan_actual'] : '';
$minutos 			= (isset($_POST['minutos'])) ? $_POST['minutos'] : '';
$consumo 			= (isset($_POST['consumo'])) ? $_POST['consumo'] : '';
$c_fijos 			= (isset($_POST['c_fijos'])) ? $_POST['c_fijos'] : '';
$gb 				= (isset($_POST['gb'])) ? $_POST['gb'] : '';
$plan_aceptado 		= (isset($_POST['plan_aceptado'])) ? $_POST['plan_aceptado'] : '';
$fecha_retiro 		= (isset($_POST['fecha_retiro'])) ? $_POST['fecha_retiro'] : '';
$descuento_aceptado = (isset($_POST['descuento_aceptado'])) ? $_POST['descuento_aceptado'] : '';
$sucursal_des		= (isset($_POST['sucursal_des'])) ? $_POST['sucursal_des'] : '';
$equipo_aceptado 	= (isset($_POST['equipo_aceptado'])) ? $_POST['equipo_aceptado'] : '';
$num_interaccion	= (isset($_POST['num_interaccion'])) ? $_POST['num_interaccion'] : '';
$bolsa_aceptada 	= (isset($_POST['bolsa_aceptada'])) ? $_POST['bolsa_aceptada'] : '';
$comentarios 		= (isset($_POST['comentarios'])) ? $_POST['comentarios'] : '';
$sel_venta 			= (isset($_POST['sel_venta'])) ? $_POST['sel_venta'] : '';
$funcion_correo 	= (isset($_POST['funcion_correo'])) ? $_POST['funcion_correo'] : '';
$correo 			= (isset($_POST['correo'])) ? $_POST['correo'] : '';

$pcs	        	= (isset($_POST['pcs'])) ? $_POST['pcs'] : '';
$sucursal	    	= (isset($_POST['sucursal'])) ? $_POST['sucursal'] : '';
$equipo	      		= (isset($_POST['equipo'])) ? $_POST['equipo'] : '';
$bolsa	      		= (isset($_POST['bolsa'])) ? $_POST['bolsa'] : '';
$interaccion		= (isset($_POST['interaccion'])) ? $_POST['interaccion'] : '';
$descuento	  		= (isset($_POST['descuento'])) ? $_POST['descuento'] : '';
$plan	        	= (isset($_POST['plan'])) ? $_POST['plan'] : '';
$fecha      		= (isset($_POST['fecha'])) ? $_POST['fecha'] : '';



    for ($i=0; $i<sizeof($pcs); $i++) 
    {



      echo $pcs[$i]."<br>";
      echo $sucursal[$i]."<br>"; 
      echo $equipo[$i]."<br>"; 
      echo $bolsa[$i]."<br>"; 
      echo $interaccion[$i]."<br>"; 
      echo $descuento[$i]."<br>";  
      echo $plan[$i]."<br>";
      echo $fecha[$i]."<br>";
    }



$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';


switch($opcion){

	case 1:

		$consulta = "INSERT INTO user (username, password, rut, email, area, servicio, perfil, estado) VALUES('$username2', '$password4', '$rut2', '$email2', '$area2', '$servicio2', '$perfil2', '1') ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data="exito";                       
        break;

    }

print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
$conexion=null;