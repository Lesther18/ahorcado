 let palabrita;
 const palabras = [
    'logica',              /* 0 */
    'programa',           /* 1 */
    'computadora',       /* 2 */
    'proyecto',         /* 3 */
    'variable',        /* 4 */
    'funcion',        /* 5 */
    'ahorcado',       /* 6 */
    'game',         /* 7 */
    'programador', /* 8 */
    'valor',      /* 9 */
    'clase'      /* 10 */

 ];
 const btn = id('jugar');
 btn.addEventListener('click', iniciar);


 
 

  
    function iniciar(event){
      btn.disabled = true;


      const parrafo = id('palabra_a_adivinar');
      parrafo.innerHTML = '';

        const cant_palabras = palabras.length;
       
        const valor_al_azar = obtener_random(0, cant_palabras);


        palabrita = palabras [valor_al_azar];
        console.log(palabrita);
        const cant_letras = palabrita.length;

        for( let i = 0; i < cant_letras; i++){
        const span = document.createElement( 'span');
        parrafo.appendChild( span );

        }

    }

    const btn_letras = document.querySelectorAll("#letras button");
    for( let i = 0; i < btn_letras.length ; i++){
      btn_letras [ i ].addEventListener('click', click_letras);
    }

    function click_letras (event){
      const button = event.target; //cual de todas las letras llamó a la función.
      button.disabled = true;
      const letra = button.innerHTML.toLowerCase( );
      const palabra = palabrita.toLowerCase( ); //.toUpperCase ( )


      console.log(palabrita);

    }

    //minuto 44.35
   
