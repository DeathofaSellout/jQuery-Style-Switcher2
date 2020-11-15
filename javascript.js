$(document).ready(function(){
  //change red
  console.log("Hello");
  $("change-red").on("click", function(){

  });
  $(document).on("click", "#change-red", function(){
    $("btn btn-danger btn-block").css("background-color", "green");
  });
  //change green
  $(document).on("click", "#change-green", function(){
    $("btn btn-success btn-block").css("background-color", "red");
  });
  //change blue
  $(document).on("click", "change-blue", function(){
    $("btn btn-primary btn-block").css("background-color", "red");
  });
//make big
//   "make-big"
//make small
//   "make-small"
//animate div
//   "animate-div"
//.hide() and .show()
});
