import './Contact.css';
const ContactMe = () => {
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
        <section className="contact" id="contact">
        <h2 className="title-service">Let's work together</h2>
        <div className="content"> 
            <div className="card">
                <div className="icon phone"><i className="fa-solid fa-phone"></i></div>
                <div className="info-service">
                    <h3>Phone Number</h3>
                    <p>+212600462196</p>
                </div>
            </div> 
            <div className="card" >
                <div className="icon email"><i className="fa-solid fa-envelope"></i></div>
                <div class="info-service">
                    <a href="mailto:mohamed7dakir@gmail.com">Email</a>
                    <p>mohamed7dakir@gmail.com</p>
                </div>
            </div> 
        </div>
    </section>
    <div className="email-section">
          <div className="contentA">
          <a href="mailto:mohamed7dakir@gmail.com">mohamed7dakir@gmail.com</a>
          </div>
        </div>
        </>
     );
}
 
export default ContactMe;