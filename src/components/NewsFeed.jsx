import React, { useState, useEffect} from 'react'; 
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
                return <div className="newsfeed__article" key={index}>
                            <a href={article.url} target="_blank">
                                <h4>{article.title}</h4>
                                <img src={article.urlToImage} alt="" className='newsfeed__img'/>
                            </a>
                        </div>
            })}
        </div>;
};

export default NewsFeed;
