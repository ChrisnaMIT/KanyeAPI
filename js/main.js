 let button = document.querySelector('.bouton')
 let text = document.querySelector('.texte')


 button.addEventListener('click', blague)


function blague(){
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(json => console.log(json))
        .then(data => text.innerHTML = data)

}


 //fetch('https://api.kanye.rest')
    // .then(res => res.json())
    // .then(json => console.log(json))
 //text.innerHTML= (json);