import React, { useState } from 'react'
import {useSpeechSynthesis} from  "react-speech-kit"
import "../CSS/TextToSpeech.css"
function TextToSpeech(convert) {
    const [text,setText] = useState("")
    const {speak} = useSpeechSynthesis();
    const speakNow=()=>{
        setText(convert['convert'])
        speak({text:text})
    }
 
  return (
    <button onClick={()=>speakNow()} className='textToSpeech'>listen</button>
  )
}

export default TextToSpeech