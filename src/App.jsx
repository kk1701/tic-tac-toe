import { useState } from 'react'
import './App.css'
// import Icon from './components/Icon/Icon'
import Grid from './components/Grid/Grid'

function App() {

  return (
    <>
      <Grid numberOfCards = {9}/>
    </>
  )
}

export default App;


// When a parent is re-rendered, the children are bound to re-render even when there is no need.
// To avoid this, we use memo.