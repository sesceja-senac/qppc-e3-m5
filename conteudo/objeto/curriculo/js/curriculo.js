$(function (){
    $("#bto-foto").click(function (){
        $(this).fadeOut("fast", function (){
            $("#foto-mirella").fadeIn("fast")
        });
        
    })
    
    $(".btos-curriculo").click(function (){
        $(this).parent().remove();
        var id = $(this).attr("id").split("-")[1];
        
        $("#"+id).fadeIn("fast")
    });

    


})
