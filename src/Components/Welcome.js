/**
 * Created by AndreaMerten on 3/14/18.
 */
import React from 'react'

const Welcome = () =>{
  return(
    <div style={styles.div}>
      <h1>Welcome to Login</h1>
    </div>
  )
}

export default Welcome

const styles={
  div:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100vh'

  },

}