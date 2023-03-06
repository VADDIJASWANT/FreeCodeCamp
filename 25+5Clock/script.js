let breakOrSession = 2;

function setSessionTime(){
    if(breakOrSession%2==0){
        $("#timer-label").text("Session");
        $("#time-left").text($("#session-length").text().padStart(2, "0") + ":00");  
    }else{
        $("#timer-label").text("Break");
        $("#time-left").text($("#break-length").text().padStart(2, "0") + ":00"); 
    }
      
}

$(document).ready(function() {
    $("#break-decrement").click(function() {
        let breakTime = parseInt($("#break-length").text());
        if(breakTime ==1) {
            return;
        }else{
            breakTime -= 1;
            $("#break-length").text(breakTime);
        }
    })
    $("#break-increment").click(function() {
        let breakTime = parseInt($("#break-length").text());
        if(breakTime ==60) {
            return;
        }else{
            breakTime += 1;
            $("#break-length").text(breakTime);
        }
    })
    $("#session-decrement").click(function() {
        let sessionTime = parseInt($("#session-length").text());
        if(sessionTime ==1) {
            return;
        }else{
            sessionTime -= 1;
            $("#session-length").text(sessionTime);
            setSessionTime();
        }
    })
    $("#session-increment").click(function() {
        let sessionTime = parseInt($("#session-length").text());
        if(sessionTime ==60) {
            return;
        }else{
            sessionTime += 1;
            $("#session-length").text(sessionTime);
            setSessionTime();
        }
    })

    $("#reset").click(function() {
        const audio = $("#beep")[0]; // select the audio element
        audio.pause(); // stop the audio playback
        audio.currentTime = 0; // reset the audio to the beginning
        $("#break-length").text("5");
        $("#session-length").text("25");
        breakOrSession = 2;
        setSessionTime();
        clearInterval(timerId);
    });

    let timerId; // variable to store the timer ID

    $("#start_stop").click(function timerstart() {
        const timeLeft = $("#time-left");
        const [minutes, seconds] = timeLeft.text().split(":"); // get the current time in minutes and seconds
        let totalSeconds = parseInt(minutes) * 60 + parseInt(seconds); // calculate the total time in seconds
    
        if (!timerId) { // if the timer is not running
            timerId = setInterval(function() {
                totalSeconds--; // decrease the time by 1 second
                if (totalSeconds < 0) {
                    $("#beep")[0].play(); 
                    clearInterval(timerId); // clear the interval when the time reaches zero
                    timerId = null; // reset the timer ID
                    breakOrSession++;
                    setSessionTime();
                    timerstart();
                } else {
                    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
                    const seconds = (totalSeconds % 60).toString().padStart(2, "0");
                    timeLeft.text(`${minutes}:${seconds}`); // update the display
                    if(minutes == "00"){
                        timeLeft.addClass("red");
                    }else{
                        timeLeft.removeClass("red");
                    }
                }
            }, 1000);
        } else { // if the timer is running
            clearInterval(timerId); // pause the timer
            timerId = null; // reset the timer ID
        }
    });


});