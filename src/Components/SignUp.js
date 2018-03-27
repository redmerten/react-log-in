/**
 * Created by AndreaMerten on 3/12/18.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {storeLogin} from '../Actions'
import {checkEmail, checkPassword} from '../utilities/validateEmail'
import Input from './Input'

class Login extends Component{
  state={
    email:'',
    password:'',
    error:false
  }

  handleEmailChange=(event)=>{
    this.setState({email:event.target.value.trim()})
  }

  handlePasswordChange=(event)=>{
    this.setState({password:event.target.value.trim()})
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    let ready = true
    //validate
    let checkE = checkEmail(this.state.email)
    let checkP = checkPassword(this.state.password)
    console.log(checkE, checkP)
    //else set error message
    if (!checkE.format){
      alert('Please check email format')
      this.setState({email:''})
      ready=false
    }
    if (!checkP.length){
      alert('Password must be 8 characters long')
      this.setState({password:''})
      ready=false
    }
    if (!checkP.caps){
      alert('Password must have at least 1 Uppercase letter')
      this.setState({password:''})
      ready=false
    }
    if (!checkP.num){
      alert('Password must have at least 1 number')
      this.setState({password:''})
      ready=false
    }

    //send to store via action creator
    if (ready){
      this.props.storeLogin(this.state.email, this.state.password)
    }
  }


  render() {
    let {login} = this.props
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <h2 style={styles.h2}>Sign Up</h2>
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
        {login.email
          ?
            <h2 style={styles.h2}>You are all signed up</h2>


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
  },
  submit:{

  }
}


