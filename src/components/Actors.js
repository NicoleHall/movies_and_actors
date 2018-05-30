import React from 'react'

class Actors extends React.Component {
  constructor(props){
    super(props)

    this.formattedMovieTitle = this.props.movie.split(" ").join("+")
  }

  state = {
    actors: [],
    id: ""
  }

  async componentDidMount() {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=7773e0e933d9ba79ea13c22378a8839d&query=${this.formattedMovieTitle}`

    const response = await fetch(url)
    const json = await response.json()
    this.setState({id: json.results[1].id})

    this.getListOfActors()
  }

  async getListOfActors() {
    const urlWithId = `https://api.themoviedb.org/3/movie/${this.state.id}/credits?api_key=7773e0e933d9ba79ea13c22378a8839d`

    const response = await fetch(urlWithId)
    const json = await response.json()
    this.setState({actors: json.cast[0].name})
  }

  render(){
    return(
      <div>
        <h1>Actors Featured in {this.props.movie}</h1>
        <h2>{this.state.id}</h2>
        <h2>{this.state.actors}</h2>
      </div>
    )
  }
}
export default Actors


//this.formattedMovieTitle = this.props.movie.split(" ").join("+")
