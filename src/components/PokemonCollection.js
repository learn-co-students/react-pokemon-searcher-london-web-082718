import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const { pokemons } = this.props
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {pokemons.map(pokemons => <PokemonCard pokemons={pokemons} key={pokemons.id}/>)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
