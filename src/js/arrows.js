$(document).ready(function(){
    var arrowUp = $('#arrowUp');
    var arrowDown = $('#arrowDown');
    var site = $('html, body');
    var siteHeight = site.height();
    console.log(arrowUp);

    arrowUp.on('click', function(){
    
        site.animate({scrollTop: 0},500);
    });

    arrowDown.on('click', function(){
        site.animate({scrollTop: siteHeight},8.5*siteHeight);
    })
});