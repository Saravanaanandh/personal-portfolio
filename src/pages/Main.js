import React, { useState,useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import HomeBtn from '../components/HomeBtn.js'
import Logo from '../components/Logo.js'
import SocialIcons from '../components/SocialIcons.js'
import { NavLink } from 'react-router-dom'
import { YinYang } from '../Allsvgr.js'
import Intro from '../components/Intro.js'
import { motion } from 'framer-motion'

const rotate = keyframes`
    from{
        transform:rotate(0deg);
    }
    to{
        transform:rotate(360deg);
    }
`

const MainContainer = styled.div`
    background-color:${props => props.theme.body};
    width:100vw;
    height:100vh;
    overflow:hidden;
    position:relative;

h2,h3,h4,h5,h6{
    font-family:'karla',sans-serif;
    font-weight:500;
}

`

const Container = styled.div`
    padding:2rem;
`
const Contact = styled(NavLink)`
    position:absolute;
    text-decoration:none;
    top:2rem;
    right:calc(1rem + 2vw);
    color:${props => props.theme.text};
    z-index:1;
@media(max-width:480px){
    color:${props => props.color === 'dark'? `${props.theme.body}`:`${props.theme.text}`};
}
`

const BLOG = styled(NavLink)` 
    position:absolute;
    text-decoration:none;
    top:50%;
    right:calc(1rem + 2vw);
    transform: rotate(90deg) translate(-50%,-50%);
    color:${props => props.theme.text};
    z-index:1;
@media(max-width:480px){
    color:${props => props.click? props.theme.body:props.theme.text};
    ${props => props.click?'text-shadow: 0 0 1px #fff, 0 0 3px #000':''};
}
`

const Project = styled(NavLink)`
    position:absolute;
    text-decoration:none;
    top:15%;
    transform: rotate(-90deg) translate(-50%,-50%);
    left:calc(0.3rem + 1vw);
    color:${props => props.click?props.theme.body:props.theme.text};
    z-index:1;

@media(max-width:480px){ 
    left:1vw;
}
`
const Resume = styled(NavLink)`
    position:absolute;
    text-decoration:none;
    top:2rem; 
    left:20%;
    color:${props => props.click?props.theme.body:props.theme.text};
    z-index:1;
`
const BottomBar = styled.div`
    position:absolute;
    bottom:1rem;
    left:0;
    right:0;
    width:100%;
    display:flex;
    justify-content:space-evenly;
`
const About = styled(NavLink)` 
    text-decoration:none; 
    color:${props => props.click?props.theme.body:props.theme.text};
    z-index:1;

@media(max-width:480px){
    color:${props => props.theme.text};
}
`
const Skill = styled(NavLink)` 
    text-decoration:none; 
    color:${props => props.theme.text};
    z-index:1;
`


const Center = styled.button`
    position:absolute;
    top:${props => props.click ? '85%' : '50%'};
    left:${props => props.click ? '92%' : '50%'};
    transform:translate(-50%,-50%);

    border: none;
    outline: none;
    display:flex;
    flex-direction:column;
    justify-content: center;
    cursor:pointer;
    align-items:center; 
    background-color:${props => props.theme.body};
    transition: all 0.5s ease;

&>:first-child{
    animation:${rotate} 1.5s infinite linear;
}

&>:last-child{
    font-family:inherit;
    display:${props=>props.click ? "none":"inline-block"};
    padding-top:1rem;
}

@media(max-width: 480px){

    top:${props => props.click ? '90%' : '50%'};
    ${props => props.click ?  `&>:first-child{
        width:40px;
        height:40px;
    }`:`&>:first-child{
        width:120px;
        height:120px;
    }`}
}
`
const DarkDiv = styled.div`
    position:absolute;
    top:0;
    background-color:#000;
    bottom:0;
    right:50%;
    width:${props=>props.click? '50%':'0%'}; 
    height:${props=>props.click? '100%':'0%'};
    z-index:1;
    transition:height 0.5s ease, width 1s ease 0.5s;
@media(max-width:480px){
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:50%;
    width:${props=>props.click? '100%':'0%'}; 
    height:${props=>props.click? '50%':'0%'};
    transition:width 0.5s ease, height 1s ease 0.5s;

}
`
const Main = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isFullscreen) {
        exitFullscreen();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  const enterFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen(); // Firefox
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(); // Chrome, Safari & Opera
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen(); // IE/Edge
    }
    setIsFullscreen(true);
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    setIsFullscreen(false);
  };

  useEffect(() => {
    const handleClick = () => { 
        enterFullscreen();
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isFullscreen]);

    const [click, setClick] = useState(false);

  return (
    <MainContainer>
        <Container>
            <DarkDiv click={click}/>
            <HomeBtn/>
            <Logo theme={click ?'dark':'light'}/>
            <SocialIcons theme={click ?'dark':'light'} page='main'/>

            <Center click={click}>
                <YinYang onClick={()=> setClick(!click)} width={click ? 120 : 200} height={click ? 120 : 200}/>
                <span>click here</span>
            </Center>
            <Contact 
                target="_blank" 
                to={'mailto:saravanaanandh2006@gmail.com'}
                color={click ?'dark':'light'}
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
            >
                <motion.h2
                    initial={{
                        y:-200,
                        transition:{ type: 'spring', duration:1.5, delay: 1}
                    }}
                    animate={{
                        y:0,
                        transition:{ type: 'spring', duration:1.5, delay: 1}
                    }}
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                >
                    Say hi..
                </motion.h2>
            </Contact>
            <BLOG to={'/blog'} click={click}>
                <motion.h2
                initial={{
                        y:-200,
                        transition:{ type: 'spring', duration:1.5, delay: 1}
                    }}
                    animate={{
                        y:0,
                        transition:{ type: 'spring', duration:1.5, delay: 1}
                    }}
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                >
                    Blog
                </motion.h2>
            </BLOG>
            <Project to={'/Projects'} click={click}>
                <motion.h2
                    initial={{
                        y:-200,
                        transition:{ type: 'spring', duration:1.5, delay: 1}
                    }}
                    animate={{
                        y:0,
                        transition:{ type: 'spring', duration:1.5, delay: 1}
                    }}
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                >
                    Projects
                </motion.h2>
            </Project>
            <Resume download to={''} click={click}>
                <motion.h2
                    initial={{
                        y:-200,
                        transition:{ type: 'spring', duration:1.5, delay: 1}
                    }}
                    animate={{
                        y:0,
                        transition:{ type: 'spring', duration:1.5, delay: 1}
                    }}
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                >
                    Resume
                </motion.h2>
            </Resume>
            <BottomBar>
                <About to={'/about'} click={click}>
                <motion.h2
                    initial={{
                        y:200,
                        transition:{ type: 'spring', duration:1.5, delay: 1}
                    }}
                    animate={{
                        y:0,
                        transition:{ type: 'spring', duration:1.5, delay: 1}
                    }}
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                >
                    About
                </motion.h2>
                </About>
                <Skill to={'/skills'}>
                    <motion.h2
                        initial={{
                            y:200,
                            transition:{ type: 'spring', duration:1.5, delay: 1}
                        }}
                        animate={{
                            y:0,
                            transition:{ type: 'spring', duration:1.5, delay: 1}
                        }}
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}}
                    >
                        My Skills
                    </motion.h2>
                </Skill>
            </BottomBar>

        </Container>
        {click ? <Intro/> : null}
    </MainContainer>
  )
}

export default Main