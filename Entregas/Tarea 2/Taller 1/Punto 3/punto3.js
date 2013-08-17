function darAvatar(puntos) {
	var avatar;
	if (puntos < 100) {
		avatar = "Perro";
	} else if (puntos > 100 && puntos < 1000) {
		avatar = "Gato";
	} else {
		avatar = "Simio";
	}
	return avatar;
}
var miavatar = darAvatar(335);
// Respuesta "Gato"

function darAñosPerro(años) {
	return años * 7;
}
var miPerro = darAñosPerro(4);
// Respuesta 28

function darArea(ancho, alto) {
	var area = ancho * alto;
	return area;
}
var rectarea = darArea(3, 4);
// Respuesta 12

function acumular(arregloNumeros) {
	var total = 0;
	for (var i = 0; i < arregloNumeros.length; i++) {
		total += arregloNumeros[i];
	}
	return total;
}
var total = acumular([1, 5, 3, 9]);
// Respuesta 18