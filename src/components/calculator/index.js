import React, { useState } from 'react';
import '../../App.css';

function App() {
    const [input, setInput] = useState('')
    const handleClick = (value) => {
        setInput(input + value)
    }
    const handleCalculate = ()=>{
        try{
            const result = new Function('return ' + input)();
            setInput(result.toString());
            // setInput(eval(input).toString())
        }catch(error){
            setInput('Error')
        }
    }
    const handleClear = ()=>{
        setInput('')
    }
    const Reset =() =>{
        setInput('')
    }

return (
    <div className='container'>
        <div className="calculator">
            <div className="form-control my-3">{input}</div>
            <div className="buttons">
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button className='btn btn-danger' onClick={handleClear}>C</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('+')}>+</button>
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('.')}>.</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('/')}>/</button>
                <button onClick={() => handleClick('*')}>*</button>
                <button onClick={() => handleClick('-')}>-</button>
            </div>
            <button className='btn btn-primary px-5 my-2 mx-1' onClick={handleCalculate}>=</button>
            <button className='btn btn-dark px-5' onClick={Reset}>Reset</button>
        </div>
    </div>
);
}

export default App;