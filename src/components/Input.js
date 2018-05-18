import React from 'react'

class Input extends React.Component {
  constructor(props){
    super(props);
    this.state = { movie: ""};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    this.props.onMovieAdded(this.state)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Movie Title:
          <input type="text" value={this.state.value} onChange={this.handleChange}/> <br/>
        </label>
        <input type="submit" value="Submit To See Actors"/>
      </form>
    )
  }
}

export default Input
