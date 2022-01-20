import Greeting from './components/Greeting'
import NavBar from './components/NavBar';
import Weather from './components/Weather';

function App() {


  return (
    <div className="App">
        <div className='container'>
            <NavBar />
            <div className="header">
                <Greeting />
                <Weather />
            </div>
        </div>
    </div>
  );
}

export default App;
