import React from 'react'
import { Form } from 'semantic-ui-react'
import PokemonCollection from './PokemonCollection'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
      // don't need this.state for the value - prior to the e.target.value
    })
  }

  onSubmit = (name, hp, frontImage, backImage) => {
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'stats': {
          'value': hp,
          'name': "name"
        },
        'sprites' : {
          'front': frontImage,
          'back': backImage
        }
      })
    }).then(resp => resp.json())
    
  }


  // onSubmit - method to post to db.json - makes the fetch

  //  fake onSubmit - optimistic

  // onSubmit = (name, hp, frontImage, backImage) => {
  //   fetch('http://localhost:3000/pokemon', {
  //     method: "POST",
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //       'name': name,
  //       'stats': {
  //         'value': hp,
  //         'name': "hp"
  //       },
  //       'sprites' : {
  //         'front': frontImage,
  //         'back': backImage
  //       }
  //     })
  //   }).then(resp => resp.json())
    
  // }


  // or re-render the fetch GET when you've submitted Poke to db to get the whole pokelist again

  // needs to use a controlled form
  // check which lecture we did controlled forms in 

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name"  onChange={this.handleChange} value={this.state.name} />
            
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp}  />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl}  />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl"  value={this.state.backUrl} />
          </Form.Group>
          {/* <Form.Button onSubmit={this.onSubmit}>Submit></Form.Button> */}
        </Form>
      </div>
    )
  }
}

export default PokemonForm
