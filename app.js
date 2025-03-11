// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); 

    
    if (nombre === "") { 
        alert("Por favor, inserte un nombre válido"); 
        return; 
    }

    amigos.push(nombre); 
    input.value = ''; 
    listaAmigo(); 
}

function listaAmigo() {
    const lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = ''; 
    for (let i = 0; i < amigos.length; i++) { 
        const li = document.createElement('li'); 
        li.textContent = amigos[i]; 
        lista.appendChild(li); 
    }
}

function sortearAmigo() {
    if (amigos.length === 0) { 
        alert("No hay amigos para sortear"); 
        return; 
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    const amigoSorteado = amigos[indiceAleatorio]; 



    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`; 

    listaAmigo(); 
}