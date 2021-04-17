$(document).ready(function(){
    var arrowUp = $('#arrowUp')
    var site = $('html, body')
    console.log(arrowUp);

    arrowUp.on('click', function(){
    
        site.animate({scrollTop:0 }, 500);
    });
});