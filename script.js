const nomeTarefaInput = document.querySelector("#nome-tarefa");
const nomeTarefaSearch = document.querySelector("#busca-tarefa");
const adicionarTarefabtn = document.querySelector("#adicionar-tarefa");

const tarefas = [];

function carregarTarefas(listaTarefas) {
  const lista = document.querySelector("#Lista");
  lista.innerHTML = "";
  listaTarefas.forEach((tarefa) => {
    const novoItemLista = document.createElement("ul");

    const novoItemListaTexto = document.createElement("span");
    novoItemListaTexto.textContent = `${tarefa.nome}`;

    novoItemLista.appendChild(novoItemListaTexto);
    const btnconcluido = document.createElement("button");
    btnconcluido.innerHTML = "Concluido";

    novoItemLista.appendChild(btnconcluido);

    const btnapagar = document.createElement("button");
    btnapagar.innerHTML = "Apagar";
    btnapagar.onclick = function () {
      this.parentNode.remove(novoItemListaTexto);
    };
    novoItemLista.appendChild(btnapagar);

    lista.appendChild(novoItemLista);
  });
}

adicionarTarefabtn.addEventListener("click", (event) => {
  const nomeTarefa = nomeTarefaInput.value;
  if (nomeTarefa != null && nomeTarefa !== "") {
    tarefas.push({ nome: nomeTarefa });
    nomeTarefaInput.value = "";
  }
  carregarTarefas(tarefas);
});

nomeTarefaSearch.addEventListener("keyup", (event) => {
  const textoBusca = event.target.value;
  const tarefasFiltradas = tarefas.filter((tarefa) =>
    tarefa.nome.toUpperCase().includes(textoBusca.toUpperCase())
  );
  carregarTarefas(tarefasFiltradas);
});

carregarTarefas(tarefas);
