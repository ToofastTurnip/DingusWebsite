import jim from './images/fortnite-jim.jpg';
import { GiphyFetch } from '@giphy/js-fetch-api'
import TextList from './components/TextList'
import './App.css';
import { Component } from 'react';
import Draggable from 'react-draggable';

const giphy = new GiphyFetch('SWM5VsxShEASc5AF4spwZBmU0Iw85bPM')
const [results, setResults] = [];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      setResults: [],
    }
    
    
  }

  myFunction() {
    alert("You shouldn't have clicked that");
  }

  handleSubmit() {
    const apiCall = async () => {
      const res = await giphy.animate('dingus')
      setResults(res.data)
    }
    apiCall()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Draggable>
            <img src={jim} className="App-logo" alt="logo" />
          </Draggable>
        </header>
        <body className="App-body">
          <h1>
            Hey dude ckick this <button onClick={() => this.myFunction()}>this</button>
          </h1>
        </body>
        <footer>
          <h1>Dingus gif</h1>
          <button className='submit-btn' onClick={this.handleSubmit}>Submit</button>
          {results && <TextList gifs={results}  />}
        </footer>
      </div>
    );
  }

}

export default App;
