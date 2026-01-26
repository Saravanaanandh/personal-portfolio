import React from 'react' 
import styled, { ThemeProvider } from 'styled-components'
import { Design, Develope } from '../Allsvgr.js'
import HomeBtn from './../components/HomeBtn.js'
import Logo from './../components/Logo.js'
import SocialIcons from './../components/SocialIcons.js'
import ParticleComponent from '../components/ParticleComponent.js'
import { lightTheme } from '../components/Themes.js'
import BigText from '../components/BigText.js'

const Box = styled.div`
  width:100vw;
  height:100vh;
  background-color:${props => props.theme.body}; 
  display:flex;
  font-size:14px; 
`

const Main = styled.div`
  width:30vw;
  height:60vh;
  padding:2rem; 
  display:flex;
  flex-direction:column;
  justify-content:space-between; 
  border:2px solid ${props => props.theme.text};
  background-color:${props => `rgba(${props.theme.bodyRgba},0.4)`};
  color:${props => props.theme.text}; 
  z-index:3;
  font-family:'Ubuntu Mono', monospace;
  line-height:1.5rem;
  cursor:pointer;

@media(max-width:480px){
  width:60vw;
  height:auto;
  padding:1rem; 
  margin:0;
  line-height:1rem;
}

&:hover {
  color:${props => props.theme.body}; 
  background-color:${props => `rgba(${props.theme.textRgba},0.8)`};
}


`
const Title = styled.h3`
  display:flex;
  justify-content:center;
  align-items:center; 
  font-size:calc(1em + 1vw); 

${Main}:hover &{
  &>*{
    color:${props => props.theme.body};
  }
}

&>*:first-child{
  margin-right:1rem;
}
`
const Container = styled.div`
  width:100%;
  height:auto;
  display:flex;
  justify-content:space-evenly;
  align-items:center; 

@media(max-width:480px){
  height:auto;
  flex-direction:column;
  margin-top:3rem;  
} 
`
const Description = styled.div`
  font-size:calc(0.7em + 1vw);
  padding:0.5rem 0;

${Main}:hover &{ 
  color:${props => props.theme.body}; 
}

strong{
  margin-bottom:1rem;
  text-transform:uppercase;
}
ul,p{
  margin-left:2rem;

@media(max-width:480px){
  margin-left:1rem;
}
}
`

const MySkills = () => {
  return (
    <Box>
      <ThemeProvider theme={lightTheme}> 
        <HomeBtn/>
        <SocialIcons theme='light'/>
        <Logo theme='light'/>
        <ParticleComponent theme='light'/>
        <Container className='container' theme={lightTheme}>
        
        <Main>
          <Title>
              <Design width={25} height={25} fill='currentColor'/>Full Stack Developer
          </Title>
          <Description>
            I am a passionate developer dedicated to building scalable, responsive, and user-friendly web applications. I focus on creating clean, efficient, and impactful digital solutions that deliver great user experiences.
          </Description>
          <Description>
            <strong>
              SKILLS
            </strong>
            <p>Html, Css, Js, Bootstrap, Tailwind, React, Redux, Firebase, Nodejs, Expressjs,SpringBoot, MongoDB, MySQL, etc.</p>
          </Description>
          <Description>
            <strong>
              Tools
            </strong>
            <p>VScode, Github, postman, etc.</p>
          </Description>
        </Main>  
        <Main>
          <Title>
            <Develope width={25} height={25} fill='currentColor'/>Problem Solving & Programming
          </Title>
          <Description>
            I am a problem solver passionate about designing efficient algorithms and tackling complex coding challenges. I continuously enhance my skills through practice on platforms like LeetCode.
          </Description>
          <Description>
            <strong>
              Programming Languages
            </strong>
            <p>Python, Java, C, JavaScript</p>
          </Description>
          <Description>
            <strong>
              Topics & Concepts
            </strong>
            <p>Data Structures & Algorithms (DSA), Operating Systems (OS), Computer Networks</p>
          </Description>
          <Description>
            <strong>
              Platform
            </strong>
            <p>LeetCode</p>
          </Description>
        </Main>

        </Container>
        <BigText text={'MY SKILLS'} top={'75%'} right={'10%'}/>
      </ThemeProvider>
    </Box>
  )
}

export default MySkills