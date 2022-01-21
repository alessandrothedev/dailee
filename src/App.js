import Greeting from './components/Greeting'
import NavBar from './components/NavBar';
import NewsFeed from './components/NewsFeed';
import Weather from './components/Weather';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {

  return (
    <div className="App">
        <div className='container'>
            <NavBar />
            <header className='header'>
                <Greeting />
                <Weather />
            </header>
            <section className='user-section'>
                <div className="todo">aaaa</div>
                <Router>
                    <NewsFeed />
                </Router>
            </section>
        </div>
    </div>
  );
}

export default App;
