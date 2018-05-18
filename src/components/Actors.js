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
    const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=7773e0e933d9ba79ea13c22378a8839d&query=' + {formattedMovieTitle})
    const json = await response.json()
    this.setState({id: json.results[1].id})
  }

  render(){
    return(
      <div>
        <h1>Actors Featured in {this.props.movie}</h1>
        <h2>{this.state.id}</h2>
      </div>
    )
  }
}
export default Actors


//this.formattedMovieTitle = this.props.movie.split(" ").join("+")
