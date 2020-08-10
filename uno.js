/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let peso;
	let hombreMasPesado;
	let hombrePeso;

    let contadorFemenino = 0;
    let acumuladorEdad = 0;
    let flagHombre = 0;
    


    for( i = 0; i < 5 ; i++){

        nombre = prompt("Ingrese nombre: ");
        

		peso = parseInt(prompt("Ingrese peso: "));
		while(!(peso > 0)){
			peso = parseInt(prompt("Error. Ingrese peso mayor a cero: "));
		}

        edad = parseInt(prompt("Ingrese edad: "));
		acumuladorEdad+= edad;
		while(!(edad > 0)){
			edad = parseInt(prompt("Error. Ingrese edad mayor a cero: "));
		}

		sexo = prompt("Ingrese sexo: ");
		while(!(sexo == 'f' || sexo == 'm')){
			sexo = prompt("Ingrese sexo: 'f' o 'm' ");
		}

        if(sexo == 'f'){
            contadorFemenino++;
        }
        

        if(flagHombre == 0 && sexo == 'm'){
            flagHombre = 1;
            hombreMasPesado = nombre;
            hombrePeso = peso;

        }
        else{
            if(peso > hombrePeso && sexo == 'm'){
				hombreMasPesado = nombre;
				hombrePeso = peso;
            }
        }

    }

    console.log(`Cantidad de feminos es ${contadorFemenino},
	\nla edad promedio en total es: ${acumuladorEdad / 5 },
	\ny el hombre más pesado es  ${hombreMasPesado}`);
}
