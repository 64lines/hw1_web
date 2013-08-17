function adicionarCancion(){
	var texto = $("#nombreCancion").val();
	var puedeAgregar = true;

	/* 
	 * Each: Ciclo en jQuery
	 * Parametro: k (key)
	 * Parametro: v (value)
	 */
	$(".cancion").each(function(k, v) {
		var actualCancion = $(this).text();

		if(actualCancion.toLowerCase() == texto.toLowerCase()) {
			puedeAgregar = false;
		}
	});

	if(texto != "" && puedeAgregar) {
		// Como es posible que haga esto, "usar varias funciones"
		var nuevoLi = $("<li>").addClass("cancion").text(texto);
		$("#listaCanciones").append(nuevoLi);	
	}

	// Limpia la entrada con el id nombreCancion
	$("#nombreCancion").val("")
}

/* 
 * 
 Se ejecuta cuando el documento este listo
 * (equivalente a window.onload)
 */
$(document).ready(function(e) {
	$("#adicionarCancion").click(function() {
		adicionarCancion();
	});
});

/*
 * Se ejecuta cuando es presionada una
 * tecla.
 */
$(document).keypress(function(evt) {

	// La tecla 13 es 'enter' en el teclado
	if (evt.keyCode == 13) {
    	adicionarCancion();
    }	
});