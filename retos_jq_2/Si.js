

alert("hola");
$(".punto").click(function(){
    var volver= $("#input").val()
    $("h1").html("hola "+volver);
    if (volver===" "){
        $("h1").html("como te llamas")
        
    }
  });
  