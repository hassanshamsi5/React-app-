import React from 'react';
import { Link } from 'react-router-dom';
import { Result } from 'antd';
const App = () => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Link type="primary" className='btn btn-primary' to="../TextForm">Back Home</Link>}
  />
);
export default App;