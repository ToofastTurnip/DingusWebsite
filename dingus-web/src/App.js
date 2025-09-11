import jim from './images/fortnite-jim.jpg';
import './App.css';
import { Component } from 'react';
import Draggable from 'react-draggable';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerVisible: true,
      results: [],
      setResults: [],
    }
    
    
  }

  myFunction() {
    alert("You shouldn't have clicked that");
  }

  handleSubmit = async () => {
    const apiKey = 'SWM5VsxShEASc5AF4spwZBmU0Iw85bPM';
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=dingus&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

    try {
      const response = await fetch(apiUrl);
      const gifData = await response.json();
      const imageUrl = gifData.data[0].images.original.url;
      document.body.style.backgroundImage = `url(${imageUrl})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      this.setState({ headerVisible: false });
    } catch (error) {
      console.error("Failed to fetch GIF:", error);
      alert("Ran out of api key, fuckhead!");
    }
  }

  render() {
    return (
      <div className="App">
        <header className={`App-header ${!this.state.headerVisible ? 'hidden' : ''}`}>
          <Draggable>
            <div>
              <img src={jim} className="App-logo" alt="logo" />
            </div>
          </Draggable>
        </header>
        <body className="App-body">
          <h1>
            Hey dude ckick this <button onClick={() => this.myFunction()}>this</button>
          </h1>
        </body>
        <footer>
          <h1>Dingus gif</h1>
          <button className='submit-btn' onClick={this.handleSubmit}>Gimmie</button>
        </footer>
      </div>
    );
  }

}

export default App;
