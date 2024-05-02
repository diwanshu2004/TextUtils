import React, {useState} from 'react'

export default function TextForm(props) {
  // theme
  // theme
    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(0);
    const handleVoClick = () => {
        for (count = 0; count <= text.length; count++) {
          if (text.charAt(count).match(/[aeiouAEIOU]/)) {
            setCount(count);
          }
        }
        props.showAlert("Vowels Counted!","success");
      };
    const handleCoClick = () => {
        for (count1 = 0; count1 <= text.length; count1++) {
          if (
            text
              .charAt(count1)
              .match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
          ) {
            setCount1(count1);
          }
        }
        props.showAlert("Consonants Counted!","success");
    };
    const handleUpClick=()=>{
        console.log("Upper case clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!","success");
    }
    const handleClearClick=()=>{
        console.log("Clear text clicked"+text);
        let newText='';
        setText(newText)
        setCount1('0');
        setCount('0');
        props.showAlert("Cleared Text!","danger");
    }
    const handleLowClick=()=>{
        console.log("Lower case clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!","success");
    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const handleSpeak = () => {
        console.log("Speech triggered")
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
        props.showAlert("Converted to Speech!","success");
      };
      const cancelSpeech=()=>{
        speechSynthesis.cancel();
        props.showAlert("Speech Cancelled!","danger");
    }
    const handleInverseClick = () => {
        console.log("inverse click is triggered");
        let newText = "";
        for (let i = text.length - 1; i >= 0; i--) {
          newText += text[i];
        }
        setText(newText);
        props.showAlert("Text is Inverted!","success");
      };
      const replaceCase = () => {
        console.log("Replace words triggered")
        let existing_text = prompt("Enter which word to replace : ");
        let replaced_text = prompt("Enter New Text");
        setText(text.replaceAll(existing_text, replaced_text))
        props.showAlert("Replacing Done!","success");
      };
      const handleExtraSpaces =()=>{
        console.log("Extra space removal clicked")
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!","success");
      }
      const wordCount = (text)=>{
        let regex = /\s+\S+/;
        let numOfWords = text.split(regex);
        return numOfWords.length;
      }
    const [text,setText]=useState('');
    return (
    <>
    <div className='textBody'>
    
        <h1 className='heading'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleInverseClick}>Convert to Inverse</button>
        <button className="btn btn-primary mx-1 my-3" onClick={handleVoClick}>Count Vowels</button>
        <button className="btn btn-primary mx-1 my-3" onClick={handleCoClick}>Count Consonants</button>
        <button className="btn btn-primary mx-2 my-3" onClick={replaceCase}>Click to Replace</button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleExtraSpaces}>Remove Extra Space</button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleSpeak}>Convert to Speech</button>
        
        <button className="btn btn-danger mx-2 my-3" onClick={cancelSpeech}>Cancel Speech</button>
        <button className="btn btn-danger mx-2 my-3" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text===""? 0 : wordCount(text)} words and {text.length} characters</p>
        <p>{ text===""? 0 * 0.008 : wordCount(text) * 0.008} Minutes read</p>
        <p><b>{count}</b> Vowels <b>{count1}</b> Consonants</p>
        <p><b>{0.008*text.split(" ").length}</b> Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text in textbox above to preview here"}</p>
        
        
    </div>
    </>
  )
}
