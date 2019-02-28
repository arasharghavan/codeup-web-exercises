"use strict";
(function () {


    $("h1").click(function () {

        $(this).css("background-color","red")

    });

   $("p").dblclick(function () {

       $(this).css('font-size', '18px')

   });

   $("dd").hover(

       function () {
       $(this).css("background-color","#FF0")
   },function () {
        $(this).css("background-color","#FFF")
   })

    $(".go").click(function () {
        $(this).css("display","none")
    })


})();