function adicionarCancion(){
	var ul = document.getElementById("listaCanciones");
	var li = document.createElement("li");

	li.className = "cancion";
	li.textContent = document.getElementById("nombreCancion").value;
	ul.appendChild(li);
}

window.onload = function() {
	var btnAdicionarCancion = document.getElementById("adicionarCancion");
	btnAdicionarCancion.onclick = adicionarCancion;
}