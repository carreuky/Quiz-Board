document.getElementsByClassName("questions")[0].style.display = "block";
// Activating the next question
function btnnext1() {

    if (document.getElementById('t1').checked ||
    document.getElementById('f1b').checked ||
    document.getElementById('f1c').checked ||
    document.getElementById('f1d').checked) {
    
} else {
    alert("Oops!! unanswered question ONE");
    return false;
}



    document.getElementsByClassName("questions")[0].style.display = "none";
    document.getElementsByClassName("questions")[1].style.display = "block";
    document.getElementsByClassName("questions")[2].style.display = "none";
    document.getElementsByClassName("questions")[3].style.display = "none";
    document.getElementsByClassName("questions")[4].style.display = "none";
    return false;
}
function btnnext2() {
    document.getElementsByClassName('questions')[0].style.display = "none";
    document.getElementsByClassName('questions')[1].style.display = "none";
    document.getElementsByClassName('questions')[2].style.display = "block";
    document.getElementsByClassName('questions')[3].style.display = "none";
    document.getElementsByClassName('questions')[4].style.display = "none";
    return false;
}
function btnnext3() {
    document.getElementsByClassName("questions")[0].style.display = "none";
    document.getElementsByClassName("questions")[1].style.display = "none";
    document.getElementsByClassName("questions")[2].style.display = "none";
    document.getElementsByClassName("questions")[3].style.display = "block";
    return false;
}
function btnnext4() {
    document.getElementsByClassName('questions')[0].style.display = "none";
    document.getElementsByClassName('questions')[1].style.display = "none";
    document.getElementsByClassName('questions')[2].style.display = "none";
    document.getElementsByClassName('questions')[3].style.display = "none";
    document.getElementsByClassName('questions')[4].style.display = "block";
    return false;
}
// Activating previous button
function backbtn1() {
    document.getElementsByClassName("questions")[0].style.display = "block";
    document.getElementsByClassName("questions")[1].style.display = "none";
    document.getElementsByClassName("questions")[2].style.display = "none";
    document.getElementsByClassName("questions")[3].style.display = "none";
    document.getElementsByClassName("questions")[4].style.display = "none";
    return false;
}
function backbtn2() {
    document.getElementsByClassName('questions')[0].style.display = "none";
    document.getElementsByClassName('questions')[1].style.display = "block";
    document.getElementsByClassName('questions')[2].style.display = "none";
    document.getElementsByClassName('questions')[3].style.display = "none";
    document.getElementsByClassName('questions')[4].style.display = "none";
    return false;
}
function backbtn3() {
    document.getElementsByClassName("questions")[0].style.display = "none";
    document.getElementsByClassName("questions")[1].style.display = "none";
    document.getElementsByClassName("questions")[2].style.display = "block";
    document.getElementsByClassName("questions")[3].style.display = "none";
    return false;
}
function backbtn4() {
    document.getElementsByClassName('questions')[0].style.display = "none";
    document.getElementsByClassName('questions')[1].style.display = "none";
    document.getElementsByClassName('questions')[2].style.display = "none";
    document.getElementsByClassName('questions')[3].style.display = "block";
    document.getElementsByClassName('questions')[4].style.display = "none";
    return false;
}


// computing total marks

function total() {
    
    var score = 0;
    document.getElementById('t1').checked ? score=score + 1 : score=score + 0;
    document.getElementById('t2').checked ? score=score + 1 : score=score + 0;
    document.getElementById('t3').checked ? score=score + 1 : score=score + 0;
    document.getElementById('t4').checked ? score=score + 1 : score=score + 0;
    document.getElementById('t5').checked ? score=score + 1 : score=score + 0;


    var scoreInToPercentage=(score/5)*100;
    var comment;

    if(scoreInToPercentage>=80 && scoreInToPercentage<=100){
        comment="Excellent Passed Champ !!"
    }else if(scoreInToPercentage>=50 && scoreInToPercentage<80){
        comment="Fairly Passed closer Champ !!"
    }else{
        comment="Refresh and retake test you can be a champ too !!"
    }

    document.getElementById("per").innerHTML = scoreInToPercentage + '%';
    document.getElementById("comment").innerHTML = comment;


    return false;

}
    