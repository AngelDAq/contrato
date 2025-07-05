function saludar() {
    return "¡Hola, mundo!";
}




function mostrarMensajes() {
    console.log("Mensaje 1");
    console.log("Mensaje 2");
    console.log("Mensaje 3");
}

function sumar() {
    return 2 + 2;
}
//module.exports.mostrarMensajes = mostrarMensajes;
//module.exports.saludar = saludar;


module.exports ={
    mostrarMensajes : mostrarMensajes,
    saludar : saludar,
    sumar : sumar
}

