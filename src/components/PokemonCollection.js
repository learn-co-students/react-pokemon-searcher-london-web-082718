import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'


class PokemonCollection extends React.Component {

  displayAllPokemon = () => {
    return this.props.pokemonData.map((pokemon, idx) => <PokemonCard pokemon={pokemon} key={idx} deletePokemon={this.props.deletePokemon}/> )
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.displayAllPokemon()}
        </Card.Group>
    )
  }

}

export default PokemonCollection;
