let nombre = prompt("Ingrese su nombre:");
let born = prompt("Ingrese su año de nacimiento:");

born = Number(born);

const fechaActual = new Date();
const año = fechaActual.getFullYear();

if (isNaN(born) || born < 1900 || born > año) {
    alert("Error: Por favor, ingresa un año de nacimiento válido (mayor a 1900).");
} else {
    const edad = año - born;

    if (edad < 18) {
        alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
    } else {
        alert(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
    }
}