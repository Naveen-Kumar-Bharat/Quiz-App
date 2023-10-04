
const username = document.getElementById("username");
const saveScore = document.getElementById("saveScore");
const mostRecentScore = localStorage.getItem("mostRecentScore")
const final = document.getElementById('final-score')
const highScores = JSON.parse(localStorage.getItem("highScores")) || [] || []
const Max_high_scores = 5
final.innerText = mostRecentScore


username.addEventListener('keyup',()=>{
    console.log(username.value)
    if (username.value !== '') {
        saveScore.disabled = false
      } else {
        saveScore.disabled = true
      }
})
const saveHighScore = (e) => {

    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }
    highScores.push(score)
    highScores.sort((a,b)=> b.score - a.score)
    highScores.splice(Max_high_scores)
    localStorage.setItem("highScores",JSON.stringify(highScores))

    window.location.assign("/index.html")
}
