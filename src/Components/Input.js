/**
 * Created by AndreaMerten on 3/14/18.
 */

import React from 'react'

const Input = ({label, value, onChange, style}) =>{
  return(
    <div style={styles.div}>
      <label htmlFor="email" style={styles.label}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        style={style}
      />
    </div>
  )
}

export default Input

const styles={
  div:{
    display:'flex',
    margin:'3% 0%',
    justifyContent:'space-between',
    alignItems:'center'
  },
  label:{
    fontSize:'150%',
    margin:'0% 2%',
  }
}