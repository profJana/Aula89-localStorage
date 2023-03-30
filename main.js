let score = 0;

function updateScore(){
    score++;
    document.getElementById("score").innerHTML = "Pontução: " + score;
}

function saveScore(){
    localStorage.setItem("score", score); //chave, valor para armazenar
}

function nextPage(){
    window.location = "atividade2.html";
}