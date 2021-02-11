import './banner.css';
import Photo from './linkedin.jpeg'

function Banner() {
  return (
    <div className="banner">

    <div className="image-container">
        <div className="photo">
            <img class="portrait" src={Photo}   />
        </div>
        <div className="social-media-container">
            <p>Hello</p>
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
