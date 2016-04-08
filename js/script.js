$(document).ready(function() {
    
    var resultArray = [];
    
    $("#searchButton").click(function() {
        $("#result-container").empty();
        var searchTerm = $("#searchTerm").val();
        var zipcode = $("#zipcode").val();
        
        var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20local.search%20where%20zip%3D'"+zipcode+"'%20and%20query%3D'"+searchTerm+"'&format=json&diagnostics=true&callback=";
        
        $.get(url, function(data) {
            resultArray = data.query.results.Result;
            
            for(var i = 0; i<resultArray.length; i++) {
                $("#result-container").addClass("panel panel-info");
                var rating = parseInt(resultArray[i].Rating.AverageRating);
                console.log(rating);
                if(rating === 0 || isNaN(rating)) {
                    
                $("#result-container").append("<div class=\"panel-heading panel-title\">"+resultArray[i].Title+"<img src=img/0_stars.jpg></div>"); 
                }
                
                if(rating === 1) {
                $("#result-container").append("<div class=\"panel-heading panel-title\">"+resultArray[i].Title+"<img src=img/1_stars.jpg></div>"); 
                }
                
                if(rating === 2) {
                $("#result-container").append("<div class=\"panel-heading panel-title\">"+resultArray[i].Title+"<img src=img/2_stars.jpg></div>"); 
                }
                
                if(rating === 3) {
                $("#result-container").append("<div class=\"panel-heading panel-title\">"+resultArray[i].Title+"<img src=img/3_stars.jpg></div>"); 
                }
                
                if(rating === 4) {
                $("#result-container").append("<div class=\"panel-heading panel-title\">"+resultArray[i].Title+"<img src=img/4_stars.jpg></div>"); 
                }
                
                if(rating >= 5) {
                $("#result-container").append("<div class=\"panel-heading panel-title\">"+resultArray[i].Title+"<img src=img/5_stars.jpg></div>"); 
                }
                
                
                var id = "result"+i;
                $("#result-container").append("<div class=\"panel-body\" id=\""+id+"\"</div>");
                id = "#"+id;
                $(id).append("<h4><span class=\"label label-info\">Address:</span></h4>");
                $(id).append("<p>"+resultArray[i].Address+"<span class=\"glyphicon glyphicon-phone-alt contact-number\">"+resultArray[i].Phone+"</span></p>");
                $(id).append("<p>"+resultArray[i].City+"</p>");
                
                
                
                $(id).append("<a href=\""+resultArray[i].BusinessUrl+"\"target=\"_blank\">Website</a>");
            }
            
            $("#pageSelector").css("visibility", "visible");
        });
    });
});