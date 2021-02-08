function pegardados() {

  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  var senhaC = document.getElementById("senhaConfirmacao").value;

  if(senha != senhaC){
    document.getElementById("Mensagem").innerHTML = "Senhas devem ser iguais!";
  }else{
    firebase.auth().createUserWithEmailAndPassword(email, senha)
  .then((user) => {
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("senha", senha);
    window.localStorage.setItem("user", user);

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    window.location.href = "../paginas/home.html";
    // Signed in
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    document.getElementById("Mensagem").innerHTML = "Código de erro: " + errorCode + "<br> Mensagem de erro: " + errorMessage;
    // ..
  });
  }
}
