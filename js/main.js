 const button = document.querySelector('.bouton')
 const text = document.querySelector('.texte')



function blague(){
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => text.innerHTML = data.quote)

}

 button.addEventListener('click', blague)


 //fetch('https://api.kanye.rest')
    // .then(res => res.json())
    // .then(json => console.log(json))
 //text.innerHTML= (json);
 // .then(json => console.log(json))