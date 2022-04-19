

		<div class="col-12 my-2" id="inicial">
			<p class="fs-4 fw-bold">INICIO</p>

			<label class="my-2"><ul><li> Buenos (días, tardes), Don/ña [nombre cliente], habla con [nombre agente], ejecutivo del área de beneficios de CLARO CHILE.</li></label>

			<label class="my-2"><li> Queremos que se mantenga con nosotros, por lo que tenemos una oferta especial <span class="fw-bold">(ENTREGAR OFERTA).</span></li></ul></label>
			
			
		</div>

		<div class="col-6" id="inicial1">
			<label class="fw-bold">Tipo Cliente</label>
			<select name="tipo_cliente" id="tipo_cliente" class="form-select my-2">
				<option value="">--Seleccione una Opcion--</option>
				<option value="titular">Titular</option>
				<option value="usuario">Usuario</option>
			</select> 

		</div>

		<span class="col-6 rounded border border-dark my-2" id="marco">

		<div class="col-5" style="float: left;" id="inicial2">

			<label class="fw-bold">Plan Actual</label>
			<input type="name" name="plan_actual" class="form-control my-2" disabled="disabled">

			<label class="fw-bold">Minutos</label>
			<input type="name" name="minutos" class="form-control my-2" disabled="disabled">

			<label class="fw-bold">Promedio de Consumo</label>
			<input type="name" name="consumo" class="form-control my-2" disabled="disabled">

		</div>

		<div class="col-5" style="float: left; margin: 0px 0px 10px 20px;" id="inicial3">

			<label class="fw-bold">C Fijos</label>
			<input type="name" name="c_fijos" class="form-control my-2" disabled="disabled">

			<label class="fw-bold">GB</label>
			<input type="name" name="gb" class="form-control my-2" disabled="disabled">

		</div>
		</span>

		<div class="col-12 mt-4 p-0" id="inicial4">

		<button type="button" class="btn_script btn btn-primary btn-xs text-white" style="float:right;" onclick="venta()" id="btn_venta1">Venta</button> 

		</div>