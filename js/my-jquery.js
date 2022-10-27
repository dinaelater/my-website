

$(document).ready(function(){
    $("p").click(function(){
      $('#par').text("Text.")
    });
  });

  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
    $("button").click(function(){
      $("#w3s").attr("href", function(i, origValue){
        return origValue + "/jquery/"; 
      });
    }); 

    $("h3").click(function(){
      $("h3").hide();
    });


    $("#button").click(function() {
      $(this).hide()
    });

 
    $(".btn-danger").hover( function() {
      $('p').css("color","red")
    });

    $(".btn-danger").mouseleave(function() {
      $("p").css("color","#fff")
    });
  });