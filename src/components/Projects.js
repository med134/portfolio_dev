import Cards from './Cards';
import './Projects.css';
const projects = [
    {
        title : "Benguerir Food",
        description : "An web and mobile application for online ordering, restaurants, delivery, and other things.",
        footer : "Java android studio",
        url : "https://github.com/med134/benguerir.food",
        external: "#bg_food" 
      
    },
    {
        title : "Benguerire Food",
        description : "Want to stay in the Join  terview skills, resume writing and more.",
        footer : "javascript css html",
        url : "https://www.google.com/",
        external: "https://github.com/med134/benguerir.food"
      
    },
    {
        title : "Benguerire Foode",
        description : "application for delivery of anything online application for delivery of anything online(food, commodity...).",
        footer : "React Node js",
        url : "https://github.com/med134/benguerir.food",
        external: "https://www.jobseeker.com/app/resumes/c461952e-1663-4fa8-ae92-ade36f7f3fa5/edit"
       
    }
]
const Projects = () => {
    return ( 
        <>
    <section className="projects" id='projects'>
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
         <div className="headline">
            <h2>Some Projects</h2>
         </div>
         <div className="cards_projects">
            {projects.map(list => 
              <Cards key={list.title}
              title={list.title}
              description={list.description}
              footer={list.footer}
              url={list.url}
              external={list.external}></Cards>
            )}
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
 
export default Projects;