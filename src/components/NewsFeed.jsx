import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";  
import './styles/newsfeed.scss'

const NewsFeed = () => {

    const [news, setNews] = useState(null)

    useEffect(() => {
        const getNews = () => {
            fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7573b0e4b88d415e8e5d070778d0472d`)
            .then(res => res.json())
            .then(data => setNews(data))
            .catch(err => console.log(err))
        }
        getNews();
    }, [])

    console.log(news)

  return <div className='newsfeed'>
            <h2>BBC NEWS</h2>
            {news && news.articles.slice(0,5).map((article, index) => {
                return <Link to={article.url} key={index}>
                    <div className="newsfeed__article">
                            <h4>{article.title}</h4>
                            <img src={article.urlToImage} alt="" className='newsfeed__img'/>
                        </div>
                </Link>
            })}
        </div>;
};

export default NewsFeed;
