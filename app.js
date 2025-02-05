// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//variables
const jugadores = [];

// Función para agregar un amigo a la lista
targets = document.querySelector("#listaAmigos");
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (!nombre) {
        alert("Por favor, ingresa un nombre.");
        return;
    }
    if (jugadores.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado.");
        return;
    }
    
    // Limpiar la lista si se ha sorteado previamente
    if (targetResult.innerHTML !== "") {
        jugadores.length = 0;
        targets.innerHTML = "";
        targetResult.innerHTML = "";
    }
    
    jugadores.push(nombre);
    const li = document.createElement("li");
    li.textContent = nombre;
    targets.appendChild(li);
    input.value = "";
}


// Función para sortear un nombre aleatorio de la lista, mostrarlo y resetear la lista
targetResult = document.querySelector("#resultado");
function sortearAmigo() {
    if (jugadores.length < 1) {
        alert("Debe haber al menos un jugador para sortear.");
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * jugadores.length);
    const nombreSorteado = jugadores[indiceSorteado];
    
    // Mostrar solo el nombre sorteado
    targetResult.innerHTML = `El amigo secreto es: ${nombreSorteado}`;
    
    // Resetear la lista de jugadores
    jugadores.length = 0;
    targets.innerHTML = "";
}