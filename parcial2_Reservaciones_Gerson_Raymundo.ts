// Nombre: Gerson Odir Raymundo Sanchez

interface Reservacion {
    id: number;
    cliente: string;
    personas: number;
    zona: string;
}

let reservaciones: Reservacion[] = [
    {
        id: 1,
        cliente: "Carlos",
        personas: 2,
        zona: "Interior"
    },
    {
        id: 2,
        cliente: "Maria",
        personas: 6,
        zona: "Terraza"
    },
    {
        id: 3,
        cliente: "Jose",
        personas: 5,
        zona: "Interior"
    },
    {
        id: 4,
        cliente: "Ana",
        personas: 3,
        zona: "Terraza"
    }
];

console.log("Reservaciones iniciales:");
console.log(reservaciones);

reservaciones.push({
    id: 5,
    cliente: "Pedro",
    personas: 4,
    zona: "Interior"
});

reservaciones.unshift({
    id: 6,
    cliente: "Sofia",
    personas: 7,
    zona: "Terraza"
});

console.log("Lista antes de atender:");
console.log(reservaciones);

function atenderReservacion(lista: Reservacion[]): void {
    let atendida = lista.shift();

    if (atendida) {
        console.log("Cliente atendido:", atendida.cliente);
        console.log("Cantidad de personas:", atendida.personas);
    } else {
        console.log("No hay reservaciones pendientes.");
    }
}

atenderReservacion(reservaciones);

let listaVacia: Reservacion[] = [];
atenderReservacion(listaVacia);

let encontrada = reservaciones.find(
    reservacion => reservacion.id === 2
);

if (encontrada) {
    console.log("Reservacion encontrada:");
    console.log(encontrada);
} else {
    console.log("No se encontro la reservacion.");
}

let noEncontrada = reservaciones.find(
    reservacion => reservacion.id === 99
);

if (noEncontrada) {
    console.log(noEncontrada);
} else {
    console.log("No existe una reservacion con ese ID.");
}

let cantidadAntes = reservaciones.length;

let reservacionesTerraza = reservaciones.filter(
    reservacion => reservacion.zona === "Terraza" &&
    reservacion.personas >= 5
);

console.log("Reservaciones de terraza para grupos grandes:");

if (reservacionesTerraza.length > 0) {
    console.log(reservacionesTerraza);
} else {
    console.log("No hay reservaciones que cumplan las condiciones.");
}

let cantidadDespues = reservaciones.length;

console.log("Reservaciones pendientes:");
console.log(reservaciones);

console.log("Cantidad antes del filtro:", cantidadAntes);
console.log("Cantidad despues del filtro:", cantidadDespues);
console.log("Cantidad de coincidencias:", reservacionesTerraza.length);
console.log("Total de reservaciones pendientes:", reservaciones.length);