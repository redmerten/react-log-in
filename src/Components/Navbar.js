/**
 * Created by AndreaMerten on 3/12/18.
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component{
  render(){
    return(
      <div style={styles.div}>
        <Link to="/SignUp" style={styles.link}>
          <button style={styles.button}>
            Sign Up
          </button>
        </Link>
        <Link to="/Login" style={styles.link}>
          <button style={styles.button}>
            Login
          </button>
        </Link>

      </div>
    )
  }
}

export default Navbar

const styles={
  div:{
    backgroundColor:'#0f0c0d',
    height:'80px',
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',


  },
  link:{
    margin:'1% 1%',

  },
  button:{
    fontSize:'150%',
    color:'white',
    backgroundColor:'#709dff',
    //border:'none',
    margin:'0% 1%',
    height:'60px',
    width:'200px',
    borderColor:'#709dff',
    borderRadius:'5%'
  }
}



