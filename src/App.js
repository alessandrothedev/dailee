import Greeting from './components/Greeting'
import NavBar from './components/NavBar';
import NewsFeed from './components/NewsFeed';
import Weather from './components/Weather';
import Todo from './components/Todo';
import './App.scss';

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
                    <Todo />
                    <NewsFeed />
            </section>
        </div>
    </div>
  );
}

export default App;
