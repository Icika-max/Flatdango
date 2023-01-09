const films = document.getElementById('films')
const poster = document.getElementById('poster')
const title = document.getElementById('title')
const runtime = document.getElementById('runtime')
const showtime = document.getElementById('showtime')
const description = document.getElementById('film-info')
const ticketSpan = document.getElementById('ticket-num')



// request();
const url = 'http://localhost:3000/films/8'
document.addEventListener("DOMContentLoaded", () => {
  const fetchTitle = fetch("http://localhost:3000/films")
  fetchTitle.then(response => response.json()).then(data => list(data))

  function list(data){
    const mov1 = document.createElement('h5')
    mov1.textContent = data[0].title

    films.appendChild(mov1)
    mov1.addEventListener('click', ()=>{
      poster.src = data[0].poster
      title.textContent = data[0].title
      runtime.textContent = data[0].runtime
      showtime.textContent = data[0].showtime
      showtime.textContent = data[0].showtime
      description.textContent = data[0].description
      ticketSpan.textContent = (data[0].capacity - data[0].tickets_sold)
    })

    // movi 2
    const mov2 = document.createElement('h5')
    mov2.textContent = data[1].title

    films.appendChild(mov2)
    mov2.addEventListener('click', ()=>{
      poster.src = data[1].poster
      title.textContent = data[1].title
      runtime.textContent = data[1].runtime
      showtime.textContent = data[1].showtime
      description.textContent = data[1].description
      ticketSpan.textContent = (data[1].capacity - data[1].tickets_sold)
    })
    const mov3 = document.createElement('h5')
    mov3.textContent = data[2].title

    films.appendChild(mov3)
    mov3.addEventListener('click', ()=>{
      poster.src = data[2].poster
      title.textContent = data[2].title
      runtime.textContent = data[2].runtime
      showtime.textContent = data[2].showtime
      description.textContent = data[2].description
      ticketSpan.textContent = (data[2].capacity - data[2].tickets_sold)
    })
    const mov4 = document.createElement('h5')
    mov4.textContent = data[3].title

    films.appendChild(mov4)
    mov4.addEventListener('click', ()=>{
      poster.src = data[3].poster
      title.textContent = data[3].title
      runtime.textContent = data[3].runtime
      showtime.textContent = data[3].showtime
      description.textContent = data[3].description
      ticketSpan.textContent = (data[3].capacity - data[3].tickets_sold)

    })

    const mov5 = document.createElement('h5')
    mov5.textContent = data[4].title

    films.appendChild(mov5)
    mov5.addEventListener('click', ()=>{
      poster.src = data[4].poster
      title.textContent = data[4].title
      runtime.textContent = data[4].runtime
      showtime.textContent = data[4].showtime
      description.textContent = data[4].description
      ticketSpan.textContent = data[4].ticketSpan
      ticketSpan.textContent = (data[4].capacity - data[4].tickets_sold)
    })

    const mov6 = document.createElement('h5')
    mov6.textContent = data[5].title

    films.appendChild(mov6)
    mov6.addEventListener('click', ()=>{
      poster.src = data[5].poster
      title.textContent = data[5].title
      runtime.textContent = data[5].runtime
      showtime.textContent = data[5].showtime
      description.textContent = data[5].description
      ticketSpan.textContent = data[5].ticketSpan
      ticketSpan.textContent = (data[5].capacity - data[5].tickets_sold)

    })
    const mov7 = document.createElement('h5')
    mov7.textContent = data[6].title

    films.appendChild(mov7)
    mov7.addEventListener('click', ()=>{
      poster.src = data[6].poster
      title.textContent = data[6].title
      runtime.textContent = data[6].runtime
      showtime.textContent = data[6].showtime
      description.textContent = data[6].description
      ticketSpan.textContent = data[6].ticketSpan
      ticketSpan.textContent = (data[6].capacity - data[6].tickets_sold)
    })
    const mov8 = document.createElement('h5')
    mov8.textContent = data[7].title

    films.appendChild(mov8)
    mov8.addEventListener('click', ()=>{
      poster.src = data[7].poster
      title.textContent = data[7].title
      runtime.textContent = data[7].runtime
      showtime.textContent = data[7].showtime
      description.textContent = data[7].description
      ticketSpan.textContent = data[7].ticketSpan
      ticketSpan.textContent = (data[7].capacity - data[7].tickets_sold)
    })
    const mov9 = document.createElement('h5')
    mov9.textContent = data[8].title

    films.appendChild(mov9)
    mov9.addEventListener('click', ()=>{
      poster.src = data[8].poster
      title.textContent = data[8].title
      runtime.textContent = data[8].runtime
      showtime.textContent = data[8].showtime
      description.textContent = data[8].description
      ticketSpan.textContent = data[8].ticketSpan
      ticketSpan.textContent = (data[8].capacity - data[8].tickets_sold)
    })
    const mov10 = document.createElement('h5')
    mov10.textContent = data[9].title

    films.appendChild(mov10)
    mov10.addEventListener('click', ()=>{
      poster.src = data[9].poster
      title.textContent = data[9].title
      runtime.textContent = data[9].runtime
      showtime.textContent = data[9].showtime
      description.textContent = data[9].description
      ticketSpan.textContent = data[9].ticketSpan
      ticketSpan.textContent = (data[9].capacity - data[9].tickets_sold)
    })
    const mov11 = document.createElement('h5')
    mov11.textContent = data[10].title

    films.appendChild(mov11)
    mov11.addEventListener('click', ()=>{
      poster.src = data[10].poster
      title.textContent = data[10].title
      runtime.textContent = data[10].runtime
      showtime.textContent = data[10].showtime
      description.textContent = data[10].description
      ticketSpan.textContent = data[10].ticketSpan
      //ticketSpan.textContent = (data[10].capacity - data[10].tickets_sold)
    })
    const mov12 = document.createElement('h5')
    mov12.textContent = data[11].title

    films.appendChild(mov12)
    mov12.addEventListener('click', ()=>{
      poster.src = data[11].poster
      title.textContent = data[11].title
      runtime.textContent = data[11].runtime
      showtime.textContent = data[11].showtime
      description.textContent = data[11].description
      ticketSpan.textContent = data[11].ticketSpan
      ticketSpan.textContent = (data[11].capacity - data[11].tickets_sold)
    })
    const mov13 = document.createElement('h5')
    mov13.textContent = data[12].title

    films.appendChild(mov13)
    mov13.addEventListener('click', ()=>{
      poster.src = data[12].poster
      title.textContent = data[12].title
      runtime.textContent = data[12].runtime
      showtime.textContent = data[12].showtime
      description.textContent = data[12].description
      ticketSpan.textContent = data[12].ticketSpan
      ticketSpan.textContent = (data[12].capacity - data[12].tickets_sold)
    })
    const mov14 = document.createElement('h5')
    mov14.textContent = data[13].title

    films.appendChild(mov14)
    mov14.addEventListener('click', ()=>{
      poster.src = data[13].poster
      title.textContent = data[13].title
      runtime.textContent = data[13].runtime
      showtime.textContent = data[13].showtime
      description.textContent = data[13].description
      ticketSpan.textContent = data[13].ticketSpan
      ticketSpan.textContent = (data[13].capacity - data[13].tickets_sold)
    })
    const mov15 = document.createElement('h5')
    mov15.textContent = data[14].title

    films.appendChild(mov15)
    mov15.addEventListener('click', ()=>{
      poster.src = data[14].poster
      title.textContent = data[14].title
      runtime.textContent = data[14].runtime
      showtime.textContent = data[14].showtime
      description.textContent = data[14].description
      ticketSpan.textContent = data[14].ticketSpan
      ticketSpan.textContent = (data[14].capacity - data[14].tickets_sold)

    })

  }


    const fetchFirstFilm = () => {
      fetch(url)
     .then(response => response.json())
     .then(data => { renderFirstFilm(data) })
    }
     fetchFirstFilm();
})

