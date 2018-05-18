import React, { Component } from 'react';
import './App.css';
import Actors from './components/Actors'
import Input from './components/Input'
import PromptToEnterMovie from './components/PromptToEnterMovie'
import Decider from './components/Decider'

class App extends Component {

  state = {movie: "first movie"}

  addMovie = (movieFromForm) => {
    this.setState(prevState => (
      {movie: movieFromForm.value}
    ))
  }

  render() {
    return (
      <div>
        <Decider movie={this.state.movie}/>
        <Input onMovieAdded={ this.addMovie }/>
      </div>
    );
  }
}

export default App;
