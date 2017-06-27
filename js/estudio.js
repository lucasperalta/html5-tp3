
(function($) {
  

    // Animacion para scrollear cuando hago click en el menu y voy a una seccion
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

 

   // Agrego a la barra de navegacion la clase affix para que scrolee junto con la pagina
    // ademas estan definidos el cssc on lo cual se agrega el efecto de cambiar de color de fondo
    //de la barra de navegacion
   
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

     // Cierro el menu despues de elegir una opcion (modo celular )
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });
    
    
})(jQuery); 
