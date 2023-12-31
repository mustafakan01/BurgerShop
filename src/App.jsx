import './App.css'
import { Route,Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import { Menu } from './Components/Menu'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
import { NavBar } from './Components/NavBar'
import { Footer } from './Components/Footer'


function App() {

  return (
    <div className='App'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' exact element={<Home></Home>} />
        <Route path='/menu' exact element={<Menu></Menu>} />
        <Route path='/about' exact element={<About></About>} />
        <Route path='/contact' exact element={<Contact></Contact>} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
