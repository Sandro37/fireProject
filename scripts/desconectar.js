function desconectar(){
    firebase.auth().signOut().then(() => {
    
        window.localStorage.setItem("email", null);
        window.localStorage.setItem("senha", null);
        window.localStorage.setItem("user", null);
        
        window.location.href = "../paginas/login.html";
      }).catch((error) => {
        // An error happened.
      });

      
}