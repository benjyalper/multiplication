$(".grid-item").on("click", function(){
    $('.grid-item').addClass('animate__flipInY');
    $('.grid-item').css('background-color', 'green');
    var nthChild = $(this).index() + 1;
    $('.grid-item').append(nthChild);
});

