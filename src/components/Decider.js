import React from 'react'
import PromptToEnterMovie from './PromptToEnterMovie'
import Actors from './Actors'

const Decider = (props) => {
  if (props.movie == "first movie") {
    return <PromptToEnterMovie/>

  } else {
    return <Actors movie={props.movie}/>
  }
}

export default Decider
