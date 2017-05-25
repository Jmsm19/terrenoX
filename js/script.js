
// Generar matriz
function generar () {
	
	eliminar();
	// debugger;
	var area = document.getElementsByClassName("area")[0];
	
	var tabla = document.createElement("table");
	tabla.className = "terreno";
	area.appendChild(tabla);

	var terreno = document.getElementsByClassName("terreno")[0];

	for (var i = 0; i < 15; i++) {	
		var fila = document.createElement("tr");
		terreno.appendChild(fila);
		
		for (var j = 0; j < 15; j++) {
			var num = Math.floor((Math.random() * 5) + 1);
			var caja = document.createElement("td");
			caja.className = "caja";
			fila.appendChild(caja);

			if (num === 1) {
				caja.className += " agua";
			} else if (num === 2) {
				caja.className += " fuego";
			} else if (num === 3) {
				caja.className += " tierra";
			} else if (num === 4) {
				caja.className += " piedra";
			} else {
				caja.className += " grama";
			}

		}
	}
}

function eliminar() {
	var terreno = document.getElementsByClassName("terreno");
	debugger;
	if (terreno.length > 0) {
		var terr = document.getElementsByClassName("terreno")[0];
		terr.remove()
	}
}