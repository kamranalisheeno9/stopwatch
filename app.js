
var min = 0;
var sec = 0;
var milisec = 0;
var startbtn;
var getMin = document.getElementById("min")
var getSec = document.getElementById("sec")
var getMilisec = document.getElementById("milisec")
var enterName;
function stopWatch() {
    milisec++
    getMilisec.innerHTML =milisec;
    if(milisec<9){
        getMilisec.innerHTML="0"+milisec
    }
    else if (milisec >= 100  ) {
        sec++
        getSec.innerHTML = "0" +  sec;
        milisec = 00
        
        if(sec>9){
        getSec.innerHTML=sec
        }
    }
    else if (sec >= 60) {
        min++
        getMin.innerHTML ="0" + min;
        sec = 0
        if(min>9){
            getSec.innerHTML=min
            }
    }

}
function start() {
    startbtn = setInterval(stopWatch, 10)
    var srtbtn = document.getElementById("start")
    srtbtn.disabled = true
    srtbtn.style.opacity = "0.5"
    var pausebtn = document.getElementById("pause")
    pausebtn.disabled = false
    pausebtn.style.opacity = "1"


}
function stop() {
    clearInterval(startbtn)
    var srtbtn = document.getElementById("start")

    srtbtn.disabled = false
    srtbtn.style.opacity = "1"
    var pausebtn = document.getElementById("pause")
    pausebtn.disabled = true
    pausebtn.style.opacity = "0.5"


}
function reset() {
    
    enterName=prompt("Enter Your Name")
    var namesList=document.getElementById("names-list")
    namesList.innerHTML +=enterName+" = "+getMin.innerHTML+" : "+getSec.innerHTML+" : "+getMilisec.innerHTML+"<br>";


    var srtbtn = document.getElementById("start")
    srtbtn.disabled = false
    srtbtn.style.opacity = "1"
    var pausebtn = document.getElementById("pause")
    pausebtn.disabled = false
    pausebtn.style.opacity = "1"

    clearInterval(startbtn)
    min = "00"
    getMin.innerHTML = min;
    sec = "00"
    getSec.innerHTML = sec;

    milisec = "00"
    getMilisec.innerHTML = milisec;

    

    
}

function animateCircle() {
    document.getElementById("animate-circle").style.animation = "circle 2s infinite linear"
    document.getElementById("innercirc").style.animation = "none"


}
function animationCircleStop() {
    document.getElementById("animate-circle").style.animation = "none"

}
