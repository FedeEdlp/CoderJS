let sala;

while(true) {
    sala = prompt("Buenas! Por favor seleccione el color de la sala por la que quiere consultar:\nVioleta: de 45 días a 1 años \nAmarilla: de 1 a 2 años\nVerde: de 2 a 3 años ")

    if (sala.toLowerCase() === "violeta" || sala.toLowerCase() === "amarilla" || sala.toLowerCase() === "verde"){
        break;
    } else{
        alert("Por favor, seleccione una opción correcta")
    }
}
console.log(sala)

let horas;

while(true) {
    horas = parseInt(prompt("Coloque la cantidad de horas que asistira su hijo/a \n(mínimo 3hs, máximo 7hs)"))

    if (horas >= 3 && horas <= 7){
        break;
    } else {
        alert("Por favor, selecciones una opción correcta")
    }
};

console.log(horas);

const matricula = 7000;

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
}

alert ("La sala seleccionada " + sala.toLowerCase() + ", cantidad de horas " + horas + ". Su cuota mensual es de $"+ cotizador(sala,horas) + "y el costo de la matricula anual $"+ matricula + ". Gracias por su consulta");

