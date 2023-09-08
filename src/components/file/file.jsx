import { useCallback, useState, useMemo } from "react";
import Child from "./file2";

function App() {

    // const getRandom = useMemo(() => Math.random() * 10, [])

    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);

    const getData = useCallback(() => {
        return ["one", "Two"];
    }, []);

    const handleIncrement = () => {
        if (count +1) {
            setCount(oldValue => oldValue + 1);
        }
        // // 1 pics choose only
        // if (count < 1) {
        //     setCount(oldValue => oldValue + 1);
        // }
    };


    return (
        <>
            <div className="container">
            <Child getData={getData} />

            <h1>{count}</h1>
            {/* <h1>{getRandom}</h1>     */}
            <button className="btn btn-primary mx-1" onClick={handleIncrement}>Increased</button>
            <button disabled={count < 1} className="btn btn-primary mx-1" onClick={() => setCount(oldValue => oldValue - 1)}>Decreased</button>
            <button className="btn btn-primary mx-1" onClick={() => setShow(!show)}>{show ? "Hello" : "Hi"}</button>
            </div>
        </>
    );
}
export default App;

