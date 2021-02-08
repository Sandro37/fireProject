var email = window.localStorage.getItem("email");
if(email === null || email === undefined || email === "null"){
    window.location.href = "../paginas/homeSemConta.html";
}