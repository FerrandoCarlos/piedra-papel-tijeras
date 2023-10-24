// Se guardan los elementos a capturar 
const gameItemsElement = document.getElementById("game-items");
const userPickedElement= document.getElementById("user-picked");
const pcPickedElement= document.getElementById("pc-picked");
const resultElement= document.getElementById("result");
const pointsUserElement = document.getElementById("points-user");
const pointsPcElement = document.getElementById("points-pc");
// Variables, Arreglo jugadas PC, Objeto reglas del juego
const gameRules = {
    paper:{
        rock:true,
        scissors:false
    },
    rock:{
        scissors:true,
        paper:false
    },  
    scissors:{
        paper:true,
        rock:false
    }
}
const gameOptions = ['rock','paper','scissors'];
let userSelection = null;
let pcSelection = null;
let userPoints = 0;
let pcPoints = 0;

//se muestra puntaje
 const updateScore = () => {
    pointsUserElement.textContent = userPoints;
    pointsPcElement.textContent = pcPoints;
 };

//se muestra elecciones 
const printChoices = () => {
    userPickedElement.textContent = userSelection.toUpperCase();
    pcPickedElement.textContent = pcSelection.toUpperCase();
};

// Chequear el ganador

const checkWinner = () =>{
    if(userSelection === pcSelection){
        resultElement.textContent = 'TIE';
        return;
    }

    if (gameRules[userSelection][pcSelection]) {
        resultElement.textContent = 'YOU WIN';
        userPoints++;
    } else {
        resultElement.textContent = 'YOU LOSE';
        pcPoints++;
    }

    updateScore();
};
//función para generar jugada aleatoria de la PC

const generateRandomPlay = () =>{
    const randomPlay = ~~(Math.random()*gameOptions.length);//~~ = Math.floor
    const pcPlay = gameOptions[randomPlay];
    pcSelection = pcPlay;
    checkWinner();
    printChoices();
};  
//función para asignar el evento escuchado a las variables del jugador y la PC 
const setUserSelection = item =>{
    userSelection = item; //jugada US
    generateRandomPlay();//jugada PC
};
//evento de escucha de los elementos 
gameItemsElement.addEventListener('click', ev =>{
    if (!ev.target.classList.contains('game-item')) return;
    setUserSelection(ev.target.dataset.item);

});