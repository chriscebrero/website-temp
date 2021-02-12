import './banner.css';
import Photo from './linkedin.jpeg'
import LinkedIn from './linkedin-brands.svg'
import Resume from './file-regular.svg';
import GitHub from './github-brands.svg';

function Banner() {
  return (
    <div className="banner">
    <div className="image-container">
        <div className="photo">
            <img class="portrait" src={Photo}   />
        </div>
        <div className="social-media-container">
            <div>
                <img class="sm-icon" src={LinkedIn}/>
            </div>
            <div>
                <img class="sm-icon" src={GitHub}/>
            </div>
            <div>
                <img class="sm-icon" src={Resume}/>
            </div>
        </div>
    </div>

        <div className="typed">
            <div>
                <p>Christian Cebrero</p>
            </div>
            <div>
                <p>Software Engineer</p>
            </div>
        </div>
    </div>
  );
}

export default Banner;
