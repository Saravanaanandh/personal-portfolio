import React from 'react' 
import styled, { ThemeProvider } from 'styled-components' 
import HomeBtn from './../components/HomeBtn.js'
import Logo from './../components/Logo.js'
import SocialIcons from './../components/SocialIcons.js'
import ParticleComponent from '../components/ParticleComponent.js'
import { darkTheme } from '../components/Themes.js'
import spaceman from './../assets/Images/spaceman.png'
import { keyframes } from 'styled-components'
import BigText from '../components/BigText.js'
import { motion } from 'framer-motion'

const Box = styled.div`
  width:100vw;
  height:100vh;
  background-color:${props => props.theme.text};
  display:flex;
  justify-content:space-evenly;
  align-items:center; 
  position:relative;
  overflow:hidden;

` 
const Main = styled.div`
  border:2px solid ${props => props.theme.text};
  color:${props => props.theme.text};
  width:50vw;
  height:70vh;
  padding:2rem;

  display:flex;
  justify-content:center;
  align-items:center;
  font-size:calc(0.4rem + 1vw);
  font-family:'Ubuntu Mono', monospace;
  font-style:italic;
  backdrop-filter:blur(4px);
  line-height:1.5;
  z-index:3;  

@media(max-width:480px){
  position:absolute;
  top:20%;
  left:15%;
  width:60vw;
  height:auto;
  padding:0.8rem;
  font-size:calc(0.5rem + 1vw);
}
`
const float = keyframes`
0%{transform:translateY(-10px);}
50%{transform:translateY(15px) translateX(15px);}
100%{transform:translateY(-10px);}
`

const Spaceman = styled(motion.div)`
  position:absolute;
  top:5%;
  right:10%;
  width:10vw;
  z-index:4;

img{
  width:100%;
  height:auto;
  animation:${float} 4s ease infinite;
}
@media(max-width:480px){
  width:20vw;
  top:5%;
  right:5%;
}
`
const About = () => {
  return (
    <Box>
      <ThemeProvider theme={darkTheme}>
        <HomeBtn/>
        <SocialIcons theme='dark'/>
        <Logo theme='dark'/>
        <ParticleComponent theme='dark'/> 
        <Spaceman
          initial={{translateY:'400px',translateX:'100px',opacity:0}}
          animate={{translateY:0, translateX:0,opacity:1}}
          transition={{type:'spring',duration:2, delay:1}}
        >
          <img src={spaceman} alt="astronant" />
        </Spaceman>
        <Main>
          I am Saravana, a dedicated web and software developer with strong expertise in front-end technologies such as HTML, CSS, Tailwind, Bootstrap, and React, and back-end development using Springboot, Node.js, MongoDB, and MySQL. I also have proficiency in programming languages including Python, Java and C, which allows me to approach problems with a versatile, logical mindset.
          <br /><br />
          
          I am passionate about designing scalable, efficient, and user-centric solutions while adhering to best coding practices. My experience spans building responsive web applications, managing databases, and implementing full-stack solutions. I thrive in collaborative environments and continuously seek opportunities to learn and contribute to impactful projects that align with business goals.
          <br /><br />
          I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
        </Main>
        <BigText text={'ABOUT'} top={'10%'} left={'5%'}/>

      </ThemeProvider> 
    </Box>
  )
}

export default About