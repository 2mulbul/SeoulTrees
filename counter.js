let monthInfo= document.querySelector('#monthInfo');
let yearInfo= document.querySelector('#yearInfo');


let pausebutton = document.querySelector("#playPause");
let refreshbutton = document.querySelector("#update");

var startTime;
var updatedTime;
var difference;
var tInterval;
var savedTime;
var paused = 0;
var running = 0;
var myTime = 0;

let yearCount;
let monthCount;


function startTimer() {
    if (!running) {
        startTime = millis();
        tInterval = setInterval(counter, 1000);
        paused = 0;
        running = 1;
    }
}
function PauseResumeTimer() {
    if (!difference) {
    } else if (!paused) {
        clearInterval(tInterval);
        savedTime = difference;
        paused = 1;
        running = 0;
        // noLoop();
    } else {
        startTimer();
        // loop();
    }
}
function resetTimer() {
    clearInterval(tInterval);
    startTime = millis();
    tInterval = setInterval(counter, 1000);
    savedTime = 0;
    difference = 0;
    paused = 0;
    running = 1;
    monthCount = 1;
    yearCount = 2006;
    monthInfo.innerHTML=monthCount + '월';
    yearInfo.innerHTML = yearCount + '년';
    
    myTime =0;
}
function counter() {
    updatedTime = millis();
    if (savedTime) {
        difference = (updatedTime - startTime) + savedTime;
    } else {
        difference = updatedTime - startTime;
    }
    
    monthCount = Math.floor((difference % (1000 * 12)) / 1000) + 1;
    yearCount=Math.floor((difference % (1000 * 12* 14)) / (1000* 12))+2006;
    
    monthInfo.innerHTML=monthCount + '월';
    yearInfo.innerHTML = yearCount + '년';
    

    year=Math.floor((difference % (1000 * 12* 14)) / (1000* 12));
    resetYear(year,selectedDistrict,namingDistrict);

}


pausebutton.addEventListener("click", PauseResumeTimer);
pausebutton.addEventListener("click", () => {
    if (!difference) {
    } else if (!paused) {
        pausebutton.innerHTML = "pause";
    } else {
        pausebutton.innerHTML = "play_arrow";

    }
});

refreshbutton.addEventListener("click", resetTimer);
refreshbutton.addEventListener("click", () => {
    refreshbutton.innerHTML = "auto_awesome";
    setTimeout(() => {
        refreshbutton.innerHTML = "skip_previous";
        
    }, 500);
    
});