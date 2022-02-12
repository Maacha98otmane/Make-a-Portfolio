import { Route,Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { lightTheme,darkTheme } from "./components/Themes"
import GlobalStyle from "./globalStyle"

import Main from './components/Main'
import About from './components/About'
import Blog from './components/Blog'
import Skills from './components/Skills'
import Work from './components/Work'

function App() {
  return <>
        <GlobalStyle/>

    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/skills" component={Skills}/>
        <Route exact path="/work" component={Work}/>
      </Switch>
    </ThemeProvider>
    </>
    
}

export default App

