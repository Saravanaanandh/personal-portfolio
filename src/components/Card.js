import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../Allsvgr.js';
import { motion } from 'framer-motion';


const Box = styled(motion.li)` 
    width:16rem;
    height:40vh;
    padding:1.5rem 1rem;
    color:${props => props.theme.body};
    background-color:${props => props.theme.text}; 
    margin-right:8rem;
    border:1px solid ${props => props.theme.text};
    border-radius:0 50px 0 50px;
    display:flex;
    justify-content:space-between;  
    flex-direction:column;
    transition:all 0.3s ease; 
&:hover{
    background-color:${props => props.theme.body};
    color:${props => props.theme.text}; 
   
}

`
const Title = styled.h2`
    font-size:calc(0.5vw + 1em);
`
const Description = styled.h2`
    font-size:calc(0.3vw + 0.8em);
    font-family:'karla', sans-serif;
    font-weight:500;
`

const HashTags = styled.div`
    border-top:1px solid ${props => props.theme.body};
    padding-top:0.5rem;
    display:flex;
    flex-wrap:wrap; 
    width:100%;

${Box}:hover &{
    border-top:1px solid ${props => props.theme.text};
}
`
const Tag = styled.span`
    margin-right:1rem;
    font-size:calc(0.8em + 0.3vw);
`

const Footer = styled.footer`
    display:flex;
    justify-content:space-between;  
`

const Link = styled(NavLink)`
    text-decoration:none;
    background-color:${props => props.theme.body};
    color:${props => props.theme.text};
    padding:0.5rem calc(2rem + 2vw);
    font-size: calc(1em + 0.5vw);
    border-radius:0 0 0 50px;

${Box}:hover &{
    background-color:${props => props.theme.text};
    color:${props => props.theme.body};
}
`

const Git = styled(NavLink)`
    text-decoration:none;
    color:inherit;
    ${Box}:hover &{
        &>*{
            fill:${props => props.theme.text};
        }
    }
`
const Item = {
    hidden:{scale:0},
    show:{
        scale:1,
        transition:{
            type:'spring',
            duration:0.5,
        }
    }
}
const Card = (props) => {
    console.log(props)
    const { id,name, description, tags, demo, github} = props.data;

  return (
    <Box key={id} variants={Item}>
        <Title>
            {name}
        </Title>
        <Description>
            {description}
        </Description>
        <HashTags>
            {tags.map((tag,id) => <Tag key={id}>#{tag}</Tag>)} 
        </HashTags>
        <Footer>
            <Link to={{pathname:`${demo}`}} target="_blank">
                Visit
            </Link>
            <Git to={{pathname:`${github}`}}>
                <Github width={30} height={30} />
            </Git>
        </Footer>
    </Box>
  )
}

export default Card