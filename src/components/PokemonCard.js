import React from 'react'
import { Card } from 'semantic-ui-react'


class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  changeClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <Card>
        <div>
          <div className="delete" onClick={() => this.props.deletePokemon(this.props.pokemon.id)}>x</div>
          <div className="image">
            <img alt="oh no!" src={this.state.clicked ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front} onClick={this.changeClick}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(s => s.name === 'hp').value || 50}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
