import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './newsItem';

function NewsBox(props) {
    const [articles, setArticles] = useState([]);
    const standardWord = (word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    };
    useEffect(()=> {
        getNews();
    }, []);

    const getNews = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?apiKey=e7393cf1bba847bca323d7ea81da9978&category=${props.category}`;
        if(props.country !== 'all')
            url += `&country=${props.country}`;
        let data = await fetch(url);
        let jsonResponse = await data.json();
        setArticles(jsonResponse.articles);
        console.log(articles);
    };

    return (
        <>
            <h2 className="text-center my-3">Top Headlines - {standardWord(props.category)} Category</h2>
            <div className="row justify-content-evenly">
                {
                    articles.map((article)=> {
                        return <NewsItem title = {article.title} description = {article.description} url = {article.url} img_url = {article.urlToImage}></NewsItem>
                    })
                }
            </div>
        </>
    )
};

NewsBox.propTypes = {

};

NewsBox.defaultProps = {
    country: 'all',
    category: 'general'
};

export default NewsBox;

