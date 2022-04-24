var imgs = ["img/94f72ae66762f594b31f9a5aeb5b9ffb.jpg",
"img/AN53423368Programme-Name-Pe.jpg","img/R03RxP5c--w.jpg"];
    
    var n = 0;
    time = 1200;
    play = setInterval("chgImg(0)", 5000);
    
    function chgImg(number) {
    if (number!=0) n = number - 2;
     $('#slide_show').fadeOut(time, function() {    //для картинок
      $(this).attr('src', imgs[n]).fadeIn(time);
     });

    n++;
    if (n>=imgs.length) n = 0;
    }