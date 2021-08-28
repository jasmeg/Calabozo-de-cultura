object.onclick = function(){xd};
function myFunctionzz() {
  document.getElementById("xd");
  var code = prompt("Por favor escribe el código que conseguiste al completar el calabozo")

  
 if (code=="2117") {
  setTimeout("location.href='step3.html'")
  document.write("<a href='step2.html'>presiona aquí para continuar</a>")
}
else {
("<style>body{color=#a0d9c5}</style>");
document.write("<center><h1>Lo siento</h1></center>");
document.write("El código no coincide :(");
document.write("<strong> INTENTA DE NUEVO</strong>");
document.write('<center><img src="sad.png"/></center>');

}

}