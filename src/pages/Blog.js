import React, { useEffect } from 'react'
import styled from 'styled-components'
import blogBgImg from './../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import HomeBtn from '../components/HomeBtn.js'
import Logo from '../components/Logo.js'
import SocialIcons from '../components/SocialIcons.js'
import {Blogs} from './../data/BlogData.js'
import BlogComponent from '../components/BlogComponent.js'
import AnchorComponent from '../components/AnchorComponent.js'
import { useState } from 'react' 
import BigText from '../components/BigText.js'
import { motion } from 'framer-motion'

const MainContainer = styled(motion.div)`
  background-image:url(${blogBgImg});
  background-size:cover;
  background-repeat:no-repeat;
  background-position:center;
  background-attachment:fixed;
  width:100vw;
  height:auto;
`

const Container = styled.div`
  width:100%; 
  background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
  padding-bottom:5rem;
  `
const Center = styled.div`   
  width:100%;
  padding-top:10rem;
  display:flex;
  justify-content:center;
  align-items:center; 
@media(max-width:480px){
  padding-top:5rem;
}
`
const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(2, minmax(calc(10rem + 15vw),1fr));
  grid-gap:calc(0.5rem + 2vw);

@media(max-width:480px){
  grid-template-columns:repeat(1, minmax(calc(10rem + 15vw),1fr));
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
const Blog = () => {

  const [numbers, setNumbers] = useState(0);

  useEffect(()=>{
    let num = (window.innerHeight - 70)/30;
    setNumbers(parseInt(num)); 
  },[])

  return (
    <MainContainer
      variants={container}
      initial='hidden'
      animate='show'
      exit={{opacity:0, transition:{duration:0.5}}}
    >
      <Container>
        <HomeBtn/>
        <Logo/>
        <SocialIcons/>
        <AnchorComponent numbers={numbers}/>
        <Center>
          <Grid>
             {Blogs.map(blog => <BlogComponent key={blog.id} blog={blog}/>)}
          </Grid> 
        </Center> 
        <BigText text={'BLOG'} top={'10%'} left={'10%'}/>
      </Container> 
    </MainContainer>
  )
}

export default Blog