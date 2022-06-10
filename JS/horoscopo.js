

$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "https://www.themealdb.com/api/json/v1/1/categories.php",
        dataType: "json",

        success: function(data){
            $.each(data.categories, function(i,item){


                var rowBody = "<div class=tarjeta-horoscopo>"+"<img src=" + item.strCategoryThumb + ">" +"<h3>" + item.strCategory + "</h3>" +
                              " <p>" + item.strCategoryDescription + "</p>"+"</div>";

                $(".card-body").append(rowBody);
            });
        },
    });
});

