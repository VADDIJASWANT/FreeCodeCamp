$(document).ready(function() {
  
  var display = ""; // Initialize calculator display variable
  var calcResult;
  $("button").click(function(){
    var value = $(this).val();
    if(value == "0"){
      if(display.length == 1 && display[0] == "0"){
        return;
      }
    }
    

    // To check if calculation is evaluated once 
    let formalDisplay = $("#formalview").text();
    let formalDisplayArray = formalDisplay.split("");
    if(formalDisplay.includes("=")){
      if(!isNaN(value)){
        $("#formalview").text("");
      }else{
        $("#formalview").text(calcResult);
      }
    }

    if(isNaN(display)){
      display = "";
    };

    if (formalDisplay.length > 0) {
      const lastChar = formalDisplayArray[formalDisplayArray.length - 1];
      if (isNaN(lastChar) && isNaN(value) && value !== 'subtract') {
        // last character is an operator, current value is an operator (excluding negative sign)
        formalDisplayArray.pop(); // remove last operator
        $("#formalview").text(formalDisplayArray.join(""));
      }

    }

    if(isNaN(formalDisplayArray[formalDisplayArray.length - 2]) && isNaN(formalDisplayArray[formalDisplayArray.length - 1]) && formalDisplayArray[formalDisplayArray.length - 1] !== "-"){
      formalDisplayArray.splice(formalDisplayArray.length - 2, 1);
      $("#formalview").text(formalDisplayArray.join(""));
    }
    
    if (!isNaN(value)) {
      // Add the number to the calculator display
      display += value;
      $("#display").text(display);
      $("#formalview").append(value);
    } else {
      // Check what operator was clicked and perform the corresponding calculation
      switch (value) {
        case "addition":
          display = "+";
          $("#display").text(display);
          $("#formalview").append(display);
          break;
        case "subtract":
          display = "-";
          $("#display").text(display);
          $("#formalview").append(display);
          break;
        case "multiply":
          display = "*";
          $("#display").text(display);
          $("#formalview").append(display);
          break;
        case "divide":
          display = "/";
          $("#display").text(display);
          $("#formalview").append(display);
          break;
        case ".":
          if(display.indexOf(".") < 0){ // Check if the display already contains a dot
            display += ".";
            $("#display").text(display);
            $("#formalview").append(".");
          }
          break;
          case "=":
            let stringToCheck = $("#formalview").text();
            console.log(stringToCheck);
            calcResult = eval(stringToCheck);
            $("#display").text(calcResult);
            $("#formalview").append("= "+calcResult);
            break;
          case "clear":
            display = "";
            $("#display").text("0");
            $("#formalview").text(display);
            break;
        default:
          console.log("Invalid button clicked");
      }
    }

  });
});