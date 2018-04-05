import React, { Component } from 'react';
import '../App.css';
import Header from './Header'
import Movie from './Movie'
import {initialMovies} from '../movies'
import {additionalMovies} from '../movies'

class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: initialMovies
    }
    this.loadAdditionalMovies = this.loadAdditionalMovies.bind(this)
  }

  loadAdditionalMovies() {
    let currentMovies = {...this.state.movies}
    let newMovies = Object.assign(currentMovies, additionalMovies)
    this.setState({ movies: newMovies })
  }

  render() {
    return (
      <div className="App">
        <Header text="Discover Movie Mojo App!"/>
        <p className="App-intro">Sharing a few of our favorite movies</p>
        <div className="movies">
          {
              Object
                .keys(this.state.movies)
                .map(key => <Movie key={key} meta={this.state.movies[key]}/>)
          }
        </div>
        <div className="add-movies"><button onClick={this.loadAdditionalMovies}>Load more...</button></div>
      </div>
    );
  }
}

export default App;
