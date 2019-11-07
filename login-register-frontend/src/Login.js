import React, {Component} from 'react'
import { Button,  Form,} from 'semantic-ui-react'
// import { Form } from 'semantic-ui-react'
// import signUp from '../Component/signUp';



class Login extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group   >
          <Form.Input   placeholder='username' icon='user' iconPosition='left' className = 'input' />
          <Form.Input   placeholder='password' icon='lock' iconPosition='left' type ='password' className = 'input' />
          <Form.Button>Login</Form.Button>
        </Form.Group>
       
      </Form>
    )
  }
}



// const options = [
//   { key: 'm', text: 'Male', value: 'male' },
//   { key: 'f', text: 'Female', value: 'female' },
//   { key: 'o', text: 'Other', value: 'other' },
// ]
// class Login extends Component {
//   state = {}

//   handleChange = (e, { value }) => this.setState({ value })

//   render() {
//     const { value } = this.state
//     return (
//       <Form>
//         <Form.Group widths='equal'>
//           <Form.Input fluid label='First name' placeholder='First name' />
//           <Form.Input fluid label='Middle name' placeholder='Middle name' />
//           <Form.Input fluid label='Last name' placeholder='Last name' />
//            <Form.Select
//             fluid
//             label='Gender'
//             options={options}
//             placeholder='Gender'
//           />
//           <Form.Input fluid label='Phone Number' placeholder='Phone Number' />
//           <Form.Input fluid label='Email' placeholder='Email' />
//            <Form.Input fluid label='Password' placeholder='Password' />
//         </Form.Group>
       
       
//         <Form.Button>SignUp</Form.Button>
//       </Form>
//     )
//   }
// }


// render(){
//   return (
//     <div></div>
//   );
  
// }

export default Login
