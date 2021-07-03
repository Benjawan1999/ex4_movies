import moviesCollection from './movies.json'
import Icon from './icon.json'

import './index.css'

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.getElementById('card')
    const movies = moviesCollection
    
    movies.forEach(movie => {
        let cardDOM = buildCardDOM(movie)
        cards.insertAdjacentHTML('beforeend', cardDOM)
    })
})

function buildCardDOM(movie) {

    let IconScore = ''
    let t = movie.tomatoScore
    if (t < 60) {
        IconScore += `<img class="icon" src="${Icon[0].img}" alt="#" />`
    }
    else if (t < 80) {
        IconScore += `<img class="icon" src="${Icon[1].img}" alt="#" />`
    } else {
        IconScore += `<img class="icon" src="${Icon[2].img}" alt="#" />`
    }
    
    return (
        `<div class="cards">
            <img src="${movie.posters.primary}" alt="">
            <h2 class="title">${movie.title}</h2>
            <h4 class="tomatoScore">${IconScore}${movie.tomatoScore}%</h4>
            <P class="dvdReleaseDate">${movie.dvdReleaseDate}</P>
        </div>`
    )
}
