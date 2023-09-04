// notepad (Get-PSReadlineOption).HistorySavePath


import { useState } from "react";
function News(props) {
    const [bgcolor, setBgcolor] = useState("black");

    const onClick = () => {
        setBgcolor("blue");
    };

    const onDoubleClick = (newBgcolor) => {
        setBgcolor('brown')
    };

    return (
        <div style={{ backgroundColor: bgcolor }}>
            <div className="container col-md-6 my-5 card">
                <button className="btn" onClick={onClick} onDoubleClick={onDoubleClick}>changebgcolor</button>
            </div>
            <p className="text-white text-center">DoubleClick color change </p>
        </div>
    );
}

export default News;