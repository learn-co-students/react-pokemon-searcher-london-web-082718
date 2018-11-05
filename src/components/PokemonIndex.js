import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    filter:'',
    pokemons : []
  }

  // get the pokemons
  componentDidMount() {
    return fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(pokemons => this.setState( {pokemons: pokemons} ))
  }

  // a Posted pokemon will get added to existing pokemons array
  addPokemon = (newPokemon) => {
    this.setState({ pokemons: [...this.state.pokemons, newPokemon] })
  }

  // filterPokemon = () => {
  //   let filteredPokemon = this.state.pokemons.filter(p =>
  //     p.name.toLowerCase().includes(this.state.filter.toLowerCase())
  //   )
  //   return filteredPokemon
  // }

  updateFilter = (newFilter) => {
    this.setState({ filter: newFilter })
  }


  render() {
    console.log(pokemons)
    const { pokemons } = this.state
    const filteredPokemons = pokemons.filter(p =>
      p.name.includes(this.state.filter)
    )
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search 
        // onKeyUp={event => this.updateFilter(event.target.value)}
        onSearchChange={_.debounce((event, data) => this.updateFilter(data.value),500)}
        // onSearchChange is a Semantic UI prop for Search...
        // https://react.semantic-ui.com/modules/search/
        // https://blog.flowandform.agency/debounce-in-react-fc5ed305a0e8
        showNoResults={false}
        />
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <PokemonCollection  pokemons={filteredPokemons}  />
        
      </div>
    )
  }
}

export default PokemonPage
