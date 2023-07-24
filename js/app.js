function login (){
  var user, pass;
  user = document.getElementById("first-name").value;
  pass = document.getElementById("new-password").value;
  
  if (user === "user" && pass === "liberacion12345") {
    alert("bienvenido");
    window.location = "videos.html";
    // location.href = "videos.html";

  }else {
    alert("Por favor ingrese los datos correctos");
    window.location = "error.html";
  }
}

