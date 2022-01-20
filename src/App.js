import Greeting from './components/Greeting'
import Weather from './components/Weather';

function App() {


  return (
    <div className="App">
        <div className='container'>
            <Greeting />
            <Weather />
        </div>
    </div>
  );
}

export default App;
