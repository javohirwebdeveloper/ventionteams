import { useState } from 'react'
import Navbar from './components/Navbar';
import { useTheme } from "./ThemeContext.jsx";
import Carousel from './components/Carousel.jsx';
import Content from './components/Content.jsx';
function App() {
  const [count, setCount] = useState(0)
  const { theme, toggleTheme } = useTheme();


  return (
    <div className={theme === 'dark' ? 'bg-[#29292B] text-white font' : 'bg-[#EBEBED] text-black font'}>
    <Navbar/>
    <Carousel/>
    <Content/>
    </div>
  )
}

export default App;
