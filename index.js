

window.addEventListener('DOMContentLoaded', function () {

    let contenedor = document.querySelector('#contenedor')
        contenedor.className="contenedor";
    
    
    let boton = document.createElement('button');
    boton.textContent = "imagen";
    document.body.append(contenedor)
    contenedor.append(boton);

    

    boton.addEventListener("click", mostrar);

    //selecciones:
   

  
})

function mostrar(){
   /* let imagen1 = document.createElement('img');
    let imagen2 = document.createElement('img');
    let imagen3 = document.createElement('img');
    let boton = document.querySelector('button');
    boton.hidden=true;

    imagen1.src = "../imagen1.jpg";
    imagen2.src = "../imagen2.jpg";
    imagen3.src = "../imagen3.jpg";

    let imagenes = [imagen1,imagen2,imagen3];
    
    
    console.log(imagenes[1])
    contenedor.append(imagenes[0]);
           // console.log(Event)*/
          
          
          /* let foto = imagenes[0];
            imagenes.addEventListener('keydown', (event) => {
                var keyValue = event.key;
                var codeValue = event.code;
                console.log("keydown event, keyValue: " + keyValue);
                console.log("keydown event, codeValue: " + codeValue);
              }, false);*/
               

    

    

}