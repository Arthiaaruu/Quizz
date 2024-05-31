var ques = document.querySelectorAll(".questions")
var ans = document.querySelectorAll(".answers")
//console.log(ans)
var submit = document.querySelector(".submit-btn")
var scorebox = document.getElementById("result")
var scoredisplay = document.getElementById("score")

submit.addEventListener("click", function () {
    var score = 0
    for (i = 1; i < 6; i++) {
        var quesname = "answer" + i
        var selectedans = document.querySelector('input[name="' + quesname + '"]:checked')
        //console.log(selectedans.value)
        //console.log(quesname)
        if (selectedans != null) {
            if (selectedans.value == "correct") {
                score++
            }
        }
    }
    scoredisplay.innerText = "Your Score Is :"+" " + score
    scorebox.style.display = "block"
    if(selectedans == null){
        alert("Select Answer")
        scorebox.style.display = "none"
    }
    //console.log(score)


})

var close = document.getElementById("close-result")

close.addEventListener("click", () => {
    scorebox.style.display = "none"
    location.reload()
})

