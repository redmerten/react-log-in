/**
 * Created by AndreaMerten on 3/12/18.
 */
//emailregex.com has great regex for emails

// const another = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const checkEmail = (email) => {
  let check={format:true}
  email.trim() //better to trim before it get here
  console.log(email)
  // if (email.length<8)
  //   check.length=false
  if (!re.test(email))
    check.format=false
  console.log('from checkEmail', check)
  return check
}

export const checkPassword = (email) =>{
  let check={
    length:false,
    caps:false,
    num:false
  }
  if (email.length>7)
    check.length=true

  //
  check.caps = email.split('')
    .findIndex((e)=> (isNaN(e) && e === e.toUpperCase())) !== -1 ? true : false
  check.num = email.split('').findIndex((e)=> !isNaN(e)) !== -1 ? true : false
  return check
}


