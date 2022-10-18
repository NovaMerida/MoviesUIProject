fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game', {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7b430f5ba3mshb7b745dee2cd464p1421ffjsn528b8849f571',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
})
.then(response => response.json())
.then(data => {
    const list = data.d;

    list.map((item) => {
        const name = item.l;
        const poster = item.i.imageUrl;
        const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
        document.querySelector('.movies').innerHTML += movie
    })
})
.catch(err => {
    console.error(err);
});

/*Action Movies*/
fetch('https://imdb8.p.rapidapi.com/auto-complete?q=action', {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7b430f5ba3mshb7b745dee2cd464p1421ffjsn528b8849f571',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
})
.then(response => response.json())
.then(data => {
    const list = data.d;

    list.map((item) => {
        const name = item.l;
        const poster = item.i.imageUrl;
        const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
        document.querySelector('.movies').innerHTML += movie
    })
})
.catch(err => {
    console.error(err);
});
