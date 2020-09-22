document.addEventListener('DOMContentLoaded', () => {
    var container = document.getElementById('grid');
    for(var i=0; i<200; i++) {
        container.innerHTML += `<div class="box"></div>`;
    }
    for(var x=0; x<10; x++) {
        container.innerHTML += `<div class="taken"></div>`
    }

    //getting variables for the grid and each individual square
    const grid = document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));
    const width = 10;

    let timerId;

    const scoreDisplay = document.querySelector('#score');
    const startBtn = document.getElementById('btn-start');

    //the tetriminoes
    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2],
    ];
    const zTetromino = [
        [1, width, width+1, width+2],
        [width+1, width+2, width*2, width*2+1],
        [width, width+1, width+2, width*2+1],
        [1, width, width+1, width*2+1],
    ]
    const tTetromino = [
        [1, width, width+1, width+2],
        [1, width+1, width+2, width*2+1],
        [width, width+1, width+2, width*2+1],
        [1, width, width+1, width*2+1],
    ]
    const oTetromino = [
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
    ]
    const iTetromino = [
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
    ]
    const tetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

    //starting positions and rotations
    let curPosition = 4;
    let curRotation = 0;
    let checkTetrominoClass = document.querySelectorAll('.tetromino');
    let endPiece = document.querySelector('.taken');
    

    //random shape
    let random = Math.floor(Math.random()*tetrominoes.length);
    let nextRandom = 0;
    let current = tetrominoes[random][curRotation];

    //function to draw a shape
    let draw = () => {
        current.forEach(index => {
            squares[curPosition + index].classList.add('tetromino');
        })
    }
    draw();
    //undraw the tetronimoe (remove the class)
    //grabs the current tetromino position and for every square in it, removes the class. that way the squares are updated to the tetromino position
    let undraw = () => {
        current.forEach(index => {
            squares[curPosition + index].classList.remove('tetromino');
        })
    }

    //make the shapes move down the screen
    startBtn.addEventListener('click', () => {
        if(timerId) {
            clearInterval(timerId);
            timerId = null;
        } else {
            draw();
            timerId = setInterval(moveDown, 500);
            nextRandom = Math.floor(Math.random()*tetrominoes.length);
        }
    })

    function moveDown() {
        undraw();
        curPosition += width;
        draw();
        freeze();
    }

    //freeze the shapes
    function freeze() {
        //if the current piece has some bits with the class taken, add the taken class to all bits
        if(current.some(index => squares[curPosition + index + width].classList.contains('taken'))) {
            current.forEach(index => squares[curPosition + index].classList.add('taken'));
            //start a new tetromino falling
            random = nextRandom;
            nextRandom = Math.floor(Math.random() * theTetrominoes.length);
            current = tetrominoes[random][curRotation];
            curPosition = 4;
            draw();
        }
    }




})