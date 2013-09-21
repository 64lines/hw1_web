var map = null;
function initialValidation() {
    if ("geolocation" in navigator) {
      console.log("(i) GeoLocation is available");
    } else {
      console.log("(i) GeoLocation IS NOT available");
    }
}

$(document).ready(function() {
    initialValidation();

    $("#addMark").click(function() {
        var latitude = $("#latitude").val();
        var longitude = $("#longitude").val();
        var text = $("#textMark").val();

        if (!latitude && !longitude) return;

        L.marker([latitude,longitude]).addTo(map)
            .bindPopup('<b>' + text + '</b>');

    });

    navigator.geolocation.getCurrentPosition(function(position) {
        var coords = position.coords
        var latitude = coords.latitude;
        var longitude = coords.longitude;
        map = L.map('map').setView([latitude, longitude], 13);

        // add an OpenStreetMap tile layer
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);


        // Marcadores del mapa
        L.marker([3.4586018, -76.528745]).addTo(map)
            .bindPopup('<b>Hotel Torre de Cali</b><br><img src="http://media.staticontent.com/media/pictures/6e986e8f-5527-428e-9c5f-72f96ab9239b/50x50">');

        L.marker([3.402747,-76.547788]).addTo(map)
            .bindPopup('<b>Universidad Santiago de Cali</b><br><img src="https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash1/1209756_127807570323_1169628019_q.jpg">');

        L.marker([3.439932,-76.538883]).addTo(map)
            .bindPopup('<b>Hospital Infantil Club Noel</b>');

        L.marker([3.412875,-76.550825]).addTo(map)
            .bindPopup('<b>Patin&oacute;dromo Mundialista</b>');

        L.marker([3.423714,-76.535676]).addTo(map)
            .bindPopup('<b>Liga Vallecaucana de Voleibol</b>');

        L.marker([3.404054,-76.546372]).addTo(map)
            .bindPopup('<b>Centro Comercial Ca&ntilde;averalejo</b>');

        L.marker([3.373466,-76.538261]).addTo(map)
            .bindPopup('<b>Centro Comercial Unicentro Cali</b><br><img src="https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/s48x48/50531_109086609175071_466656824_q.jpg">');

        L.marker([3.368111,-76.527447]).addTo(map)
            .bindPopup('<b>Centro Comercial Jardin Plaza</b><br><img src="https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/1075980_338165589609388_2125181760_q.jpg">');

        var locationMessage = "" 
                + "<b>Ahora est&aacute;s aqu&iacute;</b><br>Latitud: "
                + latitude 
                + "<br>Longitud: " 
                + longitude;

        L.marker([latitude, longitude]).addTo(map)
            .bindPopup(locationMessage)
            .openPopup();
        

        // Llama los datos de localización por el servicio de wikilocation
        $.get("http://api.wikilocation.org/articles", 
            { 
                "lat": latitude, 
                "lng": longitude,
                "limit": 1, 
                "radius": 1000000 
            }, 
            function(data) {
                var articles = data["articles"];
                $.each(articles, function(k, v){
                    var lat = v["lat"];
                    var lng = v["lng"];
                    var markTitle = v["title"];
                    var url = v["url"];

                    var articleMessage = ""
                        + "<b>" + markTitle 
                        + "</b><br><a href='" + url + "'>" 
                        + url + "</a>";

                    L.marker([lat, lng])
                        .addTo(map)
                        .bindPopup(articleMessage);
                });
            }
        );
    });
});