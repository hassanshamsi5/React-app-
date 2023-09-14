import React from 'react';
import { Calendar } from 'antd';
const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
};
const App = () => {
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 mb-5"></div>
                <div className="col-lg-4 col-12 mb-5">
                    <h1 className='text-center'>Calendar</h1>
                    <div className="d-flex justify-content-center">
                        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                    </div>
                </div>
            </div>
        </div>

    );
};
export default App;