import React, { Component } from 'react';
import Spinner from './spinner';
import InfiniteScroll from "react-infinite-scroll-component";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        };
        document.title = this.props.category
    }
    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=93601a255729453c95a5b63dbbb92569&page=${this.state.page}&pagesize=${this.props.pageSize}`
        this.setState({ loading: true })
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)
        this.setState({
            articles: data.articles,
            totalResults: data.totalResults,
            loading: false
        });
    }

    async componentDidMount() {
        this.updateNews()
    }

    // handleback = async () => {
    //     this.setState({ page: this.state.page - 1 })
    //     this.updateNews()
    // }

    // handlenext = async () => {
    //     this.setState({ page: this.state.page + 1 })
    //     this.updateNews()
    // }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=93601a255729453c95a5b63dbbb92569&page=${this.state.page}&pagesize=${this.props.pageSize}`
        this.setState({ loading: true })
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data);
        this.setState({
            articles: this.state.articles.concat(data.articles),
            totalResults: data.totalResults,
            loading: false
        });
    }
    render() {
        return (
            <>
                <div className="container col-lg-8 col-12 my-5">
                    <h1>News -Top {this.props.category} Headlines</h1>
                    {this.state.loading && <Spinner />}
                    <div className="news-container">
                        <InfiniteScroll
                            dataLength={this.state.articles.length}
                            next={this.fetchMoreData}
                            hasMore={this.state.articles.length !== this.state.totalResults}
                            loader={<Spinner />}
                        >
                            {!this.state.loading && this.state.articles.map((article, index) => (
                                article.title &&
                                article.description && (
                                    <div key={index} className="article">
                                        <h2 className="my-3">{article.title.slice(0, 45)}...</h2>
                                        {article.urlToImage && (
                                            <img className="img-fluid" src={article.urlToImage} alt="" />
                                        )}
                                        {/* <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                                        {article.author}
                                    </span> */}
                                        <p>Description: {article.description.slice(0, 25)}...</p>
                                        {article.source && article.source.name && (
                                            <p>Source: {article.source.name}</p>
                                        )}
                                        <p>Published At: {article.publishedAt}</p>
                                        {article.content && <p>{article.content.slice(0, 30)}</p>}
                                        <a className="btn btn-primary my-2" href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
                                    </div>
                                )
                            ))}
                        </InfiniteScroll>
                    </div>
                    {/* <div className='container d-flex justify-content-between fixed-bottom'>
                        <button disabled={this.state.page <= 1} className='btn btn-dark' onClick={this.handleback}>&larr; Back</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className='btn btn-dark' onClick={this.handlenext}>Next &rarr;</button>
                    </div> */}
                </div>
            </>
        );
    }
}

export default App;