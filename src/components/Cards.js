
import './Projects.css';


const Cards = ({title,description,footer,url,external}) => {
    return ( 
        <div className='myCard'>
            <a id='folder'><i class="fa-regular fa-folder"></i></a>
            <div className='icons_external'>
            <a href={url}  id='gitlab' target='_blank' rel="noreferrer"><i class="fa-brands fa-github"></i></a>
            <a href={external} id='external' target='_blank' rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
           </div>
            <div className='cardBody'>
            <h3>{title}</h3>
            <p>{description}</p>
            <span>{footer}</span>
            </div>
        </div>
    );
}
 
export default Cards;