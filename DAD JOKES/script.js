const button = document.querySelector('.container button')
const jokeText = document.querySelector('.container p')
document.addEventListener('DOMContentLoaded',getJoke)//replace the lorem text

button.addEventListener('click',getJoke)



  function getJoke(){
   const jokeData =  fetch('https://icanhazdadjoke.com/' , {
       headers:{
           'accept':  'application/json'
       }
   }).then(res => res.json()) // parse response as JSON
   .then(data => jokeText.innerHTML = data.joke)
     
   
}