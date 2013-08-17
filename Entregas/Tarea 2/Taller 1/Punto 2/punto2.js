var pelicula2 = {
	titulo: "Forbidden Planet",
	genero: "Classic Sci-fi",
	calificacion: 5,
	horario: ["5:00pm", "9:00pm"],
	darProximaFuncion: function() {
		var ahora = new Date().getTime();
		for (var i = 0; i < this.horario.length; i++) {
			var horario = this.darTiempoDesdeString(this.horario[i]);
			if ((horario - ahora) > 0) {
				return "Proxima funcion " + titulo + "es" + horario[i];
			}
		}
	}
	darTiempoDesdeString: function(cadena) {
		return int(cadena[0]);
	}
};

/*
 * El primer problema de éste script se encuentra en la llamada de horario.lenght, ya
 * que al parecer usa el mismo atributo que se encuentra en la clase, la forma
 * correcta de llamarlo sería utilizando this.horario.
 *
 * El segundo problema se encuentra en que la función darTiempoDesdeString no se encuentra
 * definida.
 */