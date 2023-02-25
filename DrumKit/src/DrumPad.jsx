import { useEffect } from "react";

export default function DrumPad(props) {
    
    const fileName = props.src.split("/").pop().replace(".mp3", "");
    const handleClick = () => {
      document.getElementById(props.id).play();
       // Extract file name from src string
        document.getElementById("display").innerText = fileName;
      
    };
  
    return (
      <div className="drum-pad" id={fileName} onClick={handleClick}>
        <audio src={props.src} id={props.id} className="clip"  />
        {props.content}
      </div>
    );
  }