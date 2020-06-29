// Variables
const ListaTweets = document.getElementById('lista-tweets');





// Event Listeners

eventListeners();

function eventListeners() {
    // Cuando se envia al formulario
    document.querySelector('#formulario').addEventListener('submit',
    agregarTweet);

    // Borrar Tweets
    ListaTweets.addEventListener('click', borrarTweet);

}


// Funciones 

    // Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    
    // Leer el valor del textarea 
    const tweet = document.getElementById('tweet').value;
    
    // Creando boton de eliminar 
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet'
    botonBorrar.innerText = 'X';

    // Crear elemento 
    const li = document.createElement('li');
    li.innerText = tweet;

    // Añadir el boton de borrar
    li.appendChild(botonBorrar);

    // Añadir el tweet a la lista
    ListaTweets.appendChild(li);
    
    // Añadir a Local Storsge  
    agregarTweetLocalStorage(tweet);

}

   

     // Eliminar el tweet del DOM
function borrarTweet(e) {
    e.preventDefault();
    if(e.target.className === 'borrar-tweet') {
        console.log(e.target.parentElement.remove() );
        alert('Quieres eliminar este Tweet');
    }
    
}
    // Agregar tweet a Local Storsge 
    function agregarTweetLocalStorage(tweet) {
        let tweets;
        tweets = ObtenerTweetsLocalStorage();
        // Añadir el nuevo tweet
        tweets.push(tweet);
        // Comvertir de stringa a arreglo para Local Storage
        localStorage.setItem('tweets', JSON.stringify(tweets) );  
        
    }

    // Obtener Local Storsge 
    function ObtenerTweetsLocalStorage() {
        let tweets;
        // Revisamos los valores de Local Storsge 
        if(localStorage.getItem('tweets') == null) {
            tweets = [];
        } else {
            tweets = JSON.parse(localStorage.getItem('tweets') );
        }
        return tweets;
    }