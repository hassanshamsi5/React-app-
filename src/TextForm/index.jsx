import React, { useState } from "react";

function App(props) {
    const [text, setText] = useState(''); // Initialize with an empty string

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clearText = () => {
        let newText = ''
        setText(newText);
        // window.location.reload(false);
    }
    const capitalizeText = () => {
        const newText = text
            .split(" ")
            .map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1).toLowerCase())
            .join(" ")
        setText(newText)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleCopy = () => {
        var text = document.getElementById('myBox')
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))

    }
    const handleChange = (event) => {
        setText(event.target.value);
    }
    return (
        <div>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleChange} id="myBox" cols="30" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleDownClick}>LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={capitalizeText}>Capitalize Text</button>
                <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={speak}>Speak</button>
                <button className="btn btn-primary mx-1"  onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1"  onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and  {text.length} characters </p>
                <p>{0.008 * text.split(" ").length} <b> Minutes Read</b></p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </div>
    )
}
export default App;

