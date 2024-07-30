let tarefas = [];

$(document).ready(function() {
    $("#botao-adicionar").click(function(e) {
        e.preventDefault();
        let taskInput = $("#tarefa-nova")[0];
        const newTask = $("#tarefa-nova").val();

        if(tarefas.includes(newTask)) {
            taskInput.setCustomValidity('Esta tarefa já existe!');
            taskInput.reportValidity();
        }

        else if (newTask == ""){
            taskInput.setCustomValidity('Adicione uma tarefa!');
            taskInput.reportValidity();
        }

        else{
            $("#taskList").prepend("<li>" + newTask + " <button class='delete-task'>Deletar</button></li>");
            tarefas.push(newTask)
            $("#tarefa-nova").val("");
        }
    });

/*

    $(document).on("click", ".delete-task", function() {
        var linha = $(this).parent().text().trim();
        var nomeTarefaParaApagar = linha.replace(/Deletar$/, '').trim();
        
        tarefas = tarefas.filter(function(elemento){
        return elemento !== nomeTarefaParaApagar;
        });

        $(this).parent().remove();
    });
    

    $(document).on("click", "li", function() {
        $(this).toggleClass("linhaNoMeio");
        const $li = $(this);
        const $taskList = $("#taskList");
        const $tasks = $taskList.children("li");

        if ($li.hasClass("linhaNoMeio")) {
            $li.appendTo($taskList);
        } 
    });

    */ /* botao de deletar so funciona quando marcado */ /* botao de deletar so funciona quando desmarcado

    $(document).on("click", "li", function(event) {
        if ($(event.target).hasClass("delete-task")) {
        var linha = $(this).text().trim();
        var nomeTarefaParaApagar = linha.replace(/Deletar$/, '').trim();
        
        tarefas = tarefas.filter(function(elemento){
            return elemento!== nomeTarefaParaApagar;
        });
    
        $(this).remove();
        } else {
        $(this).toggleClass("linhaNoMeio");
        }
        const $li = $(this);
        const $taskList = $("#taskList");
        const $tasks = $taskList.children("li");

        if ($li.hasClass("linhaNoMeio")) {
            $li.appendTo($taskList);
        } 
    });

    */

    $(document).on("click", ".delete-task", function(event) {
        event.stopPropagation();
        var linha = $(this).parent().text().trim();
        var nomeTarefaParaApagar = linha.replace(/Deletar$/, '').trim();
        
        tarefas = tarefas.filter(function(elemento){
        return elemento!== nomeTarefaParaApagar;
        });
    
        $(this).parent().remove();
    });
    
    $(document).on("click", "li", function(event) {
        const $li = $(this);
        const $taskList = $("#taskList");
        const $tasks = $taskList.children("li");
        
        if (!$(event.target).hasClass("delete-task")) {
        $(this).toggleClass("linhaNoMeio");
        }

        else ($li.hasClass("linhaNoMeio")) ;{
            $li.appendTo($taskList);
        }
    });

    const input = document.querySelector('#tarefa-nova');
    input.addEventListener('input', () => {
        input.style.backgroundColor = '#f7b731';
    });
});