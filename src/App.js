
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import  Projects from './components/Projects';
import  ContactMe from './components/ContactMe';
import  AboutMe from './components/AboutMe';
import  HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
     <Header/>
    <Routes>
    <Route path='/' exact element={<HomePage/>}/>
    <Route path='/projects' exact element={<Projects/>}/>
    <Route path='/aboutMe' exact element={<AboutMe/>}/>
    <Route path='/contactMe' exact element={<ContactMe/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
export default App;
