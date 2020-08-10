/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexoTit;
	let lugar;
	let temporada;
	let cantidadPers;
	let continuar;
	let lugarMasElegido;
	let sexoMasPasajero;
	let masPasajeros;

	let contadorBari = 0;
	let contadorCata = 0;
	let contadorSalta = 0;
	let flagMasPasajeros = 0;
	let contadorInvierno = 0;
	let acumuladorPersonasInv = 0;

	do{
		sexoTit = prompt("Ingrese sexo del titular: ");
		while(!(sexoTit == 'f' || sexoTit == 'm')){
			sexoTit = prompt("Ingrese sexo: 'f' o 'm' ");
		}

		lugar = prompt("Ingrese lugar: bariloche, cataratas o salta ");
		while(!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta")){
			lugar = prompt("Error. Ingrese lugar: bariloche”, cataratas o salta ");
		}

		temporada = prompt("Ingrese lugar: otoño, invierno, verano o primavera");
		while(!(temporada == "otoño" || temporada == "invierno" || temporada == "verano" || temporada == "primavera")){
			temporada = prompt("Error. Ingrese lugar: otoño, invierno, verano o primavera");;
		}

		cantidadPers = parseInt(prompt("Ingrese cantidad de personas"));
		while(!(cantidadPers > 0)){
			cantidadPers = parseInt(prompt("Error. Ingrese cantidad de personas"));
		}

		if(lugar == "bariloche"){
			contadorBari++;
		}
		else if(lugar == "cataratas" ){
			contadorCata++;
		}
		else{
			contadorSalta++;
		}

		if(flagMasPasajeros == 0){
			flagMasPasajeros = 1;
			sexoMasPasajero = sexoTit;
			masPasajeros = cantidadPers;
		}
		else{
			if(cantidadPers > masPasajeros){
				sexoMasPasajero = sexoTit;
				masPasajeros = cantidadPers;
			}
		}

		if(temporada == "invierno"){
			contadorInvierno++;
			acumuladorPersonasInv+= cantidadPers;
		}


		continuar = prompt("Desea Ingresar otro producto?");
	}while(continuar == 's');


	if(contadorBari > contadorCata && contadorBari > contadorSalta){
		lugarMasElegido = "bariloche";
	}
	else if(contadorCata > contadorSalta && contadorCata >= contadorBari){
		lugarMasElegido = "cataratas";
	}
	else{
		lugarMasElegido = "salta";
	}

	console.log(`El lugar más elegido es: ${lugarMasElegido},
	\ny el sexo del titular que lleva más pasajeros es: ${sexoMasPasajero},
	\ny el promedio de personas que viajan en invierno es: ${acumuladorPersonasInv / contadorInvierno}`);
}
