import { useState } from "react";

function News(props) {
      const [bgcolor, setBgcolor] = useState("black");
    
      const onClick = () => {
        setBgcolor("blue");
      };
    
      const onDoubleClick = (newBgcolor) => {
        setBgcolor('yellow')
      };
    
      return (
        <div style={{backgroundColor: bgcolor}}>
          <div className="container col-md-6 my-5 card">
            <img src={props.img} className="card-img-top" alt="" />
            <div className="card-body">
              <button className="btn btn-primary" onClick={onClick} onDoubleClick={onDoubleClick}>changebgcolor</button>
            </div>
          </div>
         </div>
      );
    }
    
    
    
    
    export default News;
    
    
    
    
    