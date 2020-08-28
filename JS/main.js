$(document).ready(function(){
    $('.servicios nav a:first').addClass('activo');
    $('.nuestros-servicios div:first').show();

    $('.servicios nav a').on('click', function(){
        
        $('.servicios nav a').removeClass('activo');
        $(this).addClass('activo');
        $('.nuestros-servicios div').hide();
        let enlace = $(this).attr('href');
       $(enlace).show();
        
        return false;
    });
});