function atualizarSenha(){
    senha = document.getElementById("senha").value;
    senhaNova = document.getElementById("senhaNova").value;
    var user = firebase.auth().currentUser

    if(senha === "" || senhaNova === ""){
        document.getElementById("Mensagem").innerHTML = "ENTRE COM UMA SENHA";
    }else if(senha == senhaNova){
        var newPassword = senhaNova

        if(user != null){
            user.updatePassword(newPassword).then(function() {
                alert("senha atualizada com sucesso");
                window.location.href = "../paginas/home.html";
            }).catch(function(error) {
                alert("Erro ao atualizar Senha");
            });
        }  
    }else{
        document.getElementById("Mensagem").innerHTML = "SENHAS DIFERENTES";
    }
}