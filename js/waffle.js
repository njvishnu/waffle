$(document).ready(function(){
    // console.log($(".current").outerHeight());
    /*$.get("http://127.0.0.1:3000/content/ShouldIJump.txt", function(data,status){
      console.log(data);
      var sentence = data.split('.');
      $(".content").css("display" , "initial");
      // $(".content").empty();
      for (var i = 0; i < sentence.length; i++) {
        //$(sentence[i]).appendTo(".content");
        $(".content").append(sentence[i] + ".");
      }
    }); */

    // $(".content").css("display" , "initial");
     // $(".content").empty();
     /*for(var i=0; i < 10; i++){
       $("<p>test</p>").appendTo(".content");
     }*/


    /* var data = $(".content").html();
    var sentence = data.split('.');
    $(".content").css("display" , "initial");
    $(".content").empty();
    for (var i = 0; i < sentence.length; i++) {
      console.log(sentence[i]);
      $(".content").append(sentence[i] + ".");
      // $(sentence[i]).appendTo(".content");
    } */

    console.log($(".content").css("font-size"));

    var cont =  document.getElementById("content");
    cont.addEventListener("overflow",onOverflowChanged,false);

    function onOverflowChanged(event) {
      if (event.type=="overflow") {
        alert("overflow detected");
      }
    }
});
