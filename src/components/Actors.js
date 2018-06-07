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

  getIdOfMovie = (formattedMovieTitle) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=7773e0e933d9ba79ea13c22378a8839d&query=${this.formattedMovieTitle}`
    fetch(url).then(response => {
      //let idOfMovie = response.json()
      response.json().then(results => {let idOfMovie = results.results[0].id; return idOfMovie})
      console.log(results)
      //return idOfMovie;
    })
  }

  putActorsInArray = (jsonResponse) => jsonResponse.cast.map(obj => obj.name)

  componentDidMount(){


    // const url = `https://api.themoviedb.org/3/search/movie?api_key=7773e0e933d9ba79ea13c22378a8839d&query=${this.formattedMovieTitle}`
    //
    // const response = await fetch(url)
    // const json = await response.json()

    this.setState({id: this.getIdOfMovie(this.formattedMovieTitle)})
  }



  async getListOfActors(id) {
    const i = id
    const urlWithId = `https://api.themoviedb.org/3/movie/${i}/credits?api_key=7773e0e933d9ba79ea13c22378a8839d`

    const response = await fetch(urlWithId)
    const json = await response.json()
    this.setState({actors: this.putActorsInArray(json)})
  }

  // componentWillReceiveProps(nextProps){
  //   console.log(`I am your next movie title ${nextProps.movie}`)
  //   this.setState("", "")
  //
  // }

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
