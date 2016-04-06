$(document).ready(function() {
    
    var resultArray = [];
    
    $("#searchButton").click(function() {
        $("#resultContainer").empty();
        var searchTerm = $("#searchTerm").val();
        var zipcode = $("#zipcode").val();
        
        var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20local.search%20where%20zip%3D'"+zipcode+"'%20and%20query%3D'"+searchTerm+"'&format=json&diagnostics=true&callback=";
        
        $.get(url, function(data) {
            resultArray = data.query.results.Result;
            for(var i = 0; i<resultArray.length; i++) {
                $("#resultContainer").append("<div class=\"panel-heading panel-title\">"+resultArray[i].Title+"</div>"); 
                var id = "result"+i;
                $("#resultContainer").append("<div class=\"panel-body\" id=\""+id+"\"</div>");
                id = "#"+id;
                $(id).append("<p>"+resultArray[i].Title+"</p>");
                $(id).append("<p>"+resultArray[i].Address+"</p>");
                $(id).append("<p>"+resultArray[i].City+"</p>");
                $(id).append("<p>"+resultArray[i].Phone+"</p>");
                $(id).append("<p>"+resultArray[i].Rating.AverageRating+"</p>");
                $(id).append("<p>"+resultArray[i].Rating.TotalReviews+"</p>");
                $(id).append("<p>"+resultArray[i].BusinessUrl+"</p>");
            }
            $("#pageSelector").css("visibility", "visible");
        });
    });
});