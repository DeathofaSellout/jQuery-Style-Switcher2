$(document).ready(function(){
  //change red
  console.log("Hello");
  // $("change-red").on("click", function(){
  //
  // });
  $(document).on("click", "#change-red", function(){
    console.log("red");
    // $("btn btn-danger btn-block").css("background-color", "green");
    $(this).css("background-color", "green");
  });
  //change green
  $(document).on("click", "#change-green", function(){
    console.log("green");
    $(this).css("background-color", "blue");
  });
  //change blue
  $(document).on("click", "#change-blue", function(){
    console.log("blue");
    $(this).css("background-color", "red");
  });
//make big
//   "make-big"
//make small
//   "make-small"
//animate div
//   "animate-div"
//.hide() and .show()
});
