
import './About.css';

const AboutMe = () => {
    return ( 
        <>
         <div className="social-section">
          <div className="list">
          <a href="https://www.facebook.com/med.dkr.3" target="blank">
            <i className="fa-brands fa-facebook" /></a>
            <a href="https://www.instagram.com/med_dkr25/" target="blank">
            <i className="fa-brands fa-instagram" /></a>
            <a href="https://www.linkedin.com/in/mohammed-dakir/" target="blank">
            <i className="fa-brands fa-linkedin" /></a>
            <a href="https://github.com/med134" target="blank" aria-label="github">
            <i className="fa-brands fa-github" /></a>
          </div>
           </div>
     <section className='aboutMe' id='about'>
           <div className='about_line'>
            <h2>About Me</h2>
           </div>
        <div className='bio'>
           <div className='myPara'>
            <p id='p'>Hello ! My name is Med and I enjoy creating things that live on the internet.
                 My interest in web development started back
                 in 2013 when I decided to try editing color Button  in my Game.
                 <br/>
                 I worked as a firefighter at the same time and completed my studies in computer science and programming
                 With the passage of days, I became a developer in the technical side of the firefighters
                 I worked with the team to develop several programs and systems for the fire and safety apparatus.
                 <br/>
                 Fast forward to today, and I have had the privilege of working in this wonderful and noble sector.
                 I gained many useful experiences from him and his wonderful team.<br/><br/>
                 <u><b id='para2'>Some of my skills :</b></u></p>
                 </div>
                 <div className='myImage'>
                 <div className='pic'>
                 </div>
                 </div>
                 </div>
                 <div className='skills'>
                 <ul>
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>Node.js</li>
                </ul>
                <ul>
                    <li>Java</li>
                    <li>UX design</li>
                    <li>Bootstrap</li>
                </ul>
                <ul>
                    <li>HTML 5</li>
                    <li>CSS 5</li>
                    <li>Android Studio</li>
                </ul>
                 </div>
     </section>
     <div className="email-section">
          <div className="contentA">
          <a href="mailto:mohamed7dakir@gmail.com">mohamed7dakir@gmail.com</a>
          </div>
        </div>
     </>
    )
}
export default AboutMe;