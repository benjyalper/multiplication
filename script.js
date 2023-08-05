$(".grid-item").on("click", function(){
    $('.grid-item').addClass('animate__flipInY');
    $('.grid-item').css('background-color', 'green');
    document.write(this);
});

