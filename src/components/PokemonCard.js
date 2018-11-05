import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    cardClicked: true
  }

  render() {
    const { pokemon } = this.props
    const { cardClicked } = this.state
    return (
      <Card>
        <div>
          <div className="image" onClick={() => this.setState({cardClicked: !cardClicked})}>
          {!cardClicked ? 
            <img src={pokemon.sprites.back} alt="pokemon back" />
            :
            <img src={pokemon.sprites.front} alt="pokemon front" />
          }
          </div>
          <div className="content">
            <div className="header">{pokemon.name.toUpperCase()}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
             HP: { pokemon.stats[5]["value"] }
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
