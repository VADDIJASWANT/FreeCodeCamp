import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DrumPad from './DrumPad'
import Heater1 from './assets/Heater-1.mp3'
import Heater2 from './assets/Heater-2.mp3'
import Heater3 from './assets/Heater-3.mp3'
import Heater4 from './assets/Heater-4.mp3'
import Clap from './assets/Clap.mp3'
import OpenHH from './assets/Open-HH.mp3'
import KickNHat from './assets/Kick-n-Hat.mp3'
import KICK from './assets/KICK.mp3'
import ClosedHH from './assets/Closed-HH.mp3'

function App() {


  const handleKeyPress = (event) => {
    const keyPressed = event.key.toUpperCase();
    const button = buttons.find((b) => b.content === keyPressed);
    console.log(button)
    if (button) {
      document.getElementById(button.content).play();
      document.getElementById("display").innerText = button.name;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  
  let buttons = [  { content: "Q", src: Heater1, name: "Heater 1" },
                    { content: "W", src: Heater2,name: "Heater 2" }, 
                    { content: "E", src: Heater3,name: "Heater 3" },
                    { content: "A", src: Heater4,name: "Heater 4" },
                    { content: "S", src: Clap,name: "Clap"  },
                    { content: "D", src: OpenHH ,name: "OpenHH " },
                    { content: "Z", src: KickNHat ,name: "KickNHat" },
                    { content: "X", src: KICK ,name: "KICK" },
                    { content: "C", src: ClosedHH,name: "ClosedHH"  }]


  let drumIcons = buttons.map((button)=>(
    <DrumPad
      key={button.content}
      id={button.content}
      content={button.content}
      src={button.src}
      name={button.name}
    />
  ))
  return (
    <div className="App" id="drum-machine">
      <div className='DrumIcons'>
        {drumIcons}
      </div>
      <div id="display"></div>

    </div>
  )
}

export default App
