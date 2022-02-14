import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialComponent from '../subComponents/SocialComponent'
import PowerButton from '../subComponents/PowerButton'
import {darkTheme} from './Themes';

const Box = styled.div`
background-color: ${props => props.theme.body};
height:400vh;
position: relative;
display: flex;
align-items: center;
`
// const Main = styled.ul`
// position: fixed;
// top: 12rem;
// left:calc(10rem + 15vw);
// height: 40vh;
// display: flex;
// color:white;
// `

const Work = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <Box>
    
    <LogoComponent theme='dark'/>
    <SocialComponent theme='dark'/>
    <PowerButton />
    
         {/* <Main ref={ref}   variants={container} initial='hidden' animate='show'  >
             {
                Work.map( d => 
                <Card key={d.id} data={d} />
                )
             }
         </Main>
    <Rotate ref={yinyang}>
        <YinYang width={80} height={80} fill={DarkTheme.text} />
    </Rotate>
     */}
            </Box>
    
            </ThemeProvider>
  )
}

export default Work