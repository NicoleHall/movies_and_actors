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

  putActorsInArray = (jsonResponse) => jsonResponse.cast.map(obj => obj.name)

  // actorList = this.state.actors.map( actor => <li>{actor}</li>)

  async componentDidMount() {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=7773e0e933d9ba79ea13c22378a8839d&query=${this.formattedMovieTitle}`

    const response = await fetch(url)
    const json = await response.json()
    this.setState({id: json.results[1].id}, () => this.getListOfActors(json.results[1].id))

    //this.getListOfActors()
  }

  async getListOfActors(id) {
    const i = id
    const urlWithId = `https://api.themoviedb.org/3/movie/${i}/credits?api_key=7773e0e933d9ba79ea13c22378a8839d`

    const response = await fetch(urlWithId)
    const json = await response.json()
    this.setState({actors: this.putActorsInArray(json)})
  }

  render(){
    return(
      <div>
        <h1>Actors Featured in {this.props.movie}</h1>
        <h1>{this.state.id}</h1>
        <ul>{this.state.actors.map( actor => <li>{actor}</li>)}</ul>
      </div>
    )
  }
}
export default Actors
