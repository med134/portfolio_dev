
  import '../App.css';
const HomePage = () => {

    return ( 
        <section className="home_page">
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
        <section className="main-section">
          <div className="titles">
            <h4>Hi ,My Name is Med.</h4>
            <h1>Front-End Developer</h1>
            <h2>I build things for the web.</h2>
            <p>I’m a front-end developer specializing in building (and occasionally designing)<br/>
              exceptional digital experiences. Currently I work as a software developer in the government sector<br/> 
              but I'm looking for a new adventure in another country.</p>
               <a id="view" href="/projects">View My Works</a>
          </div>
        </section>
        <div className="email-section">
          <div className="contentA">
          <a href="mailto:mohamed7dakir@gmail.com">mohamed7dakir@gmail.com</a>
          </div>
        </div>
      </section>
     );
}
 
export default HomePage;