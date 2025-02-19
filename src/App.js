import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyle.js"
import {lightTheme } from "./components/Themes.js" 
import Main from "./pages/Main.js"
import { Route, Routes } from "react-router-dom"
import About from "./pages/About.js"
import Blog from "./pages/Blog.js"
import Projects from "./pages/Projects.js"
import MySkills from "./pages/MySkills.js" 

function App() {
  
  return <div>
    <ThemeProvider theme={lightTheme}> 
      <GlobalStyle/>  
        <Routes>
          <Route path="/" Component={Main}/>
          <Route path="/about" Component={About}/>
          <Route path="/blog" Component={Blog}/>
          <Route path="/projects" Component={Projects}/>
          <Route path="/skills" Component={MySkills}/>
        </Routes> 
    </ThemeProvider>
    </div>
    
}

export default App

