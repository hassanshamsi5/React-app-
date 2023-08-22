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
    const handleChange = (event) => {
        setText(event.target.value);
    }
    return (
        <div>
            <div className="container">
                <h1 className="display-6 fw-bold">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleChange} cols="30" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleDownClick}>LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={capitalizeText}>Capitalize Text</button>
                <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
                <button className="btn btn-outline-warning mx-1" onClick={speak}>Speak</button>
            </div>
            <div className="container">
                <h1 className="fs-3 fw-bold">Your Text Summary</h1>
                <p>{text.split(" ").length} words and  {text.length} characters </p>
                <p>{0.008 * text.split(" ").length} <b> Minutes Read</b></p>
                <h2 className="fs-3 fw-bold">Preview</h2>
                <p>{text}</p>

            </div>
        </div>
    )
}
export default App;

