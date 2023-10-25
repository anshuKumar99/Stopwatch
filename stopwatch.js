// Accessing HTML elements by their Id
var startButton=document.getElementById('start');
var stopButton=document.getElementById('stop');
var resetButton=document.getElementById('reset');
var displayTime=document.getElementById('display-time');

// Timer variable for starting and stoping stopwatch
var timer;

// Variables for hours,minutes, and seconds
var hr=0;
var min=0;
var sec=0;

//Adding Event Listener for handling clicks on start buttton
startButton.addEventListener('click',function(){
    timer=true;
    stopWatch();
});

//Adding Event Listener for handling clicks on stop buttton
stopButton.addEventListener("click",function(){
    timer=false;
});

//Adding Event Listener for handling clicks on reset buttton
resetButton.addEventListener('click',function(){
    timer=false;
    hr=0;
    min=0;
    sec=0;
    document.getElementById('hr').innerText="00";
    document.getElementById('min').innerText="00";
    document.getElementById('sec').innerText="00";
    
});

//stopWatch() Function for counting time
function stopWatch(){
    if(timer){
        sec++;
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hr++;
            min=0;
            sec=0;
        }

        // Variables for converting time from number to string
        var hrString=hr;
        var minString=min;
        var secString=sec;


        if(hr<10){
            hrString="0"+hrString;
        }
        if(min<10){
            minString="0"+minString;
        }
        if(sec<10){
            secString="0"+secString;
        }

        document.getElementById('hr').innerText=hrString;
        document.getElementById('min').innerText=minString;
        document.getElementById('sec').innerText=secString;

        //setTimeout will execute stopWatch once after 1000 milisec or 1 second
        setTimeout(stopWatch, 1000);
    }

}

// Dark-mode Implementation
var toggleCount=0;
var toggleBtn=document.getElementById('toggle-btn');
toggleBtn.addEventListener('click',function(){
    if(toggleCount%2!=0){
        document.body.style.backgroundColor='rgb(203, 220, 247)';
        document.getElementById('stopwatch-name').style.color='rgb(86,141,229)';

        displayTime.style.color='black';
        startButton.style.backgroundColor='rgb(203, 220, 247)';
        stopButton.style.backgroundColor='rgb(203, 220, 247)';
        resetButton.style.backgroundColor='rgb(203, 220, 247)';

        document.getElementById('start-image').style.backgroundColor='rgb(86,141,229)';
        document.getElementById('stop-image').style.backgroundColor='rgb(86,141,229)';

        toggleBtn.style.borderColor='rgb(33, 96, 223)';
        document.getElementById('toggle-slider').style.backgroundColor='rgb(86,141,229)';
        document.getElementById('toggle-slider').style.transform='translateX(0px)';

        toggleCount++;
        
    }
    else{
        document.body.style.backgroundColor='black';
        document.getElementById('stopwatch-name').style.color='white';

        displayTime.style.color='white';
        startButton.style.backgroundColor='black';
        stopButton.style.backgroundColor='black';
        resetButton.style.backgroundColor='black';

        document.getElementById('start-image').style.backgroundColor='gray';
        document.getElementById('stop-image').style.backgroundColor='gray';

        toggleBtn.style.borderColor='gray';
        document.getElementById('toggle-slider').style.backgroundColor='black';
        document.getElementById('toggle-slider').style.transform='translateX(25px)';
        document.getElementById('toggle-slider').style.transition='0.4s ease-in-out';

        toggleCount++;
    }
});

