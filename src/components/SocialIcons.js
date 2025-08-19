
import React from 'react' 
import styled from 'styled-components'
import {  Github, Instagram, LinkedIn, Whatsapp } from '../Allsvgr.js' 
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
            <a style={{color:props.theme}} href="https://www.github.com/Saravanaanandh">
                <Github fill={props.theme === 'dark' ? props.page === 'main' ?  darkTheme.text:darkTheme.text:darkTheme.body}/>
            </a>
        </motion.div>
        <motion.div
            initial={{scale:0}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:"spring", duration:1,delay:1.2}}
        >
            <a style={{color:'inherit'}} href="https://linkedin.com/in/saravanawebdev">  
                <LinkedIn fill={props.theme === 'dark' ? props.page === 'main' ?  darkTheme.text:darkTheme.text:darkTheme.body}/> 
            </a>
        </motion.div>
        <motion.div
            initial={{scale:0}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:"spring", duration:1,delay:1.4}}
        >
            <a style={{color:'inherit'}} href='https://www.instagram.com/itz__me___saravana18/profilecard/?igsh=MW90Z3pmNXZ2bTl3MQ=='> 
                <Instagram fill={props.theme === 'dark' ? props.page === 'main' ? darkTheme.text:darkTheme.text:darkTheme.body}/> 
            </a>
        </motion.div>
        <motion.div
            initial={{scale:0}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:"spring", duration:1,delay:1.6}}
        >
            <a style={{color:'inherit'}} href='https://api.whatsapp.com/send?phone=918610100739&text=Hi'> 
                <Whatsapp fill={props.theme === 'dark' ? props.page === 'main' ? darkTheme.text:darkTheme.text:darkTheme.body}/> 
            </a>
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