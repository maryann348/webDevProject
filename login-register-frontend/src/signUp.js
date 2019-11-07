import React from 'react'
import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class signUp extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Middle name' placeholder='Middle name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
           <Form.Select
            fluid
            label='Gender'
            options={options}
            placeholder='Gender'
          />
          <Form.Input fluid label='Phone Number' placeholder='Phone Number' />
          <Form.Input fluid label='Email' placeholder='Email' />
           <Form.Input fluid label='Password' placeholder='Password' />
        </Form.Group>
       
       
        <Form.Button>SignUp</Form.Button>
      </Form>
    )
  }
}

export default signUp