import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Anchor, Link } from '../Allsvgr.js'


const Container = styled.div`
    position:relative;
    .anchor{
        width:70px;
        height:70px;
    }
@media(max-width:480px){
    .anchor{
        width:50px;
        height:50px;
    }
}
`

const SlideBar = styled.div`
    position:fixed;
    top:0;
    right:1rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    transform:translateY(-100%); 

    .chain{
        width:25px;
        height:25px;
        transform:rotate(135deg);
    }

`

const PreHiddenRef = styled.div`
    position:absolute;
    top:0;
    right:2rem;
`
const AnchorComponent = (props) => {
    const ref = useRef(null)
    const hiddenRef = useRef(null)

    useEffect(()=>{
        const handleScroll = ()=>{
            let scrollPosition = window.pageYOffset;
            let windowHeight = window.innerHeight;
            let bodyHeight = document.body.offsetHeight;
        
            let diff = Math.max(bodyHeight - (scrollPosition + windowHeight));
            let diffP = (diff * 100) / (bodyHeight - windowHeight);

            console.log("difference"+diff)
            console.log("%"+diffP)

            ref.current.style.transform = `translateY(${-diffP}%)`;
        }

        window.addEventListener('scroll',handleScroll);
        if(window.scrollY > 5){
            hiddenRef.current.style.display = 'none';
        }else{
            hiddenRef.current.style.display = 'block';

        }

        return () => window.removeEventListener('scroll',handleScroll);
    },[])

   

    return (
        <Container>
            <PreHiddenRef ref={hiddenRef}>
                <Anchor className='anchor' fill='currentColor'/> 
            </PreHiddenRef>
            <SlideBar ref={ref}>
                {
                    [...Array(props.numbers)].map((x,id) => {
                        return <Link key={id} fill='currentColor' className='chain'/>
                    })
                }
                <Anchor className='anchor' fill='currentColor'/>
            </SlideBar>
        </Container>
    )
}

export default AnchorComponent