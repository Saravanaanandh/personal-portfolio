import React from 'react'
import styled from 'styled-components'
import {darkTheme} from './../components/Themes.js' 

const LogoIcon = styled.h1`
  color:${props => props.color === 'dark'? darkTheme.text : darkTheme.body}; 
  display:inline-block;
  position:fixed;
  top:2rem;
  left:2rem;
  font-family:'Pacifico',cursive;
  z-index:3;
  
@media(max-width: 480px){
  left:1rem; 
  font-size:20px;
}
`
const Logo = (props) => {
  return (
   <LogoIcon 
    color={props.theme}
    
   >
        SK
   </LogoIcon>
  )
}

export default Logo