$(document).ready(function() {
    var breakLength = parseInt($("#break-length").html());
    var sessionLength = parseInt($("#session-length").html());
    var totalSeconds = sessionLength * 60;
    var intervalID;
  
    $("#break-increment").click(function() {
      if (breakLength < 60) {
        breakLength++;
        $("#break-length").html(breakLength);
      }
    });
  
    $("#break-decrement").click(function() {
      if (breakLength > 1) {
        breakLength--;
        $("#break-length").html(breakLength);
      }
    });
  
    $("#session-increment").click(function() {
      if (sessionLength < 60) {
        sessionLength++;
        $("#session-length").html(sessionLength);
        totalSeconds = sessionLength * 60;
        $("#time-left").html(formatTime(totalSeconds));
      }
    });
  
    $("#session-decrement").click(function() {
      if (sessionLength > 1) {
        sessionLength--;
        $("#session-length").html(sessionLength);
        totalSeconds = sessionLength * 60;
        $("#time-left").html(formatTime(totalSeconds));
      }
    });
  
    function formatTime(totalSeconds) {
      var minutes = Math.floor(totalSeconds / 60);
      var seconds = totalSeconds % 60;
      return (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }
  
    function timerStart() {
      intervalID = setInterval(async function() {
        totalSeconds--;
        $("#time-left").html(formatTime(totalSeconds));
  
        if (totalSeconds === 0) {
            $("#beep")[0].play();
          clearInterval(intervalID);
          var currentType = $("#timer-label").html();
          if (currentType === "Session") {
            $("#timer-label").html("Break");
            totalSeconds = breakLength * 60;
            totalSeconds++;
          } else {
            $("#timer-label").html("Session");
            totalSeconds = sessionLength * 60;
            totalSeconds++;
          }
          await new Promise(resolve => setTimeout(resolve, 1000));
          timerStart();
        }
      }, 1000);
    }
  
    $("#start_stop").click(function() {
      if (intervalID) {
        clearInterval(intervalID);
        intervalID = null;
      } else {
        timerStart();
      }
    });
  
    $("#reset").click(function() {
        const audio = $("#beep")[0]; // select the audio element
        audio.pause(); // stop the audio playback
        audio.currentTime = 0; // reset the audio to the beginning
      clearInterval(intervalID);
      intervalID = null;
      breakLength = 5;
      sessionLength = 25;
      totalSeconds = sessionLength * 60;
      $("#break-length").html(breakLength);
      $("#session-length").html(sessionLength);
      $("#timer-label").html("Session");
      $("#time-left").html(formatTime(totalSeconds));
    });
  });