/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let marca;
  let precio;
  let peso;
  let tipo;
  let continuar;
  let liqMasCaro;
  let liqPrecioCaro;
  let solMasBarato;
  let solPrecioBarato;

  let acumuladorPeso = 0;
  let flagLiq = 0;
  let flagSol = 0;

  do{
    marca = prompt("Ingresar nombre de la marca");
       
    precio = parseFloat(prompt("Ingresar precio"));
    while(!(precio > 0)){
      precio = parseFloat(prompt("Error, Ingresar precio mayor a cero"));
		}

    peso = parseFloat(prompt("Ingresar peso en Kg"));
    while(!(peso > 0)){
			peso = parseFloat(prompt("Error. Ingresar peso en Kg mayor a cero"));
		}
    acumuladorPeso+= peso;

    tipo = prompt("Ingresar tipo: sólido o líquido");
    while(!(tipo == "sólido" || tipo == "líquido")){
      tipo = prompt("Error. Ingresar tipo: sólido o líquido");
    }

   if(flagLiq == 0 && tipo == "líquido"){
      flagLiq = 1;
      liqMasCaro = marca;
      liqPrecioCaro = precio;

    }
    else{
      if(precio >  liqPrecioCaro){
        liqMasCaro = marca;
        liqPrecioCaro = precio;
      }
    }

    if(flagSol == 0 && tipo == "sólido"){
      flagSol = 1;
      solMasBarato = marca;
      solPrecioBarato = precio;
    }
    else{
      if(precio < solPrecioBarato){
        solMasBarato = marca;
        solPrecioBarato = precio;
      }
    }

    continuar = prompt("Desea Ingresar otro producto?");
  }while(continuar == 's');

  console.log(`el peso total de la compra es ${acumuladorPeso},
  \nla marca del líquido más caro es ${liqMasCaro},
  \nla marca del sólido más barato es ${solMasBarato}`);
    
}
