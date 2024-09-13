// Consumo de API con jQuery

// Función para consumir la api
function getPicture() {
    // Plantilla de ajax con jQuery
    $.ajax({
        type: "GET",
        url: "https://picsum.photos/id/1/info",
        dataType: "json",
        async: true,
        success: function (data) {
      renderPicture(data);
        },
    });
}