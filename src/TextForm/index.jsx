import React, { useState } from "react";

function App(props) {
    const handleupclick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleupclick1 = () => {
        let newText = text.toLocaleLowerCase()
        setText(newText)
    }



    const handlechange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('enter text here')
    return (
        <div>
            <div className="container">
                <h1 className="display-1 fw-bold">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handlechange} cols="30" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleupclick}>Convert To Uppercase</button>
                <button className="btn btn-primary" onClick={handleupclick1}>Convert To Lowercase</button>
            </div>
        </div>
    )
}

export default App
