$(document).ready(function(){
  //change red
  console.log("Hello");
  $(document).on("click", "#change-red", function(){
    $("#div1").css("background-color", "red");
  });
  //change green
  $(document).on("click", "#change-green", function(){
    $("#div2").css("background-color", "green");
  });
  //change blue
  $(document).on("click", "#change-blue", function(){
    $("#div3").css("background-color", "blue");
  });
  //make bigger and change colors
  $(document).on("click", "#make-big", function(){
    $("#div4").css("height", "900px");
    $("#div4").css("width", "900px");
    $("#div4").css("background-color", "red");
    //below code is overriden by bootstrap
    //$("#div4").removeClass(".changing-divs").addClass(".size");
  });
  $(document).on("click", "#make-small", function(){
    $("#div5").css("height", "-=100px");
    $("#div5").css("background-color", "green");
  });
  $(document).on("click", "#animate-div", function(){
    $("#div6").css("transition-duration", "10s");
    $("#div6").css("width", "+=300px");
    $("#div6").css("height", "+=300px");
    $("#div6").css("background-color", "blue");
  });
  $(document).on("click", "#create-overlay", function(){
      $(".overlay").show();
  });
  $(document).on("click", ".overlay", function(){
      $(".overlay").hide();
  });
    //$("body").hide();
//.hide() and .show()

});
