import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const { pokemons } = this.props
    return (
      <Card.Group itemsPerRow={6}> Hi
        {pokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id} />)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
