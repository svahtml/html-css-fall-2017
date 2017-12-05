import React, { Component } from 'react';
import Gallery from './components/Gallery';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.width = 1000;
    this.state= {
    photos: [],
    photos2: []
    };
  }
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(raw => raw.json())
      .then(photos => {
        const photo1 = photos.slice(100, 110).map(({albumId, id, title, url, thumbnailUrl}) => {
          return {
            albumId,
            id,
            title,
            url: url.replace(/\/([0-9]{3})\//g, `/${this.width}x600/`),
            thumbnailUrl
          }
        });

        const photo2 = photos.slice(200, 210).map(({albumId, id, title, url, thumbnailUrl}) => {
          return {
            albumId,
            id,
            title,
            url: url.replace(/\/([0-9]{3})\//g, `/${this.width}x600/`),
            thumbnailUrl
          }
        });
        this.setState({
          photos: photo1,
          photos2: photo2
        });
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Gallery</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.state.photos.length}</p>
        <Gallery photos={this.state.photos}/>
        <Gallery photos={this.state.photos2}/>
      </div>
    );
  }
}

export default App;
