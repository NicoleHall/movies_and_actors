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

  async componentDidMount(formattedMovieTitle) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=7773e0e933d9ba79ea13c22378a8839d&query=${this.formattedMovieTitle}`
    const response = await fetch(url)
    const json = await response.json()
    this.setState({id: json.results[1].id})

    const urlWithId = `https://api.themoviedb.org/3/movie/${this.state.id}/credits?api_key=7773e0e933d9ba79ea13c22378a8839d`
    const actorResponse = await fetch(urlWithId)
    const actorJson = await actorResponse.json()
    this.setState({actors: this.putActorsAndCharacterInArrayOfArrays(actorJson)})
  }

  putActorsAndCharacterInArrayOfArrays = (jsonResponse) => jsonResponse.cast.map(function(obj){
    const ActorAndCharObj = []
    ActorAndCharObj[0] = obj.character
    ActorAndCharObj[1] = obj.name
    return ActorAndCharObj
  })

  render(){
    return(
      <div>
        <h1>Actors Featured in {this.props.movie}</h1>
        <ol>{this.state.actors.map( actor => <li>{actor[0]}  :  {actor[1]}</li>)}</ol>
      </div>
    )
  }
}
export default Actors
