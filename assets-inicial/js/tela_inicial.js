window.addEventListener('load', function(){
    $('.preloader').fadeOut(300);    
    
    $('.btn-close').click(function(){
   
        $("iframe").attr("src", $("iframe").attr("src"));
      })
    
})