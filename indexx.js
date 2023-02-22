window.addEventListener("DOMContentLoaded",function(){
    let imagen = document.createElement('img');
    let contenedor = document.querySelector('#contenedor')
        contenedor.className="contenedor";
        
    let boton = document.createElement('button');
        boton.textContent="IMAGEN";    
        boton.addEventListener('click', mostrar);


        contenedor.append(boton);
        contenedor.append(imagen);


})

function mostrar(){
        let imagen = document.querySelector('img');
        let boton = document.querySelector('button');
        imagen.src ='../imagen1.jpg';
        contenedor.append(imagen);
        boton.hidden=true;
        //document.addEventListener('click',moverTeclas); //tenía puesto la función a imagen, con lo que tenía que hacer click primero en la foto
        //en este caso, poniendo la acción directamente al documento, funciona directamente, una vez aprieto el botón.
        imagen = document.querySelector('img');

        const imagenes = [
            '../imagen1.jpg',
            '../imagen2.jpg',
            '../imagen3.jpg',
            '../imagen4.jpg',
            '../imagen5.jpg',
            '../imagen6.jpg'
            
          ];
      
          let currentImage = 0;
          document.addEventListener('keydown', 
            (event) => {
              if (event.code === 'ArrowRight') {
                currentImage = (currentImage + 1) % imagenes.length; 
              } else if (event.code === 'ArrowLeft') {
                currentImage = (currentImage + imagenes.length - 1) % imagenes.length;
              }
              imagen.src = imagenes[currentImage];
            }
          );
}

function moverTeclas(){
    let imagen = document.querySelector('img');

    const imagenes = [
        '../imagen1.jpg',
        '../imagen2.jpg',
        '../imagen3.jpg',
        '../imagen4.jpg',
        '../imagen5.jpg',
        '../imagen6.jpg'
        
     ];
  
     let currentImage = 0;
     document.addEventListener('keydown', 
     (event) => {
        if (event.code === 'ArrowRight') {
          currentImage = (currentImage + 1) % imagenes.length; 
        } else if (event.code === 'ArrowLeft') {
          currentImage = (currentImage + imagenes.length - 1) % imagenes.length;
        }
        imagen.src = imagenes[currentImage];
     }
  ); //esta función me costó mucho, ya que con event.key no conseguía que me recorriese bien el array de imágenes
}