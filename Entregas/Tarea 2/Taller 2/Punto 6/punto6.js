function palindromo(cadena) {
	var cadenaOriginal = cadena.split("");
	var cadenaInvertida = cadena.split("").reverse();
	
	if (cadenaInvertida.toString() == cadenaOriginal.toString()) {
		alert("Es un palindromo");
	} else {
		alert("No es un palindromo");
	}
}
