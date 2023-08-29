import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState([]);
    const [postId, setPostId] = useState('');
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    let handlePostIdChange = event => {
        setPostId(event.target.value);
    };

    let handleViewDetails = () => {
        const selected = data.find(item => item.id === parseInt(postId));
        setSelectedPost(selected);
    };

    return (
        <div className='container'>

            <div className="main">
                <h1>Post API</h1>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Enter Post ID No#"
                        value={postId}
                        onChange={handlePostIdChange}
                    />
                    <button className='btn btn-primary mx-3' onClick={handleViewDetails}>View Details</button>
                </div>
                {selectedPost && (
                    <div className="selected-post">
                        <h2>Selected Post Details</h2>
                        <p>ID: {selectedPost.id}</p>
                        <h3>Title: {selectedPost.title}</h3>
                        <p>Body: {selectedPost.body}</p>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={selectedPost.thumbnailUrl} alt={`Thumbnail ${selectedPost.id}`} />
                            </div>
                            <div className='col-md-6'>
                                <img src={selectedPost.url} alt={`url ${selectedPost.id}`} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;

