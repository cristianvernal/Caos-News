

$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "https://api.sbif.cl/api-sbifv3/recursos_api/dolar?apikey=ec5976a07cf78bf22862a3d71da4acc6f1ef4a05&formato=json",
        dataType: "json",

        success: function(data){
            $.each(data, function(i,item){


                var row = "<p>"+data.Dolares[0].Fecha+"</p>"+"<p>"+data.Dolares[0].Valor+"</p>";

                $(".valor-dolar").append(row);
            });
        },
    });
});

