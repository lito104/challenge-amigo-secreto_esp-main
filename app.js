// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Declarar un arreglo vacío para almacenar los nombres

function agregarAmigo() { // Definir una función para agregar amigos
    const input = document.getElementById('amigo'); // Obtener el input del usuario
    const nombre = input.value.trim(); // Obtener el valor del input y eliminar espacios en blanco

    // Validar la entrada
    if (nombre === "") { // Verificar si el nombre está vacío
        alert("Por favor, inserte un nombre válido"); // Mostrar un mensaje de error
        return; // Salir de la función
    }
    //Funcionalidad extra: verifica si el nombre ya existe en la lista
    if (amigos.includes(nombre)) { // Si el nombre ya existe en la lista
        alert("Este nombre ya está en la lista."); // Mostrar un mensaje de error
        return; // Salir de la función
    }

    amigos.push(nombre); // Agregar el nombre al array
    input.value = ''; // Limpiar el campo de entrada
    listaAmigo(); // Llamar a la función para mostrar la lista de nombres
}

function listaAmigo() { // Definir una función para mostrar la lista de nombres
    const lista = document.getElementById('listaAmigos'); // Obtener el elemento de la lista
    lista.innerHTML = ''; // // Limpiar la lista antes de agregar nuevos elementos
    for (let i = 0; i < amigos.length; i++) { // Recorrer el array de nombres
        const li = document.createElement('li'); // Crear un elemento de la lista
        li.textContent = amigos[i]; // Asignar el nombre del amigo al elemento de lista
        lista.appendChild(li); // Agregar el elemento a la lista
    }
}

function sortearAmigo() { // Definir una función para sortear un amigo
    if (amigos.length === 0) { // Verificar si la lista está vacía
        alert("No hay amigos para sortear"); // Mostrar un mensaje de error
        return; // Salir de la función
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar un número aleatorio entre 0 y la longitud de la lista
    const amigoSorteado = amigos[indiceAleatorio]; // Obtener el nombre del amigo sorteado

    amigos.splice(indiceAleatorio, 1); // Funcionalidad extra: Eliminar el amigo sorteado del array

    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`; // Mostrar el nombre del amigo sorteado

    listaAmigo(); // Llamar a la función para mostrar la lista de nombres
}