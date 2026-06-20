let cerrar = false;
const numVentas = 6;

do {    
    let introIngreso=prompt(`¿Tuviste ventas?:
            1- Sí
            2- No
        `);

    if(introIngreso=="1"){
        console.log("Calculando ventas"); 
    
        const sema1dia1=prompt("Ventas día 1, semana 1");
        const sema1dia2=prompt("Ventas día 2, semana 1");
        const sema1dia3=prompt("Ventas día 3, semana 1");
        const sema2dia1=prompt("Ventas día 1, semana 2");
        const sema2dia2=prompt("Ventas día 2, semana 2");
        const sema2dia3=prompt("Ventas día 3, semana 2");

        const sumaVentas = parseInt(sema1dia1) + parseInt(sema1dia2) + parseInt(sema1dia3) + parseInt(sema2dia1) + parseInt(sema2dia2) + parseInt(sema2dia3);

        const promVentas = sumaVentas / numVentas;

        alert(`La suma de ventas es ${sumaVentas}. Promedio de ventas es ${promVentas}`)
    }else if(introIngreso =="2"){
        alert(`No se han ingresado datos`);
        console.log("No se han ingresado datos");       
    }else{
        alert(`Dato no válido`);
        break;
    }
}while (!cerrar)






let ventas = [
  [55000, 74000, 60500, 60000, 80000],   // semana 1
  [67000, 58500, 90000, 76500, 60000]    // semana 2
];
let total = 0;

for (let nroSemana = 0; nroSemana < ventas.length; nroSemana++) {
       
    const semana = ventas[nroSemana];
    console.log(`semana: ${nroSemana+1} (indice:${nroSemana})`);
    
    for (let nroDia = 0; nroDia < semana.length; nroDia++) {
        
        const dia = semana[nroDia];
       // console.log(`dia: ${nroDia+1} (indice: ${nroDia}) = ${dia}`);
        console.log(`dia: ${nroDia+1} (indice: ${nroDia}) = ${ventas[nroSemana][nroDia]}`);

       // total+= dia;

        total += ventas[nroSemana][nroDia]
    }
}

//console.log("Total Vendido",total);