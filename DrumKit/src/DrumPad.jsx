import { useEffect } from "react";

export default function DrumPad(props) {
    
    const handleClick = () => {
      document.getElementById(props.id).play();
       // Extract file name from src string
        document.getElementById("display").innerText = props.name;
      
    };
  
    return (
      <div className="drum-pad" id={props.name} onClick={handleClick}>
        <audio src={props.src} id={props.id} className="clip"  />
        {props.content}
      </div>
    );
  }