

$("#random-button").on("click", function () {
    var empty="";
     for(i=0; i<9; i++){
     var randomNum = Math.floor((Math.random() * 9)+1);
     empty=randomNum + empty;
   }

     

     $("#random-number").prepend("<br><hr>", empty);
  });
   // ...

 