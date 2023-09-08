import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }

    async componentDidMount() {
        try {
            const url =
                'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=93601a255729453c95a5b63dbbb92569&page2 pagesize=20';
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            this.setState({ articles: data.articles, loading: true, totalResults: data.totalResults });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    handleback = async () => {
        let url =
            `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=93601a255729453c95a5b63dbbb92569&page=${this.state.page - 1}&pagesize=20`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        this.setState({
            page: this.state.page - 1,
            articles: data.articles
        })
    }

    handlenext = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
        } else {

            const url =
                `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=93601a255729453c95a5b63dbbb92569&page=${this.state.page + 1}&pagesize=20`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            this.setState({
                page: this.state.page + 1,
                articles: data.articles
            })
        }
    }

    render() {
        return (
            <>
                <div className="container col-lg-8 col-12 my-5">
                    <h1>News Articles</h1>
                    <div className="news-container">
                        {this.state.articles.map((article, index) => (
                            article.title &&
                            article.description && (
                                <div key={index} className="article">
                                    <h2 className="my-3">{article.title.slice(0, 45)}...</h2>
                                    {article.urlToImage && (
                                        <img className="img-fluid" src={article.urlToImage} alt="" />
                                    )}
                                    <p>Author: {article.author}</p>
                                    <p>Description: {article.description.slice(0, 25)}...</p>
                                    {article.source && article.source.name && (
                                        <p>Source: {article.source.name}</p>
                                    )}
                                    <p>Published At: {article.publishedAt}</p>
                                    {article.content && <p>{article.content.slice(0, 30)}</p>}
                                    <a className="btn btn-primary my-2" href={article.url} target="_blank" rel="noopener noreferrer">See More</a>
                                </div>
                            )
                        ))}
                    </div>
                    <div className='container d-flex justify-content-between'>
                        <button disabled={this.state.page <= 1} className='btn btn-dark' onClick={this.handleback}>&larr; Back</button>
                        <button className='btn btn-dark' onClick={this.handlenext}>Next &rarr;</button>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
