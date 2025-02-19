import React, { useEffect, useRef } from 'react' 
import styled, { ThemeProvider } from 'styled-components' 
import HomeBtn from './../components/HomeBtn.js'
import Logo from './../components/Logo.js'
import SocialIcons from './../components/SocialIcons.js'
import ParticleComponent from '../components/ParticleComponent.js'
import { darkTheme } from '../components/Themes.js' 
import {Work} from './../data/WorkData.js'
import Card from '../components/Card.js'
import { YinYang } from '../Allsvgr.js'
import BigText from '../components/BigText.js'
import { motion } from 'framer-motion'

const Box = styled.div` 
  height:400vh;
  background-color:${props => props.theme.text};
  display:flex;
  justify-content:space-evenly;
  align-items:center; 
  position:relative;
  overflow:hidden;
` 

const Main = styled(motion.ul)`
  position:fixed;
  top:12rem;
  left:calc(10rem + 15vw);
  height:40vh;
  display:flex; 
  color:white; 
  z-index:3;
`
const Rotate = styled.span`
  display:flex;
  justify-content:center;
  align-items:center;
  position:fixed;
  right:1rem;
  bottom:1rem; 

&>*:first-child{ 
  width:80px;
  height:80px;
}
@media(max-width:480px){
  &>*:first-child{ 
      width:30px;
      height:30px;
  }
}
`

const container ={
  hidden:{opacity:0},
  show:{
    opacity:1,
    transition:{
      staggerChildren:0.5,
      duration:0.5,
    }
  }
}
const Projects = () => {

  const ref = useRef(null)
  const yinyang= useRef(null)

  useEffect(()=>{
    let element = ref.current 

    const handleScroll = ()=>{
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      yinyang.current.style.transform = `rotate(` + -window.pageYOffset + 'deg)';
    }

    window.addEventListener('scroll',handleScroll)

    return ()=> window.removeEventListener('scroll',handleScroll);
  },[])
  return (
    <Box>
      <ThemeProvider theme={darkTheme}>
        <HomeBtn/>
        <SocialIcons theme='dark'/>
        <Logo theme='dark'/>
        <ParticleComponent theme='dark'/> 
        <Main ref={ref} variants={container} initial='hidden' animate='show'>
          {
            Work.map( work => {
              return <Card key={work.id} data={work}/>
            })
          }
        </Main>
        <Rotate ref={yinyang}>
          <YinYang classname='yinyang' fill={darkTheme.text}/>
        </Rotate> 
        <BigText text={'PROJECTS'} top={'10%'} right={'10%'}/>
      </ThemeProvider> 
    </Box>
  )
}

export default Projects