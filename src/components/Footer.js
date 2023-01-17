import './Footer.css';
const Footer = () => {
    return (
         <section className="footer">
            <div className='chatWithMe'>
            <a href="https://www.facebook.com/med.dkr.3" target="blank">
            <i className="fa-brands fa-facebook" /></a>
            <a href="https://www.instagram.com/med_dkr25/" target="blank">
            <i className="fa-brands fa-instagram" /></a>
           
            <a href="https://www.linkedin.com/in/mohammed-dakir/" target="blank">
            <i className="fa-brands fa-linkedin" /></a>
            <a href="https://github.com/med134" target="blank" aria-label="github">
            <i className="fa-brands fa-github" /></a>
            </div>
              <h3>Designed & Built by Med Dakir</h3>
              <p>@Copyright 2023</p>
             </section> );
}
 
export default Footer;