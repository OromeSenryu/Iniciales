// Preguntando nombre y apellido
let name = prompt('¿Cuál es tu nombre y apellido?');
// Obteniendo primera inicial
let firstInitial = name.slice(0, 1);
// Buscando posición de segundo caracter
let secondInitialPosition = name.indexOf(' ') +1;
// Obteniendo segunda inicial
let secondInitial = name.slice(secondInitialPosition, secondInitialPosition+1);
// Mostrando resultado en la web
document.write('Tus iniciales son: ' + firstInitial.toUpperCase() + secondInitial.toUpperCase());
