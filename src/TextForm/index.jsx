import React, { useState } from "react";

function App(props) {
    // let disabled=true
    const [text, setText] = useState(''); // Initialize with an empty string

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Uppercase", "success")
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To LowerCase", "success")
    }
    const clearText = () => {
        let newText = ''
        setText(newText);
        props.showAlert("TextClear", "success")
        // window.location.reload(false);
    }
    const capitalizeText = () => {
        const newText = text
            .split(" ")
            .map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1).toLowerCase())
            .join(" ")
        setText(newText)
        props.showAlert("Converted To CapitalizeText", "success")
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speak", "success")
    }
    const handleCopy = () => {
        var text = document.getElementById('myBox')
        text.select();
        document.getSelection().removeAllRanges()
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy all Text", "success")
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Remove Extra Space", "success")
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
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={capitalizeText}>Capitalize Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={speak}>Speak</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and  {text.length} characters </p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} <b> Minutes Read</b></p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
            </div>
        </div>
    )
}
export default App;

