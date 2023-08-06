
$(".grid-item").on("click", function(){
    if (this) {
    $(this).addClass('animate__flipInY');
    $(this).css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF').css('padding', '5px');;
    var nthChild = $(this).index() + 1;
    if (nthChild === 12) {
        $(this).text("4");
    } else if (nthChild === 13) {
        $(this).text("6");
    } else if (nthChild === 14) {
        $(this).text("8");
    } else if (nthChild === 15) {
        $(this).text("10");
    } else if (nthChild === 16) {
        $(this).text("12");
    } else if (nthChild === 17) {
        $(this).text("14");
    } else if (nthChild === 18) {
        $(this).text("16");
    } else if (nthChild === 19) {
        $(this).text("18");
    } else if (nthChild === 20) {
        $(this).text("20");
    } else if (nthChild === 22) {
        $(this).text("6");
    } else if (nthChild === 23) {
        $(this).text("9");
    } else if (nthChild === 24) {
        $(this).text("12");
    } else if (nthChild === 25) {
        $(this).text("15");
    } else if (nthChild === 26) {
        $(this).text("18");
    } else if (nthChild === 27) {
        $(this).text("21");
    } else if (nthChild === 28) {
        $(this).text("24");
    } else if (nthChild === 29) {
        $(this).text("27");
    } else if (nthChild === 30) {
        $(this).text("30");
    } else if (nthChild === 32) {
        $(this).text("8");
    } else if (nthChild === 33) {
        $(this).text("12");
    } else if (nthChild === 34) {
        $(this).text("16");
    } else if (nthChild === 35) {
        $(this).text("20");
    } else if (nthChild === 36) {
        $(this).text("24");
    } else if (nthChild === 37) {
        $(this).text("28");
    } else if (nthChild === 38) {
        $(this).text("32");
    } else if (nthChild === 39) {
        $(this).text("36");
    } else if (nthChild === 40) {
        $(this).text("40");
    } else if (nthChild === 42) {
        $(this).text("10");
    } else if (nthChild === 43) {
        $(this).text("15");
    } else if (nthChild === 44) {
        $(this).text("20");
    } else if (nthChild === 45) {
        $(this).text("25");
    } else if (nthChild === 46) {
        $(this).text("30");
    } else if (nthChild === 47) {
        $(this).text("35");
    } else if (nthChild === 48) {
        $(this).text("40");
    } else if (nthChild === 49) {
        $(this).text("45");
    } else if (nthChild === 50) {
        $(this).text("50");
    } else if (nthChild === 52) {
        $(this).text("12");
    } else if (nthChild === 53) {
        $(this).text("18");
    } else if (nthChild === 54) {
        $(this).text("24");
    } else if (nthChild === 55) {
        $(this).text("30");
    } else if (nthChild === 56) {
        $(this).text("36");
    } else if (nthChild === 57) {
        $(this).text("42");
    } else if (nthChild === 58) {
        $(this).text("48");
    } else if (nthChild === 59) {
        $(this).text("54");
    } else if (nthChild === 60) {
        $(this).text("60");
    } else if (nthChild === 62) {
        $(this).text("14");
    } else if (nthChild === 63) {
        $(this).text("21");
    } else if (nthChild === 64) {
        $(this).text("28");
    } else if (nthChild === 65) {
        $(this).text("35");
    } else if (nthChild === 66) {
        $(this).text("42");
    } else if (nthChild === 67) {
        $(this).text("49");
    } else if (nthChild === 68) {
        $(this).text("56");
    } else if (nthChild === 69) {
        $(this).text("63");
    } else if (nthChild === 70) {
        $(this).text("70");
    } else if (nthChild === 72) {
        $(this).text("16");
    } else if (nthChild === 73) {
        $(this).text("24");
    } else if (nthChild === 74) {
        $(this).text("32");
    } else if (nthChild === 75) {
        $(this).text("40");
    } else if (nthChild === 76) {
        $(this).text("48");
    } else if (nthChild === 77) {
        $(this).text("56");
    } else if (nthChild === 78) {
        $(this).text("64");
    } else if (nthChild === 79) {
        $(this).text("72");
    } else if (nthChild === 80) {
        $(this).text("80");
    } else if (nthChild === 82) {
        $(this).text("18");
    } else if (nthChild === 83) {
        $(this).text("27");
    } else if (nthChild === 84) {
        $(this).text("36");
    } else if (nthChild === 85) {
        $(this).text("45");
    } else if (nthChild === 86) {
        $(this).text("54");
    } else if (nthChild === 87) {
        $(this).text("63");
    } else if (nthChild === 88) {
        $(this).text("72");
    } else if (nthChild === 89) {
        $(this).text("81");
    } else if (nthChild === 90) {
        $(this).text("90");
    } else if (nthChild === 92) {
        $(this).text("20");
    } else if (nthChild === 93) {
        $(this).text("30");
    } else if (nthChild === 94) {
        $(this).text("40");
    } else if (nthChild === 95) {
        $(this).text("50");
    } else if (nthChild === 96) {
        $(this).text("60");
    } else if (nthChild === 97) {
        $(this).text("70");
    } else if (nthChild === 98) {
        $(this).text("80");
    } else if (nthChild === 99) {
        $(this).text("90");
    } 
    } else {
            $('.grid-item').css('background-color', 'blue');
    }
});



