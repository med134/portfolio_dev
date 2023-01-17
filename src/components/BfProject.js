import './BfProject.css';
const BfProject = () => {
    return ( 
    <section className='container' id='bg_food'> 
      <h1 >Benguerir Food</h1>
    <section className='slider'>
        <div className='images'>
            <input type="radio" name="slide" id="img1" checked/>
            <input type="radio" name="slide" id="img2"/>
            <input type="radio" name="slide" id="img3"/>
            <input type="radio" name="slide" id="img4"/>
            <input type="radio" name="slide" id="img5"/>
            <img src={require('./images/1.jpg')} class="m1" alt="img1"/>
            <img src={require('./images/2.jpg')} class="m2" alt="img2"/>
            <img src={require('./images/3.png')} class="m3" alt="img3"/>
            <img src={require('./images/4.png')} class="m4" alt="img4"/>
            <img src={require('./images/5.png')} class="m5" alt="img5"/>
        </div>
        <div class="dots">
            <label for="img1"></label>
            <label for="img2"></label>
            <label for="img3"></label>
            <label for="img4"></label>
            <label for="img5"></label>
        </div>
        </section>
        <div className='camelCase'>
            <img src={require('./images/screen.png')} alt='android_studioImage'/>
        </div>
    </section>
     );
}
 
export default BfProject;