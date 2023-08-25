function addTarefa(){
    var input = document.getElementById("tarefaInput");
    var tarefa = input.value;
    input.value = "";

    if(tarefa === ""){
        alert("Insira uma tarefa!");
        return;
    }

    var listaTarefa = document.getElementById("listaTarefa");
    var li = document.createElement("li");
    
    //appendChild() da um nó filho a um elemento pai em uma árvore DOM
    li.appendChild(document.createTextNode(tarefa));
    listaTarefa.appendChild(li);
}