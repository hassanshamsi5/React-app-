import {useParams } from 'react-router-dom'

function App() {
    const { id } = useParams()
    console.log(id);
    return (
        <>
            <h1>{id}</h1>
        </>
    )
}

export default App