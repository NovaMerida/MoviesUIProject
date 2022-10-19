const button = document.getElementById('button');
const row_body = document.getElementById('row-body');
const input =document.getElementById('movie_search');




const createElements = (x) => {
    var col = document.createElement('div');
    col.className = 'col s3 m3';

    let card = document.createElement('div');
    card.className = 'card';
    col.appendChild(card);

    let cardImage = document.createElement('div');
    cardImage.className = 'card-image';
    card.appendChild(cardImage);

    let img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w1280${x.poster_path}`;            
    cardImage.appendChild(img);

    let overlay = document.createElement('div');
    overlay.className="overlay";
    col.appendChild(overlay);

    let overlay2 = document.createElement('div');
    overlay2.className="overlay2";
    col.appendChild(overlay2);

    let text = document.createElement('div');
    text.className = 'text'
    text.innerHTML = `<h5>${x.original_title}</h5>`
    overlay.appendChild(text);
    row_body.appendChild(col);
    
    


    
}




const getMovies=() =>{
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=${Math.floor(Math.random() * 100) + 1}`)
    .then(response => response.json())
    .then(data =>{ 
        data.results.forEach(element => {
            createElements(element)
        });
        setTimeout(() => {
            document.getElementById('lds-roller').style = "display:none";
        }, 10000);
    
    });

}

const fetchName=()=>{
    let value = input.value;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="${value}`)
    .then(response => response.json())
    .then(shows=>{
        row_body.innerHTML="";
        shows.results.forEach(element => {
            createElements(element)
        });

       
    })}

    input.addEventListener("keyup", function(event) {
        console.log(event.key)
        if(event.keyCode >= 48 && event.keyCode <= 90) {
            document.getElementById('key').innerHTML = event.key
        }        
        if (event.keyCode === 13) {
         event.preventDefault();
         fetchName()
        }
      });

  


    window.onload = function() {
        getMovies()
      };