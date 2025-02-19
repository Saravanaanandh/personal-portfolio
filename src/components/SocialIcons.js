
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, LinkedIn, Whatsapp } from '../Allsvgr.js' 
import { darkTheme } from './Themes.js'
import { motion } from 'framer-motion'

const Icons = styled(motion.div)`

    display:flex;
    flex-direction:column;
    align-items:center;
    position:fixed;
    bottom:0;
    left:2rem;
    z-index:3;
    @media(max-width:480px){
        left:1rem;
    }

&>*:not(:last-child){
    width:30px;
    height:30px;
    margin:0.5rem 0;  
    @media(max-width:480px){
        width:25px;
        height:25px;   
    }
}

`
const Line = styled(motion.span)`
    width:2px; 
    background-color:${props=>props.color === 'dark'? darkTheme.text : darkTheme.body};

    @media(max-width:480px){
        background-color:${props=>props.color === 'dark'? props.page === 'main'? darkTheme.body:darkTheme.text : darkTheme.body}; 
    } 
`


const SocialIcons = (props) => {

  return (
    <Icons>
        <motion.div
            initial={{scale:0}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:"spring", duration:1,delay:1}}
        >
            <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:"www.github.com"}}>
                <Github fill={props.theme === 'dark' ? props.page === 'main' ? darkTheme.body:darkTheme.text:darkTheme.body}/>
            </NavLink>
        </motion.div>
        <motion.div
            initial={{scale:0}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:"spring", duration:1,delay:1.2}}
        >
            <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:"www.likedin.com"}}>  
                <LinkedIn fill={props.theme === 'dark' ? props.page === 'main' ? darkTheme.body:darkTheme.text:darkTheme.body}/> 
            </NavLink>
        </motion.div>
        <motion.div
            initial={{scale:0}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:"spring", duration:1,delay:1.4}}
        >
            <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:"www.github.com"}}> 
                <Facebook fill={props.theme === 'dark' ? props.page === 'main' ? darkTheme.body:darkTheme.text:darkTheme.body}/> 
            </NavLink>
        </motion.div>
        <motion.div
            initial={{scale:0}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:"spring", duration:1,delay:1.6}}
        >
            <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:"www.github.com"}}> 
                <Whatsapp fill={props.theme === 'dark' ? props.page === 'main' ? darkTheme.body:darkTheme.text:darkTheme.body}/> 
            </NavLink>
        </motion.div>
        <Line 
            color={props.theme}
            page={props.page}
            initial={{
                height:0
            }}
            animate={{
                height:'clamp(100px, 20vw, 160px)'
            }}
            transition={{
                type:'spring', duration:1, delay:0.8
            }}
        />
    </Icons>
  )
}

export default SocialIcons