const highScoresList = document.getElementsByClassName("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);


highScoresList[0].innerHTML = highScores.map((score) => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join("");

