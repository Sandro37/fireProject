var email = window.localStorage.getItem("email");
if(email != null || email != undefined){
    if(email == "poderPublico@gmail.com.br"){
        window.location.href = "../paginas/homePoderPublico.html";
    }
}