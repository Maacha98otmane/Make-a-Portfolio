import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, Twitter, YouTube } from '../components/AllSvg'
import { darkTheme } from '../components/Themes'

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index:3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}

`

const Line = styled.span`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body  };

`

const SocialComponent = (props) => {
  return (
    <Icons>
        <div>
                <NavLink style={{color:'inherit'}}  target="_blank"  to={{pathname:'https://github.com/'}}>
                    <Github width={25} height={25} fill={props.theme === "dark" ? darkTheme.text  : darkTheme.body  }/>
                </NavLink>
        </div>
        <div>
                <NavLink style={{color:'inherit'}}  target="_blank"  to={{pathname:'https://twitter.com'}}>
                    <Twitter width={25} height={25} fill={props.theme === "dark" ? darkTheme.text  : darkTheme.body  }/>
                </NavLink>
        </div>
        <div>
                <NavLink style={{color:'inherit'}}  target="_blank"  to={{pathname:'https://fb.com'}}>
                    <Facebook width={25} height={25} fill={props.theme === "dark" ? darkTheme.text  : darkTheme.body  }/>
                </NavLink>
        </div>
        <div>
                <NavLink style={{color:'inherit'}}  target="_blank"  to={{pathname:'https://youtube.com'}}>
                    <YouTube width={25} height={25} fill={props.theme === "dark" ? darkTheme.text  : darkTheme.body  }/>
                </NavLink>
        </div>
       
        <Line color={props.theme}/>
    </Icons>
  )
}

export default SocialComponent