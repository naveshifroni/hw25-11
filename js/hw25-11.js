const url = "https://api.themoviedb.org/3/discover/movie?api_key=6a1e1063295d1b85aae220a56509c8b7&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

fetch(url)
    .then(res => res.json())
    .then(json => {
        for (let movie of json.results) {
            console.log(movie.title);
           
        }
    })
    .catch(e => {
        //if we got here, status is not 200 (200 = OK)
        alert(`Failed ${e}`)
    });


fetch('https://api.themoviedb.org/3/discover/movie?api_key=6a1e1063295d1b85aae220a56509c8b7&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&primary_release_year=2022&with_watch_monetization_types=flatrate')
    .then(res => res.json())
    .then(json => {
        for (let movie of json.results) {
            console.log(movie.title);
           
        }
    })
    .catch(e => {
        //if we got here, status is not 200 (200 = OK)
        alert(`Failed ${e}`)
    })

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=6a1e1063295d1b85aae220a56509c8b7&language=he-IL&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
    .then(res => res.json())
    .then(json => {
        for (let movie of json.results) {
            console.log(movie.title);
           
        }
    })
    .catch(e => {
        //if we got here, status is not 200 (200 = OK)
        alert(`Failed ${e}`)
    });

    const movies = document.getElementById('movies')

fetch('https://api.themoviedb.org/3/discover/movie?api_key=6a1e1063295d1b85aae220a56509c8b7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
    .then(res => res.json())
    .then(json => {
        console.log(json);
        const articles = json.results

        articles.map(a=>{
            const div = document.createElement('div')
            div.innerText = a.title
            movies.appendChild(div)
        })
        // //let a1 = articles[0]
        // for(let a of articles){
        //     console.log(a.title);
        //     console.log(a.url);
        //     console.log(a.urlToImage);
        // }
    })
    .catch(e => {
        console.log(e);
    })