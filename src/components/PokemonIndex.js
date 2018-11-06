import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'


class PokemonPage extends React.Component {

  constructor() {
    super()
    this.state = {
    pokemonData: [],
    search: ''
  }}

  changeSearch = (update) => {
    this.setState({search: update.target.value})
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemon => this.setState({pokemonData: pokemon}))
 }

 addPokemon = pokemon => {
  this.setState({ pokemonData: [...this.state.pokemonData, pokemon] })
}

deletePokemon = id => {
  fetch(`http://localhost:3000/pokemon/${id}`, {
    method: 'DELETE'
  }).then(resp => resp.json())
  .then(this.removePokemon(id))
}

removePokemon = id => {
const newPokemons = this.state.pokemonData.filter(pokemon => pokemon.id !== id)
this.setState({ pokemonData: newPokemons })
}

  render() {
    const filteredPokemon = this.state.pokemonData.filter(pokemon => pokemon.name.includes(this.state.search))

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search onSearchChange={e => this.changeSearch(e)} showNoResults={false} />
        <br />
        <PokemonCollection pokemonData={filteredPokemon} deletePokemon={this.deletePokemon}/>
       
        
      </div>
    )
  }
}

export default PokemonPage
