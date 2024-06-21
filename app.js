// stopwatch code
let timer;

let startTime;
let elapsedTime = 0;


let startbtn = document.querySelector('.start');
let resetbtn = document.querySelector('.reset');
let stopbtn = document.querySelector('.stop');
let lapbtn = document.querySelector('.lap');
let lap = document.querySelector('.laps');

let laps =[];
min.innerText = "00";
sec.innerText = "00";
ms.innerText = "00";

// start the stop watch
startbtn.addEventListener('click',start
);
stopbtn.addEventListener('click',stop);
resetbtn.addEventListener('click',reset);

function stop(){
    clearInterval(timer);
}
function start() {
    
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateDisplay, 10);
    
}
function reset() {
    clearInterval(timer);
   
    elapsedTime = 0;
    min.innerText = "00";
    sec.innerText = "00";
    ms.innerText = "00";
    laps=[];
    updatelaps();

  
}




function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    let totalMilliseconds = elapsedTime;
    
ms.innerText =totalMilliseconds % 1000
    
    
    min.innerText = Math.floor((totalMilliseconds % 3600000) / 60000);
    sec.innerText = Math.floor((totalMilliseconds % 60000) / 1000);

}


lapbtn.addEventListener('click', ()=>{
    
    laps.push(elapsedTime);
    updatelaps();
   
});
function updatelaps(){
    lap.innerHTML = laps.map((lap,index)=>{
        return `<li>Lap ${index+1}:   ${Math.floor((lap % 3600000) / 60000)}min ${Math.floor((lap % 60000) / 1000)}sec ${lap % 1000}ms</li>`
    }).join('');
}