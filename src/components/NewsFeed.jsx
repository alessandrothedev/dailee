import React, { useState, useEffect} from 'react'; 
import './styles/newsfeed.scss'

const NewsFeed = () => {

    const [news, setNews] = useState(null)

    useEffect(() => {
        const getNews = () => {
            fetch(`https://api.thenewsapi.com/v1/news/top?api_token=bTEYIQMEEVAQTl7x43k4wjeJD04GSKBVnYghoAxw&language=en&categories=tech`)
            .then(res => res.json())
            .then(data => setNews(data))
            .catch(err => console.log(err))
            console.log(news)
        }
        getNews();
    }, [])

    console.log(news)

  return <div className='newsfeed'>
            <h2>LATEST TECH NEWS</h2>
            {news && news.data.slice(0,5).map((data, index) => {
                return <div className="newsfeed__article" key={index}>
                            <a href={data.url} target="_blank">
                                <h4>{data.title}</h4>
                                <img src={data.image_url} alt="" className='newsfeed__img'/>
                            </a>
                        </div>
            })}
        </div>;
};

export default NewsFeed;