const renderFirstFilm = (film) => {
    const poster = document.getElementById('poster')
    poster.src = film.poster



const title = document.getElementById("title")
title.innerText = film.title
const runtime = document.getElementById("runtime")
runtime.innerText = `${film.runtime} MINUTES`
const showtime = document.getElementById("showtime")
showtime.innerText = film.showtime
const description = document.getElementById('film-info')
description.innerText = film.description
//const ticketSpan = document.getElementById('ticket-num')
// tickets available would be film.capacity string minus film.tickets_sold
//const convertedCapacity = parseInt(film.capacity, 10)
//ticketSpan.innerText = convertedCapacity-film.tickets_sold

const button = document.querySelector('.ui.orange.button')
button.addEventListener('click', (e) => {
  if (ticketSpan.innerText <= 0){
     let buttonDiv = document.querySelector('.extra.content');
     buttonDiv.innerHTML = "<button>Sold Out</button>"
  }
  else {
     const tickets_sold = film.tickets_sold + 1
     let obj = {tickets_sold} //this has to be key:value pair
     updateTicketNum(obj)
  }
} )
const updateTicketNum = (obj) => {
    options = {
        method: 'PATCH',
        headers: {
           'content-type': 'application/json',
           'accept': 'application/json'
         },
    body: JSON.stringify(obj)
    }
    fetch((url), options)
    .then(response => response.json())
    .then(data => {
    renderFirstFilm(data)
    })
    }
  }