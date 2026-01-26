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
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

const Box = styled.div` 
  width: 100%;
  height:100vh;
  background-color:${props => props.theme.text};
  display:flex;
  justify-content:space-evenly;
  align-items:center; 
  position:relative;
  overflow:hidden;
  font-size:1.1rem;

` 

const Main = styled(motion.ul)`
  position:fixed;
  width:100%;
  top:12rem;
  left:5vw; 
  height:40vh;
  display:flex; 
  color:white; 
  z-index:3;
@media(max-width:480px){
  left: 12.5vw; 
}
`
const Rotate = styled.span`
  display:flex;
  justify-content:center;
  align-items:center;
  position:fixed;
  right:1rem;
  bottom:1rem; 

// &>*:first-child{ 
//   width:80px;
//   height:80px;
// }
@media(max-width:480px){
  // &>*:first-child{ 
  //     width:30px;
  //     height:30px;
  // }
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
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};
  return (
    <Box>
      <ThemeProvider theme={darkTheme}>
        <HomeBtn/>
        <SocialIcons theme='dark'/>
        <Logo theme='dark'/>
        <ParticleComponent theme='dark'/> 
        <Main ref={ref} variants={container} initial='hidden' animate='show'>
          <AliceCarousel
            mouseTracking
            items={
              Work.map( work => {
                return <Card key={work.id} data={work}/>
              })
            }
            responsive={responsive} 
            disableDotsControls
            disableButtonsControls
          />
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