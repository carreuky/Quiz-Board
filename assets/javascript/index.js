document.getElementsByClassName("questions")[0].style.display="block";

function next1() {
    document.getElementsByClassName("questions")[0].style.display = "none";
    document.getElementsByClassName("questions")[1].style.display = "block";
    document.getElementsByClassName("questions")[2].style.display = "none";
    document.getElementsByClassName("questions")[3].style.display = "none";
    document.getElementsByClassName("questions")[4].style.display = "none";
    return false;
}
function next2() {
    document.getElementsByClassName('questions')[0].style.display = "none";
    document.getElementsByClassName('questions')[1].style.display = "none";
    document.getElementsByClassName('questions')[2].style.display = "block";
    document.getElementsByClassName('questions')[3].style.display = "none";
    document.getElementsByClassName('questions')[4].style.display = "none";
    return false;
}
function next3() {
    document.getElementsByClassName("questions")[0].style.display = "none";
    document.getElementsByClassName("questions")[1].style.display = "none";
    document.getElementsByClassName("questions")[2].style.display = "none";
    document.getElementsByClassName("questions")[3].style.display = "block";
    return false;
}
function next4() {
    document.getElementsByClassName('questions')[0].style.display = "none";
    document.getElementsByClassName('questions')[1].style.display = "none";
    document.getElementsByClassName('questions')[2].style.display = "none";
    document.getElementsByClassName('questions')[3].style.display = "none";
    document.getElementsByClassName('questions')[4].style.display = "block";
    document.getElementsByClassName('submitClass')[0].style.display = "block";
    return false;
}
function prev1() {
    document.getElementsByClassName("questions")[0].style.display = "block";
    document.getElementsByClassName("questions")[1].style.display = "none";
    document.getElementsByClassName("questions")[2].style.display = "none";
    document.getElementsByClassName("questions")[3].style.display = "none";
    document.getElementsByClassName("questions")[4].style.display = "none";
    return false;
}
function prev2() {
    document.getElementsByClassName('questions')[0].style.display = "none";
    document.getElementsByClassName('questions')[1].style.display = "block";
    document.getElementsByClassName('questions')[2].style.display = "none";
    document.getElementsByClassName('questions')[3].style.display = "none";
    document.getElementsByClassName('questions')[4].style.display = "none";
    return false;
}
function prev3() {
    document.getElementsByClassName("questions")[0].style.display = "none";
    document.getElementsByClassName("questions")[1].style.display = "none";
    document.getElementsByClassName("questions")[2].style.display = "block";
    document.getElementsByClassName("questions")[3].style.display = "none";
    return false;
}
function prev4() {
    document.getElementsByClassName('questions')[0].style.display = "none";
    document.getElementsByClassName('questions')[1].style.display = "none";
    document.getElementsByClassName('questions')[2].style.display = "none";
    document.getElementsByClassName('questions')[3].style.display = "block";
    document.getElementsByClassName('questions')[4].style.display = "none";
    document.getElementsByClassName('submitClass')[0].style.display = "block";
    return false;
}
