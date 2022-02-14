import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialComponent from '../subComponents/SocialComponent'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent';
import ME from '../assets/Images/profile-img.png'
import {darkTheme} from './Themes';


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Meindiv = styled.div`
position: absolute;
top: 10%;
right: 1%;
width: 40vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`

const About = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <Box>
    
    <LogoComponent theme='dark'/>
    <SocialComponent theme='dark'/>
    <PowerButton />
    <ParticleComponent theme='dark' />
    
            <Meindiv>
                <img src={ME} alt="spaceman" />
            </Meindiv>    
            <Main>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rerum maiores ut dolorum odit beatae laborum magnam perferendis vero quos? Ad tempora dolor dolorum veniam voluptas reprehenderit quam excepturi qui.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus maiores doloremque, ipsam mollitia quia? Alias, eveniet! Cum dicta impedit consequuntur quos ea ipsam, ipsa quibusdam unde reiciendis corporis officiis.
            </Main>
    
    
            </Box>
    
            </ThemeProvider>
  )
}

export default About