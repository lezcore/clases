function login (){
  var user, pass;
  user = document.getElementById("first-name");
  pass = document.getElementById("new-password");
  
  if (user == "user" && pass == "pass") {
    window.location = "videos.html";

  }  else {
    alert("Por favor ingrese los datos correctos")
    window.location = "error.html"
 }
}

