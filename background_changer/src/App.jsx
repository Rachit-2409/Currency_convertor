import { useState } from "react"
import Btn from "./button/Btn"
import './App.css'

function App() {
  let [background, setbackground] = useState('black');
  let body =  document.querySelector('body');
  body.style.background = background;
  let colors=[
    {
      BgShade : "red",
      shade : "white"
    },
    {
      BgShade : "blue",
      shade : "white"
    },
    {
      BgShade : "purple",
      shade : "white"
    },
    {
      BgShade : "green",
      shade : "white"
    },
    {
      BgShade : "grey",
      shade : "black"
    },
    {
      BgShade : "yellow",
      shade : "red"
    },
    {
      BgShade : "pink",
      shade : "red"
    },
    {
      BgShade : "SlateBlue",
      shade : "white"
    },
    {
      BgShade : "MediumSeaGreen",
      shade : "white"
    },
    {
      BgShade : "Navy",
      shade : "white"
    },
    {
      BgShade : "Teal",
      shade : "white"
    }
  ]

  let clickChange = (element)=>{
    setbackground(element.BgShade);
  }
  
  return (
    <>
    <div>
    {
  colors.map((element, index)=>{
  return <Btn bgcolor={element.BgShade} color={element.shade} fun={()=>{clickChange(element)}} key={index}></Btn>
  })
}
    </div>

    
    </>
  )
}

export default App
