document.addEventListener('DOMContentLoaded', () => {
    var container = document.getElementById('grid');
    for(var i=0; i<200; i++) {
        container.innerHTML += `<div class="box"></div>`;
    }

    //getting variables for the grid and each individual square
    const grid = document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));
    const width = 10;


})