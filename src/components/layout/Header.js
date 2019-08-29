// for header we are using functional component. This is just like having render, We can use any style.
import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default Header;