let nombre = prompt("Ingrese su nombre: ");
let born = prompt("Ingrese su año de nacimiento: ");
let city = prompt("Ingrese su ciudad: ");

// Crear un nuevo objeto Date para la fecha y hora actual
const fechaActual = new Date();

// Usar getFullYear() para obtener el año
const año = fechaActual.getFullYear();

if ((año - born) > 0 && (año - born) < 18){
    alert(`${nombre} usted tiene ${(año - born)} años y es menor de edad`)
} else {
    alert(`${nombre} usted tiene ${(año - born)} años y es mayor de edad`)
}