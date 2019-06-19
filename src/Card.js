import React from 'react'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    width: '100%',
    height: '100vh',
  },
  input:{
    fontSize:60
  } 
}

export default function Card(props){
  return (
    <div style={styles.root}>
      {props.children}
    </div>
  )
}