$(document).ready(function(){
    $("#disp").click(function(){
        $.ajax({
            type:"GET",
            url:"books.json",
            success:function(data){
               var output ="<table><thead><tr><th>name</th><th>username</th><th>email</th><th>address</th></tr>";
             
               for(var i in data){
                 
                     output+="<div class='container'><div class='row'> <div class='card-deck'><div class='card text-center'><div class='card-block'><h4 class='card-title'>"+data[i].title+"</h4>"
                     output+="<div class='card-body bg-secondary mb-3'><h4 class='card-title'>"+data[i].id+"</h4></div>"
                    output+="<p class='card-text'>"+data[i].author+"</p>"
                    output+="<p class='card-text'>"+data[i].email+"</p>"
                    output+="<p class='card-text'> <div class='card-footer bg-primary'>"+data[i].website+"</p></div>"
               
                  output+= "</div></div>";
               }
               $("#result").html(output);
            }
        });
    });
});