import React from 'react'
import styled from 'styled-components'
import Me from './../assets/Images/profile-img.png'
import { motion } from 'framer-motion'

const Box = styled(motion.div)` 

    position:absolute;
    left:50%; 
    top:50%;
    transform:translate(-50%,-50%);

    width:65vw;  
    height:55vh;
    display:flex;
    z-index:1; 
@media(min-width:480px){
background:linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) top,
        linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) bottom;
        background-repeat:no-repeat;
        background-size:100% 2px;
        border-left:2px solid ${props=>props.theme.body};
        border-right:2px solid ${props=>props.theme.text};  
}
    
@media(max-width:480px){ 
    flex-direction:column; 
    background:linear-gradient(
        to bottom,
        ${props => props.theme.text} 50%,
        ${props => props.theme.body} 50%) right,
        linear-gradient(
        to bottom,
        ${props => props.theme.text} 50%,
        ${props => props.theme.body} 50%) left;
        background-repeat:no-repeat;
        background-size:100% 2px;
        border-top:2px solid ${props=>props.theme.body};
        border-bottom:2px solid ${props=>props.theme.text}; 
        
}
`

const SubBox = styled.div`
    width:50%; 
    position:relative;
    display:flex;

@media(max-width:480px){
    height:50%;
    width:100%;
     .upper{
        border-right:2px solid ${props => props.theme.body};
        border-left:2px solid ${props => props.theme.body};
    }
    .lower{
        width:100%;
        border-right:2px solid ${props => props.theme.text};
        border-left:2px solid ${props => props.theme.text};
    } 
}

.pic{
    position:absolute;
    bottom:0;
    left:50%;
    transform:translate(-50%,0%);
    width:100%;
    height:auto;
@media(max-width:480px){ 
    height:100%;
    width:auto;
}
}
`

const Text = styled.div`
    font-size:calc(1em + 1.5vw); 
    padding:2rem;
    color:${props => props.theme.body};
    cursor:pointer;

    display:flex;
    flex-direction:column;
    justify-content:space-evenly;

&>*:last-child{
    font-size:calc(0.5rem + 1.5vw);
    font-weight:300;
    color:${props => `rgba(${props.theme.bodyRgba},0.6)`};
}
`
const Intro = (props) => {
  return (
    <Box
     initial={{height:0}}
     animate={{height:'55vh'}}
     transition={{type:'spring',duration:2,delay:1}}
    >
        <SubBox>
            <Text className='upper'>
                <h1>Hi,</h1>
                <h3>I am Saravana,</h3>
                <h6>I am intrested to develop websites</h6> 
            </Text>
        </SubBox>
        <SubBox >
            <div className='lower'> 
                <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1,delay:2}}
                >
                    <img className='pic' src={Me} alt="profile"/>  
                </motion.div>
            </div>
        </SubBox>
    </Box>
  )
}

export default Intro