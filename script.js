console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, -1, 5, 0],
        [3, 4, 5, -1, 15, 0],
        [6, 7, 8, -1, 25, 0],
        [0, 3, 6, -11, 15, 90],
        [1, 4, 7, -1, 15, 90],
        [2, 5, 8, 9, 15, 90],
        [0, 4, 8, -1, 15, 45],
        [2, 4, 6, -1, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "32vw";
        }
    })
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})

// Media Query
// const checkWinshort = () => {
//     console.log("calling")
//     // let boxtext = document.getElementsByClassName('boxtext');
//     let wins1 = [
//         [0, 1, 2, -1, 5, 0],
//         [3, 4, 5, -1, 15, 0],
//         [6, 7, 8, -1, 25, 0],
//         [0, 3, 6, -11, 15, 90],
//         [1, 4, 7, -1, 15, 90],
//         [2, 5, 8, 9, 15, 90],
//         [0, 4, 8, -5, 29, 45],
//         [2, 4, 6, -1, 15, 135],
//     ]
//     wins1.forEach(e => {
//         document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
//         document.querySelector(".line").style.width = "70vw";

//     })
// }
// const mediaQuery = window.matchMedia('(max-width: 950px)');

// window.addEventListener('resize', checkWinshort);


// Check if the media query matches for responsiveness
if (window.matchMedia("(max-width: 950px)").matches) {
    console.log("Viewport is 950px or less");
  
    const wins1 = [
      [0, 1, 2, -1, 5, 0],
      [3, 4, 5, -1, 15, 0],
      [6, 7, 8, -1, 25, 0],
      [0, 3, 6, -19, 29, 90, 57],
      [1, 4, 7, -1, 15, 90],
      [2, 5, 8, 9, 15, 90],
      [0, 4, 8, -5, 29, 45],
      [2, 4, 6, -1, 15, 135],
    ];
  
    wins1.forEach((e, index) => {
      const element = document.createElement("div");
      element.classList.add(`line-${index}`);
      document.body.appendChild(element);
  
      const lineElement = document.querySelector(`.line-${index}`);
      lineElement.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      lineElement.style.width = `${e[6]}vw`; //57
    });

    // let boxtext = document.getElementsByClassName('boxtext');
    // wins1.forEach(e => {
    //     if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
    //         document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
    //         isgameover = true
    //         document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
    //         document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
    //         document.querySelector(".line").style.width = `${e[6]}vw`;
    //     }
    // })
  }
  

