var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var closeButton = document.querySelector('#close');

button.addEventListener('click', function(){
    modal.classList.add('modal_active');
    setTimeout(function() {modal.classList.remove('modal_active');}, 5000)
});

closeButton.addEventListener('click', function(){
    modal.classList.remove('modal_active');
});
