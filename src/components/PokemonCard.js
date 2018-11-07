import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    facing: true
  }

  render() {
    const { pokemons } = this.props
    return (
      <Card>
        <div>
          <div className="image">
            <img
            src={this.state.facing ? pokemons.sprites.back : pokemons.sprites.front} 
            onClick={() => this.setState({facing: !this.state.facing})}
            alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{pokemons.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              POKEMON HP HERE hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
