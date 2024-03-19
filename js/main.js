const info = [];
let nombre;
let sala;
let horas;
const matricula = 7000;

do {
    nombre = prompt("Bienvenida/o a nuestro cotizador de cuota para el maternal Abracadabra, la magía de los primeros años.\n Para iniciar la consulta le vamos a pedir su nombre por favor ");
}while(nombre === "" || nombre.length <= 2);

info.push("Nombre: " + nombre)

while(true) {
    sala = prompt("A continuación podrá ver la salas, según la edad por la que quiera consultar, dependiendo la edad de su hija/o \nPor favor escriba solamente el color de la sala por la que quiere consultar:\n\nDe 45 días a 1 año: Sala Violeta\n\nDe 1 a 2 años: Sala Amarilla\n\nDe 2 a 3 años: Sala Verde")

    if (sala.toLowerCase() === "violeta" || sala.toLowerCase() === "amarilla" || sala.toLowerCase() === "verde"){
        break;
    } else{
        alert("Por favor, seleccione una opción correcta")
    }
}
console.log(sala)
info.push("Sala seleccionada: " + sala);

while(true) {
    horas = parseInt(prompt("Coloque la cantidad de horas que asistira su hijo/a al establecimiento\nEl mínimo de horas permitidas son 3 horas y el máximo 7 horas\n\nPor ejemplo, en caso de asisitir 4 horas, ingrese: 4, en caso de asisitir 6 horas ingrese: 6"))

    if (horas >= 3 && horas <= 7){
        break;
    } else {
        alert("Por favor, selecciones una opción correcta")
    }
};

console.log(horas);
info.push("Cantidad de horas: " + horas);


function cotizador(sala, horas){
    if (sala.toLowerCase() == "violeta") {
        return 8000 * horas
    }

    else if(sala.toLowerCase() == "amarilla"){
        return 6500 * horas
    }

    else{
        return 7000 * horas
    }
};

alert("Datos ingresado\n" + info.join("\n") + "\n\nGracias " + nombre + " por su consulta. \n\nSu cuota mensual es de $" + cotizador(sala, horas) + " y el costo de la matrícula anual $" + matricula + ". \n\nEn caso de seguir con interes en conocer las intalaciones, a continuación deje los datos de contacto y a la brevedad nos comunicaremos para coordinar una reunión. En caso contrario aprete la opción 'cancelar. \n\nSaludos Abracadabra");

let telefono;
let dia;

while(true) {
    telefono = prompt("En caso de querer que nos contactemos, ingrese su numero celular sin 0 ni 15")

    if (!isNaN(telefono) && telefono.length <= 11 || telefono.length >=9) {
        break;
    } else {
        alert("Por favor, ingrese un número válido")
    }
};

while(true) {
    dia = prompt("En caso de querer coordinar una visita selecione en que día de la semana cuenta con disponibilidad:\n\n-Lunes.\n\n-Martes.\n\n-Miercoles.\n\n-Jueves.\n\n-Viernes")

    if (dia.toLowerCase() == "lunes" || dia.toLowerCase() == "martes" || dia.toLowerCase() == "miercoles" || dia.toLowerCase() == "jueves" || dia.toLowerCase() == "viernes" ) {
        break;
    } else {
        alert("Por favor, ingrese un día válido")
    }
};

let consulta = {
    nombreConsulta : nombre,
    telefonoConsulta : telefono,
    diaVisita : dia};

console.log(consulta);

alert("Gracias! Nos pondremos en contacto lo antes posible.\nSaludos Abracadabra!")

