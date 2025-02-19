import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Box = styled(motion(NavLink))`
    text-decoration:none;
    width:calc(10rem + 15vw);
    height:20rem;
    padding:1rem; 
    color:${props => props.theme.text};
    backdrop-filter:blur(2px);
    box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
    border:2px solid ${props => props.theme.text};
    cursor:pointer;

    display:flex;
    flex-direction:column;
    z-index:2;
@media(max-width:480px){
    width:calc(8rem + 12vw);
    height:12rem;
}
&:hover{
    color:${props => props.theme.body};
    background-color:${props => props.theme.text};
    transition:all 0.3s ease;

}

`

const Image = styled.div`
    background-image:${props => `url(${props.img})`};
    background-size:cover;
    background-position:center;
    width:100%;
    height:60%;
    border:1px solid transparent;
@media(max-width:480px){
    height:100%;
}
${Box}:hover &{
    border:1px solid ${props => props.theme.body}
}
`
const Text = styled.h3`
    color:inherit;
    padding:0.5rem 0; 
    font-family:'karla',sans-serif;
    font-weight:700;
    border-bottom:1px solid ${props => props.theme.text};

@media(max-width:480px){
    padding:0.3rem 0; 
}
${Box}:hover &{
    border-bottom:1px solid ${props => props.theme.body};
}
`
const HashTags = styled.div`
    padding:0.5rem 0;

@media(max-width:480px){
    padding:0.3rem 0; 
}
`
const Tag = styled.span`
    padding-right:0.5rem;
@media(max-width:480px){
    padding-right:0.3rem; 
}
`

const Date = styled.span`
    padding:0.5rem 0;
@media(max-width:480px){
    padding:0.3rem 0; 
}
`
const Container = styled(motion.div)``

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
const BlogComponent = (props) => {
        const {date, link, tags, imgSrc, name} = props.blog;
  return (
    <Container
        variants={Item}
    >
        <Box target="_blank" to={{pathname:link}}>
        <Image img={imgSrc}/>
        <Text>{name}</Text>
        <HashTags>
            {tags.map((tag,id) => <Tag key={id}>#{tag}</Tag>)} 
        </HashTags>
        <Date>
            {date}
        </Date>
    </Box>
    </Container>
  )
}

export default BlogComponent 