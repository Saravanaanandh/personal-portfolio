import React from 'react'
import styled from 'styled-components' 
import ConfigDark from './../config/particlesjs-config.json'
import ConfigLight from './../config/particlesjs-config-light.json' 
import { loadFull } from 'tsparticles'
import Particles from 'react-tsparticles'
import { useCallback } from 'react' 

const Box = styled.div`
    position:absolute;
    top:0;
    right:0;
    left:0;
    bottom:0; 
    z-index:0;
`

const ParticleComponent = (props) => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine); // Load all tsparticles features
      }, []);
  return (
    <Box>
        <Particles init={particlesInit} style={{position:'absolute'}} params={props.theme === "light"? ConfigLight : ConfigDark}/>
    </Box>
  )
}

export default ParticleComponent