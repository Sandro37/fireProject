function novoProblema() {
    //alert("Cai aqui");
    let problema = document.getElementById("problema").value
    let local = document.getElementById("local").value
    let myFile = document.getElementById("myFile").value

   
    db.collection('Problema').add({
        problema: problema,
        local: local,
        myfile: myFile,
        status: "Cadastrado"
    })
    .then(function (docRef) {
        alert("Problema armazenado com scuesso");
        window.location.href = "../paginas/home.html";
    }).catch(function(error){
        alert("Erro ao incluir problema: ", error);
    })
}


function listarProblema(){  
    db.collection('Problema').get().then((querySnapshot) =>{
        querySnapshot.forEach((doc)=>{
            let tabela = document.getElementById("table");
            var numeroLinhas = tabela.rows.length;
            var linha = tabela.insertRow(numeroLinhas);
            var celula1 = linha.insertCell(0);
            var celula2 = linha.insertCell(1);
            var celula3 = linha.insertCell(2);   
            var celula4 = linha.insertCell(3); 
            var celula5 = linha.insertCell(4); 

            celula1.innerHTML =  doc.id
            celula2.innerHTML = doc.data().problema;
            celula3.innerHTML =  doc.data().local
            celula4.innerHTML =  doc.data().myfile;
            celula5.innerHTML = doc.data().status;
        })
    })
}

function removerProblema(){
    let id = document.getElementById("id").value;

    if(id != null && id != undefined){
        document.getElementById("id").value = "";
    
        db.collection("Problema").doc(id).delete()
        .then(function(){
            alert("Problema Excluido com Sucesso");
            window.location.reload();
        }).catch(function(){
            alert("Erro ao Excluir Problema");
        })
    }
}

function atualizarProblema(){

    let id = document.getElementById("id").value;
    let problema = document.getElementById("problema").value
    let local = document.getElementById("local").value
    let myFile = document.getElementById("myFile").value


    if(id != null && id != undefined){
        if(problema != null && local != null && myFile != null){
            db.collection("Problema").doc(id).update(
                {
                    problema: problema,
                    local: local,
                    myfile: myFile
                })
                .then(function(){
                    alert("Atualizado com sucesso");
                    window.location.reload();
                }).catch(function(error){
                    console.error("Erro!" + error);
                })
        }   
    }
    
}