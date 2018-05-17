function crearTabla(){
	
	filas = document.getElementById("filas").value;
	columnas = document.getElementById("columnas").value;

	var div_tabla = document.getElementById('divtabla');
	var nueva_tabla = document.createElement('TABLE');
	nueva_tabla.id = "tabla";

	div_tabla.appendChild(nueva_tabla); 

	var tabla = document.getElementById('tabla');

	for (i = 0; i < filas; i++){
		var nueva_fila = document.createElement('HR');
		nueva_fila.id = "fila" + (i+1);
		tabla.appendChild(nueva_fila);
		var fila = document.getElementById('fila' + (i+1));
		for(j=0; j < columnas; j++){
			var fila = document.getElementById('fila' + (i+1));
			var nueva_celda = document.createElement('HD');
			nueva_celda.id = "celda-" + (i+1) + "-" + (j+1);
			fila.appendChild(nueva_celda);
			nueva_celda.innerHTML = nueva_celda.id;
		}
	}
}