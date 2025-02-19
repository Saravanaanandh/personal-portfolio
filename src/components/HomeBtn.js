import { HomeIcon } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Home = styled.button`
    position:fixed;
    top:2rem;
    left:48%;
    transform:translate(-50%,0%)
    padding:0.3rem;
    width:2.5rem;
    height:2.5rem;
    border-radius:50%;
    border:1px solid #000;
    background-color:#fff;
    color:#000;
    transition: all 0.4s ease-in-out;
    cursor:pointer;
    z-index:3;
    display: flex;
    justify-content: center;
    align-items:center;

@media(max-width:480px){
    width:2rem;
    height:2rem;
    left:45%;
}
&:hover{
    background-color:#000;
    color:#fff;
    box-shadow: 0 0 1.5px 1.5px #fff, 0 0 3px 3px #000;
}
&>*:first-child{
    text-decoration:none;
    color:inherit; 
}
.home{
    font-size:10px;
    width:20px;
    height:20px;
}
`


const HomeBtn = () => {
  return (
    <Home>
        <NavLink to={'/'}>
            <HomeIcon className='home'/> 
        </NavLink>
    </Home>
  )
}

export default HomeBtn