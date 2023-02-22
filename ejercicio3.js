//#---) para id   .----->clases
//si no sabemos como coger un dato, ponemos console.dir() y buscamos en los atributos. El lo usa en un select, donde para coger el valor, selecciiona y con el 
//console, ve que en value aparece el dato que quería,con lo que ya sabe como coger ese dato.
//con esto aprendemos que en un campo select como en un campo input--->VALUE da la opcion selecionada
window.addEventListener('DOMContentLoaded', function () {


    let contenedor = document.createElement('div');
        contenedor.className = 'contenedor';
    let comprobar = document.createElement('button');
        comprobar.textContent = "COMPROBAR";
        comprobar.className="comprobar";
    let resultado = document.createElement('div');
        resultado.className="resultado";

    let limpiar = document.createElement('button');
        limpiar.textContent = "LIMPIAR";
        limpiar.classList.add('limpiar');
    let tabla = document.createElement('table');
        tabla.classList.add('tabla');
    let label = document.createElement('label');
        label.append(comprobar);
        label.append(resultado);


    //---------------------------------//
    document.body.append(contenedor);

    //tabla:

    for (let x = 0; x < 14; x++) {

        let fila = tabla.insertRow();
        let boton1 = fila.insertCell();
        //boton1.id="boton1";
        let boton2 = fila.insertCell();
        //boton2.id="boton2";
        let boton3 = fila.insertCell();
        //boton3.id="boton3";
        boton1.innerHTML = "<button class='colorBoton' fila='" + x + "'>1</button>"; //almacenamos el número de fila en el botón
        boton2.innerHTML = "<button class='colorBoton' fila='" + x + "'>X</button>";
        boton3.innerHTML = "<button class='colorBoton' fila='" + x + "'>2</button>";


        let totalbotones = document.querySelectorAll('.colorBoton');


        for (let x = 0; x < totalbotones.length; x++) {
            totalbotones[x].addEventListener('click', function(){
                let filaActual = this.getAttribute("fila");
                //console.log(filaActual)
                
                let botones = document.querySelectorAll(".colorBoton[fila='" + filaActual + "']");
                for(let i=0;i<botones.length;i++){
                    botones[i].style.backgroundColor="";
                }
                //console.log(botonesSeleccionados[0])
                this.style.backgroundColor = "green";
                
              });
          }
        contenedor.append(label);
        contenedor.append(limpiar);
        contenedor.append('\n')
        contenedor.append(tabla);

    }

    //funcion limpiar:


    limpiar.addEventListener('click',function(){
        let botonesSeleccionados = document.querySelectorAll(".colorBoton[style='background-color: green;']") //seleccionamos todos los que estén en verde
        let resultado = document.querySelector('.resultado');
        console.log(botonesSeleccionados)
        for(let x =0;x<botonesSeleccionados.length;x++){

            botonesSeleccionados[x].style.backgroundColor="" //les cambiamos el color al original(sin color)
        }
        resultado.textContent=""; //limpio el contenido de resultado
    })


    //añadimos la funcion de mostrar al boton de comprobar,ya que los mostaremos y comprobaremos a la vez
    comprobar.addEventListener('click',mostrar);

});

//funcion resultado:
function mostrar(){

    let resultado = document.querySelector('.resultado');
    let clave = resultado.textContent;   
    let botonesSeleccionados = document.querySelectorAll(".colorBoton[style='background-color: green;']")
    let arrayBotones = [];
    let expresion = /^[A-Za-z0-9]{14}/;
    //resultado.textContent="hola";
    console.log(resultado)
    for(let x =0;x<botonesSeleccionados.length;x++){

        arrayBotones.push(botonesSeleccionados[x].innerText);
        
        //console.log(arrayBotones.toString());
        //console.log(arrayBotones.join(""));
        
        clave = arrayBotones.join("");
        //console.log(clave)
        resultado.textContent=clave;
        
    }
    let clave2 = expresion.exec(clave);
        
            if(clave2==11111111111111){
                alert("ha ganado la quiniela");
                
                           
        }else if(!expresion.exec(clave2)){

            alert("Debe introducir 14 dígitos");
            
        }else{
            alert("Contraseña incorrecta");
        }
    

}

//errores preguntas: porque la funciona comprobar va con el input de resultado. Porque se marca mas de un cuadrado en verde













