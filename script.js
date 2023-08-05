$(".grid-item").on("click", function(){
    $('.grid-item').addClass('animate__flipInY');
    $('.grid-item').css('background-color', 'green');
    document.write(this);
    var nthChild = $(this).index() + 1;
      console.log("Clicked item's nth child:", nthChild);
});

