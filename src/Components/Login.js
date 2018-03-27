/**
 * Created by AndreaMerten on 1/17/18.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {storeLogin} from '../Actions'
import Input from './Input'

export class Login extends Component{
  state={
    email:'',
    password:'',
    valid:false,
    invalidEntry: false
  }

  handleEmailChange=(event)=>{
    this.setState({email:event.target.value.trim()})
  }

  handlePasswordChange=(event)=>{
    this.setState({password:event.target.value.trim()})
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    const {email, password} = this.props.login
    //validate
    if (this.state.email === email
        &&
        this.state.password === password){
      this.setState({valid:true})
    }
    else{
      alert('Email or Password Incorrect')
      this.setState({valid:false, email:'', password:''})
    }
  }


  render() {
    let {login} = this.props
    console.log(login)
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <h2 style={styles.h2}>Login</h2>
        <Input
          value={this.state.email}
          onChange={(event)=>this.handleEmailChange(event)}
          style={styles.field}
          label='Email'
        />
        <Input
          value={this.state.password}
          onChange={(event)=>this.handlePasswordChange(event)}
          style={styles.field}
          label='Password'
          />

        <button
          type="submit"
          style={styles.button}
          onSubmit={(e)=>this.handleSubmit(e)}
        >
          Submit
        </button>
        {this.state.valid
          ?
          <h2 style={styles.h2}>You successfully logged in</h2>
          :
          <div/>
        }
      </form>
    )

  }
}

const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps, {storeLogin})(Login)



const styles={
  form:{
    display:'flex',
    //width:'50%',
    margin:'5% 38%',
    flexDirection:'column',
    justifyContent:'flex-begin',
    //alignItems:'center'
  },
  h2:{
    alignSelf:'center'
  },
  div:{
    display:'flex',
    margin:'3% 0%',
    justifyContent:'space-between',
    alignItems:'center'
  },
  label:{
    fontSize:'150%',
    margin:'0% 2%',
  },
  field:{
    height:'30px',
    width:'250px',
    fontSize:'125%',
    textIndent:'5px',
    margin:'0% 2%'
  },
  button:{
    height:'40px',
    width:'250px',
    margin:'3% 0%',
    alignSelf:'center',
    backgroundColor:'#709dff',
    borderRadius:'5%',
    fontSize:'150%',

  }

}
