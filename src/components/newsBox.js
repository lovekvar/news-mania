import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types'
import NewsItem from './newsItem';
import {CodeToCountry} from './country';
import Spinner from './spinner';

function NewsBox(props) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const standardWord = (word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    };
    let heading = '';
    let total_results = 100;
    if(props.country !== 'all'){
        heading += CodeToCountry[props.country];
    }
    useEffect(()=> {
        fetchNews();
    }, [props.country]);

    const fetchNews = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&pageSize=18&page=1&category=${props.category}`;
        setPage(2);
        if(props.country !== 'all')
            url += `&country=${props.country}`;
        let data = await fetch(url);
        let jsonResponse = await data.json();
        total_results = jsonResponse.totalResults;
        setArticles(jsonResponse.articles);
        // console.log(articles);
    };
    const fetchMoreNews = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&pageSize=18&page=${page}&category=${props.category}`;
        setPage(page+1);
        if(props.country !== 'all')
            url += `&country=${props.country}`;
        let data = await fetch(url);
        let jsonResponse = await data.json();
        setArticles(articles.concat(jsonResponse.articles));
        // console.log(articles);
    };

    return (
        <>
            <h2 className="text-center my-3">{heading} Top Headlines - {standardWord(props.category)} Category</h2>
            <InfiniteScroll
                dataLength={articles.length} //This is important field to render the next data
                next={fetchMoreNews}
                hasMore={ total_results > articles.length ? true : false }
                loader={<Spinner></Spinner>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                    <b></b>
                    </p>
                }
            >
                <div className="row justify-content-evenly">
                    {
                        articles.map((article, index)=> {
                            return <NewsItem key={index} title = {article.title} description = {article.description} url = {article.url} img_url = {article.urlToImage} author = {article.author} source = {article.source.name} time = {article.publishedAt}></NewsItem>
                        })
                    }
                </div>
            </InfiniteScroll>
        </>
    )
};

NewsBox.propTypes = { apiKey: PropTypes.string }
NewsBox.propTypes = { apiKey: PropTypes.string.isRequired };
NewsBox.defaultProps = {
    country: 'all',
    category: 'general'
};

export default NewsBox;

