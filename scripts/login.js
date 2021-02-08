function login(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    
    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then((user) => {
        user = firebase.auth().currentUser;

        window.localStorage.setItem("email", email);
        window.localStorage.setItem("senha", senha);
        window.localStorage.setItem("user", user);

        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        window.location.href = "../paginas/home.html";
    }).catch(function(error){
        var errorCode = error.code;
    var errorMessage = error.message;
    document.getElementById("Mensagem").innerHTML = "Usuário não autenticado!<br>Código de erro: " + errorCode + "<br> Mensagem de erro: " + errorMessage;
    // ..
    })
}