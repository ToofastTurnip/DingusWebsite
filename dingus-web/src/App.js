import jim from './images/fortnite-jim.jpg';
import './App.css';
import { Component } from 'react';
import Draggable from 'react-draggable';

class App extends Component {

  myFunction() {
    alert("You shouldn't have clicked that");
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
      </div>
    );
  }

}

export default App;
