<?php
class Conexion{   
    public static function Conectar() {        
        define('servidor', '128.199.4.13');
        define('nombre_bd', 'web_script');
        define('usuario', 'root');
        define('password', 'bfWeX777BFEF53q');                     
        $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');            
        try{
            $conexion = new PDO("mysql:host=".servidor."; port=3306; dbname=".nombre_bd, usuario, password, $opciones);            
            return $conexion;
        }catch (Exception $e){
            die("El error de Conexión es: ". $e->getMessage());
        }
    }
}

	$conn = new mysqli("128.199.4.13","root","bfWeX777BFEF53q","web_script",3306); //servidor, usuario de base de datos, contraseña del usuario, nombre de base de datos

 	mysqli_set_charset($conn,"utf8");


	if(mysqli_connect_errno()){

		echo 'Conexion Fallida : ', mysqli_connect_error();

		exit();

	}



?>
