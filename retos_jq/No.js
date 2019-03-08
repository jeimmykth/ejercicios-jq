
alert("hola");
$("#append").click(function(){
    var cuadro= $(".square").first().clone()
    $(".squares").append(cuadro);
  });

  $("#append").click(function(){
    var cuadro= $(".square").clone()
    $(".squares").append(cuadro);
  });