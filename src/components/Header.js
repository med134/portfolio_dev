import resume from "./file/resume.pdf";
import './Header.css';
import { NavLink } from "react-router-dom";
import Logo from '../components/images/logos/logo.png';

const Header = () => {
    return (
  <nav>
	<input id="nav-toggle" type="checkbox"/>
	<div className="logo"><img src={Logo} alt='image_logo'/></div>
	<ul className="links">
		<li> <NavLink to="/" exact activeClassName="active"><span>01. </span> Home</NavLink></li>
		<li><NavLink to="/aboutMe" exact activeClassName="active"><span>02. </span> About</NavLink></li>
		<li><NavLink to="/projects" exact activeClassName="active"><span>03. </span> Works</NavLink></li>
		<li> <NavLink to="/contactMe" exact activeClassName="active"><span>04. </span> Contact</NavLink></li>
    <li id='btn_resume'> <a id="resume" href={resume} download="my_resume">Resume</a></li>
	</ul>
	<label for="nav-toggle" className="icon-burger">
		<div className="line"></div>
		<div className="line"></div>
		<div className="line"></div>
	</label>
</nav>
      /*   <nav>
          <input type='checkbox' id="nav-toggle"/>
          <label for="nav-toggle" class="icon-burger">
		        <div class="line"></div>
		        <div class="line"></div>
		        <div class="line"></div>
	</label>
          <label className="logo">VivaCode</label>
          <ul>
            <li> <NavLink to="/" exact activeClassName="active"><span>01. </span> Home</NavLink></li>
            <li> <NavLink to="/aboutMe" exact activeClassName="active"><span>02. </span> About</NavLink></li>
            <li> <NavLink to="/projects" exact activeClassName="active"><span>03. </span> Works</NavLink></li>
            <li> <NavLink to="/contactMe" exact activeClassName="active"><span>04. </span> Contact</NavLink></li>
            <li id='btn_resume'> <a id="resume" href={resume} download="my_resume">Resume</a></li>
          </ul>
      </nav> */
    );
} 
export default Header;