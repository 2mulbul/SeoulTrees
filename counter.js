let monthInfo= document.querySelector('#month-info');
let yearInfo= document.querySelector('#year-info');


let pausebutton = document.querySelector(".time-container");
let timeButton = document.querySelector(".time-container");

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


timeButton.addEventListener("mouseover", () => {
    bigTreeName.innerHTML = "처음부터 볼까요?";
    bigTreeName.style.color = "#ffffff";

    gsap.to(bigTreeName, 0.2, { opacity: 1, ease: Power3.easeInOut });
})
timeButton.addEventListener("click", () => {
    resetTimer();
    for (let i = 0; i < high; i++) {
        treeArray[i].changePos();
    }
});
timeButton.addEventListener("click", () => {
    //var tl = gsap.Timeline();
    //tl.to(bigTreeName, 0.2, { opacity: 1, ease: Power3.easeInOut });
    bigTreeName.innerHTML = "시작!"
    setTimeout(() => {
        bigTreeName.innerHTML = "처음부터 볼까요?";
    }, 1500);
});
timeButton.addEventListener("mouseleave", () => {
    gsap.to(bigTreeName, 0.2, { opacity: 0, ease: Power3.easeInOut });
})