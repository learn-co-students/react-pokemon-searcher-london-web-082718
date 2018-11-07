import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
// import _ from 'lodash'

const API = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    filter: ''
  }

  fetchPokemons = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(resp => this.setState({pokemons: resp}))
  }

  sendFormDataSomewhere = (name, hp, frontUrl, backUrl) => {
    fetch(API, {
      method: 'POST',
      headers: { 'Accept': 'application/json',
      'Content-Type': 'application/json',
     },
      body: JSON.stringify({
        "name": name, 
        "abilities": hp, 
        "front": frontUrl, 
        "back": backUrl
      })
    }).then(resp => resp.json())
    .then(resp => this.setState({pokemons: resp}))
  }


  componentDidMount(){
    this.fetchPokemons()
  }

  updateFilter = newFilter => {
    this.setState({ filter: newFilter })
  }

  filterPokemon = () => {
    const pokemons = this.state.pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(this.state.filter.toLowerCase())
    )
    return pokemons
  }

  render() {
    // const { pokemons } = this.state
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onKeyUp={(event) =>{this.updateFilter(event.target.value)}}/>
        <br />
        <PokemonCollection pokemons={this.filterPokemon()}/>
        <br />
        <PokemonForm sendFormDataSomewhere={this.sendFormDataSomewhere()}/>
      </div>
    )
  }
}

export default PokemonPage
