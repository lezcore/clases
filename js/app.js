function login (){
  var user, pass;
  user = document.getElementById("first-name").value;
  pass = document.getElementById("new-password").value;
  
  if (user === "user" && pass === "liberacion12345" || user  === "leoyayi73@gmail.com" && pass === "leoyayi73" || user  === "business.angelaesmeralda@gmail.com" && pass === "business.angelaesmeralda" || user  === "fredyomega41@gmail.com" && pass === "fredyomega41" || user  === "kticona64@gmail.com" && pass === "kticona64") {
    alert("bienvenido");
    window.location = "videos.html";
    // location.href = "videos.html";

  }else {
    alert("Por favor ingrese los datos correctos");
    window.location = "error.html";
  }
}

