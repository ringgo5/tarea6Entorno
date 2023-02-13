//selecciones:

let contenedor = document.createElement('div');
let resultado = document.createElement('div');
let ultimosBotones = document.createElement('div');
    ultimosBotones.classList.add('ultimosBotones')
let boton1 = document.createElement('button');
    boton1.classList.add('boton1')
    boton1.textContent = "C";
    

let boton2 = document.createElement('div');
    boton2.classList.add('validar');
    boton2.textContent = "VALIDAR";
    ultimosBotones.append(boton1, boton2);
let tabla = document.createElement('table');
let cuerpoTabla = document.createElement('tbody');
let id = 1;
let resultados = []; // lo usaré para mostrar los números marcados;
resultados.maxLength = "8";

//clases:

resultado.classList.add('resultado');
contenedor.classList.add('contenedor');
//contenedor.textContent="hola";



//añadimos:

document.body.append(contenedor);
contenedor.prepend(resultado);

//Creamos la tabla:



for (let x = 0; x < 3; x++) {
    let columnas = document.createElement('tr');

    for (let y = 0; y < 3; y++) {
        let fila = document.createElement('td');
        let boton = document.createElement('button');
            boton.classList.add('boton');

        fila.append(boton);
        columnas.append(fila);
    }

    cuerpoTabla.append(columnas);
}

tabla.append(cuerpoTabla);
contenedor.append(tabla);
contenedor.append(ultimosBotones);

//selecciono aquí los botones, puesto que los creo arriba para darle los números: 

let botones = document.querySelectorAll('button');
    //console.log(botones);
let array = [1,2,3,4,5,6,7,8,9];
    array = array.sort(function() {return Math.random() - 0.5}); //convierto el array en otro array aleatorio sin repetir
    //console.log(array)
    //console.log(array[1])

for(let x=0;x<=botones.length -2;x++){  //recorro el array de botones y le agrego los números, ahora no se repiten.
    botones[x].textContent= array[x]    //Aquí tuve los mayores problemas, me costó mucho que no se repitiesen, probé varias fórmulas,
                                        //recorriendo dos bucles y al final me funcionó así.
}


//creamos el array que se mostrará en el input de arriba: 


for (let x = 0; x <= botones.length - 1; x++) {  
            let resultado = document.querySelector('.resultado');
                botones[x].addEventListener('click', function () { //añadimos la función de todos los botones
                    resultados.push(botones[x].textContent); //añado cada número que apriete
                    resultado.textContent = resultados.join(''); //junto el array en modo de cadena, para ver sólo números
        })
    

}

//funciones:

//funcion de C : 
boton1.addEventListener('click', function () {


        // console.log(resultado.textContent)
        //console.log(resultados)
        
    let numeros = parseInt(resultado.textContent);
    console.log(numeros);
    let numeros2 = String(numeros).split("").map((numeros) => {
        return Number(numeros)
    })//con esta funcion paso a Array el número
        numeros2.pop();//quitamos la ultima cifra
        numeros = numeros2.join('')
        console.log(numeros2)
        resultados= numeros2;
        resultado.textContent = numeros;
    //Este paso también me costó un poco de tiempo conseguirlo, después de muchos consol.log, pude arregrarlo
})

//funcion de validar : 

boton2.addEventListener('click', validar);

function validar(){

    let clave = document.querySelector('.resultado');
    let clave2 = clave.textContent;
    let expresion = /^(9){4}$/;
    //console.log(clave2.length)

    if(clave2.length ==4){
        if(clave2.match(expresion)){

            alert("Coincide.Perfecto")
            resultados = [];
            clave.textContent =""
        }else{
            alert("No ha introducido la contraseña correcta");
            resultados = [];
            clave.textContent =""
        }//reiniciamos tanto el array donde recogemos los números, como el input donde van apareciendo conforme los presiono.
        console.log(clave.textContent);
    }else{
        alert("debe introducir 4 cifras");
        resultados = [];//aquí también reinicio la clave
    }
resultados = []; //reiniciamos la clave
clave.textContent =""; //pongo en blanco de nuevo la caja de texto
}












