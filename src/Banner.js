import './banner.css';
import Photo from './linkedin.jpeg'
import LinkedIn from './linkedin-brands.svg'
import Resume from './file-regular.svg';
import GitHub from './github-brands.svg';
import Chris from './resume2.pdf';

function Banner() {
  return (
    <div className="banner">
    <div className="image-container">
        <div className="photo">
            <img class="portrait" src={Photo}   />
        </div>
        <div className="social-media-container">
            <div>
                <a href="https://www.linkedin.com/in/ccebrero/" target="_blank">
                    <img class="sm-icon" src={LinkedIn}/>
                </a>
            </div>
            <div>
                <a href="https://github.com/chriscebrero" target="_blank">
                    <img class="sm-icon" src={GitHub}/>
                </a>
            </div>
            <div>
                <a href={Chris} target="_blank">
                    <img class="sm-icon" src={Resume}/>
                </a>
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
