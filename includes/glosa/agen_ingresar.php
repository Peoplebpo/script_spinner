<?php
/*
  ini_set("session.cookie_lifetime", 10800);
  ini_set("session.gc_maxlifetime", 10800);

  session_start();

?>

<?php

    if (isset($_SESSION['username']))


        { 

            $usuario      = $_SESSION['username'];
            $perfil       = $_SESSION['perfil'];
            $servicio     = $_SESSION['servicio'];
            $area         = $_SESSION['area'];
            $ipops        = $_SESSION["ipops"];
            $rut_usuario  = $_SESSION["ipops"];

        }else{

    header('location: ../../login/session.html'); 

    exit;
    
        }

sleep(1);
*/

// borrar despues de pasar a produccion y descomentar codigo anterior

$usuario      = "ivan ruiz delfin";

?>

<div class="col-12" id="g_glosa" style="display:none;">

  <!--botones-->
  <div class="container-fluid my-2">
    <div class="row">

      <div class="col">
      <p class="fs-4 fw-bold">GENERADOR GLOSA</p>
      </div>

    </div>
  </div>
  <!--titulo-->

  <div class="container-fluid">

    <div class="row border border-secondary rounded mx-0 shadow-sm py-3 fondo_cuadro">

      <!-- primera columna -->

      <div class="col">

        <label class="mt-2">Nombre</label>
        <input name="nombres" type="name" class="form-control" value="<?php echo $usuario; ?>" size="32" id="nombres"
          disabled>

        <label>Descuento</label>
        <select name="descuento" id="descuento" class="form-control">
          <option value=""></option>
          <option value="40% X 6 MESES">30% X 6 MESES</option>
          <option value="50% X 6 MESES">50% X 6 MESES</option>
          <option value="20% X 12 MESES">20% X 12 MESES</option>
          <option value="30% X 12 MESES">30% X 12 MESES</option>
          <option value="40% X 12 MESES">40% X 12 MESES</option>
          <option value="50% X 12 MESES">50% X 12 MESES</option>
        </select>

      </div>

      <!-- segunda columna -->

      <div class="col">

        <label>Pcs</label>
        <input name="pcs" type="name" class="form-control" size="32" id="pcs" required="required" />

        <label class="mt-2">Bono Cep</label>
        <select name="cep" class="form-control" id="cep">
          <option value=""></option>
          <option value="LG K22 / PIE $0/ 24 CUOTAS $4.000">LG K22 / PIE $0/ 24 CUOTAS $4.000</option>
          <option value="SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000">SAMSUNG A31 / PIE $0/ 24 CUOTAS $9.000</option>
          <option value="HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000">HUAWEI P40 LITE/ PIE $0/ 24 CUOTAS $8.000</option>
          <option value="$30.000">$30.000</option>
        </select>

      </div>


      <!-- tercera columna -->

      <div class="col">

        <label>Accion</label>
        <select name="accion" id="accion" class="form-control">
          <option value=""></option>
          <option value="CDP">CDP</option>
          <option value="DESC">DESC</option>
          <option value="CDP + DESC">CDP + DESC</option>
          <option value="CDP + DESC + BOLSA">CDP + DESC + BOLSA</option>
          <option value="DESC + BOLSA">DESC + BOLSA</option>
          <option value="BOLSA MIN">BOLSA MIN</option>
          <option value="BOLSA INTERNET">BOLSA INTERNET</option>
          <option value="CDP + CEP">CDP + CEP</option>
          <option value="CDP + DESC + CEP">CDP + DESC + CEP</option>
          <option value="CDP + DESC + BOLSA + CEP">CDP + DESC + BOLSA + CEP</option>
          <option value="CEP">CEP</option>
        </select>


        <label class="mt-2">Sucursal</label>
        <select class="selectpicker form-control border" id="sucursal" name="sucursal" data-live-search="true">

          <option selected="selected" value="">Seleccione Sucursal</option>
          <?php

          require 'conexion/conexion.php';
    
          if (!$conn->set_charset("utf8")) {//asignamos la codificación comprobando que no falle
          die("Error cargando el conjunto de caracteres utf8");
          }
          $consulta = "SELECT * FROM sucursal_contencion";
          $resultado = mysqli_query($conn , $consulta);
          $contador=0;

          while($misdatos = mysqli_fetch_assoc($resultado)){ $contador++;
          ?>
          <option value="<?php echo $misdatos["nombre"]; ?>"><?php echo $misdatos["nombre"]; ?></option>
          <?php 
          }      
        ?>

        </select>


      </div>


      <!-- cuarta columna -->

      <div class="col">

        <label>Plan</label>
        <select name="plan" id="plan" class="form-control">
          <option value=""></option>
          <option value="PLAN CUENTA EXACTA XS">PLAN CUENTA EXACTA XS</option>
          <option value="PLAN CUENTA EXACTA S">PLAN CUENTA EXACTA S</option>
          <option value="PLAN POSTPAGO MAX Y">PLAN POSTPAGO MAX Y</option>
          <option value="PLAN POSTPAGO MAX M">PLAN POSTPAGO MAX M</option>
          <option value="PLAN POSTPAGO MAX L">PLAN POSTPAGO MAX L</option>
          <option value="PLAN POSTPAGO MAX XL">PLAN POSTPAGO MAX XL</option>
          <option value="PLAN MAX PREMIUM LIBRE">PLAN MAX PREMIUM LIBRE</option>
          <option value="PLAN MAX PREMIUM BLACK LIBRE">PLAN MAX PREMIUM BLACK LIBRE</option>
          <option value="PLAN POSTPAGO MAX X">PLAN POSTPAGO MAX X</option>
        </select>

      </div>
    </div>
  </div>

  <div class="container-fluid my-2">

    <div class="row border border-secondary rounded mx-0 shadow-sm py-3 fondo_cuadro">
      <div class="col-12">
        <label>Resumen para comentario en Altitud</label>
        <div class="bg-light my-2 w-100 p-3 border border-dark rounded" id="foo">

          <label id="1"></label> // <label id="2"></label> <label id="3"></label> <label id="4"></label> <label
            id="5"></label> <label id="6"></label> <label id="7"></label> <label id="8"></label> <label id="9"></label>
          <label id="10"></label> <label id="11"></label> //


        </div>
        <button type="button" class="btn btn-primary copiarresumen w-100">Copiar Resumen Altitud</button>
      </div>

      <div class="col-sm-6 my-2">
        <div class="card border-dark mb-3 p-2">

          <h5 class="card-title">TEMPLE</h5>

          <div class="card-body" id="foo2">

            <span id="20"></span> <span id="21"></span> <span id="22"></span> <span id="24"></span> <span
              id="25"></span> <span id="26"></span> <span id="27"></span> <span id="23"></span>

          </div>

          <button type="button" class="btn btn-warning text-white copiartemple w-100 mt-2">Copiar Temple ONE</button>

        </div>
      </div>

      <div class="col-sm-6 mt-2">
        <div class="card border-dark mb-3 p-2">

          <h5 class="card-title">MOTIVOS</h5>

          <div class="card-body" id="foo3">

            <label id="40"></label>

          </div>

          <button type="button" class="btn btn-info text-white copiarmotivos w-100 mt-2">Copiar Motivos ONE</button>

        </div>
      </div>



      <!-- fin container -->
    </div>

  </div>

  <div class="col-12 mt-3" id="g_glosa1">

<button type="button" class="btn_script btn btn-primary btn-xs text-white my-2" style="float:right; margin-right: 5px;" onclick="venta()">Venta</button> 

</div>

  </div>
