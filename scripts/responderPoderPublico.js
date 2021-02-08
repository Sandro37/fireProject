function responder(){

    let id = document.getElementById("id").value;
    var select = document.getElementById('status');
	var value = select.options[select.selectedIndex].value;
    
    if(value != null && value != "null" && value!= undefined && id != null && id != "null" && id != undefined){
        db.collection("Problema").doc(id).update(
            {
                status: value
            })
            .then(function(){
                alert("Atualizado com sucesso");
                window.location.reload();
            }).catch(function(error){
                console.error("Erro!" + error);
            })
    } 
    }
    