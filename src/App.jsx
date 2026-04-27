import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import DefaultLayout from './components/layout/DefaultLayout'
import Gastroenterology from './pages/therapy/Gastroenterology'
import Neuropathy from './pages/therapy/Neuropathy'
import AntiInfective from './pages/therapy/Nutraceuticals'
import PainManagement from './pages/therapy/GeneralWellness'
import About from './pages/about/About'
import ScrollToTop from './components/common/ScrollToTop'
import WhyChooseUs from './pages/about/WhyChooseUs'
import OurTeam from './pages/about/OurTeam'
import LifeAtCaprion from './pages/about/LifeAtCaprion'
import Career from './pages/career/Career'
import Contact from './pages/contact/Contact'
import Portfolio from './pages/portfolio/Portfolio'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>

        <Route element={<DefaultLayout></DefaultLayout>}>

          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/gastroenterology' element={<Gastroenterology></Gastroenterology>}></Route>
          <Route path='/neuropathy' element={<Neuropathy></Neuropathy>}></Route>
          <Route path='/anti-infective' element={<AntiInfective></AntiInfective>}></Route>
          <Route path='/pain-management' element={<PainManagement></PainManagement>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/mission-vision' element={<WhyChooseUs></WhyChooseUs>}></Route>
          <Route path='/our-team' element={<OurTeam></OurTeam>}></Route>
          <Route path='/life-at-caprion' element={<LifeAtCaprion></LifeAtCaprion>}></Route>
          <Route path='/career' element={<Career></Career>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        </Route>

      </Routes>
    </>
  )
}

export default App
