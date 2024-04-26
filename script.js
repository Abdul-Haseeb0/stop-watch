document.addEventListener('DOMContentLoaded', function() {
    var timer;
    var hours = 0;
    var mint = 0;
    var sec = 0;
    var milisec = 0;
    var display = document.querySelector(".display");
    var startBtn = document.getElementById("start");
    var pauseBtn = document.getElementById("pause");
    var resetBtn = document.getElementById("reset");

    startBtn.addEventListener("click" , start);
    pauseBtn.addEventListener("click", pause);
    resetBtn.addEventListener("click", reset);
    
    function start() {
        if(!timer){
            timer = setInterval(run,10);
        }
    }

    function run() {
        milisec++;
        if(milisec === 100){
            milisec = 0;
            sec++;
            if(sec === 60){
                sec = 0;
                mint++;
                if(mint === 60){
                    mint = 0;
                    hours++;
                }
            }
        }
        display.innerHTML =
        (hours < 10 ? "0" : "") + hours + ":" +
        (mint < 10 ? "0" : "") + mint + ":" +
        (sec < 10 ? "0" : "") + sec + ":" +
        (milisec < 10 ? "0" : "") + milisec;
    }

    
    function pause() {
        clearInterval(timer);
        timer = null;
    }

    function reset() {
        clearInterval(timer);
        timer = null;
        hours = 0;
        mint = 0;
        sec = 0;
        milisec = 0;
        display.innerHTML = "00:00:00:00";
    }
});

