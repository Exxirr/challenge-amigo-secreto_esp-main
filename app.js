// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){

    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);


    let lista = document.getElementById("listaAmigos");
            let nuevoElemento = document.createElement("li");
            nuevoElemento.textContent = nombre;
            lista.appendChild(nuevoElemento);

            input.value = "";
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos para sortear.");
        return;
    }

    let mezclados = [...amigos].sort(() => Math.random() - 0.5);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    for (let i = 0; i < mezclados.length; i++) {
        let amigo1 = mezclados[i];
        let amigo2 = mezclados[(i + 1) % mezclados.length]; 

        let elemento = document.createElement("li");
        elemento.textContent = `${amigo1} → ${amigo2}`;
        resultado.appendChild(elemento);
    }
}