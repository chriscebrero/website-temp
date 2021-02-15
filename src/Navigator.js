import './header.css';

function Navigator() {
  return (
    <div className="header-component">
        <div className="nav-bar">
            <div className="nav-item">
                <a style={{textDecoration: 'none'}} href="#skills">Skills</a>
            </div>
            <div className="nav-item">
                <a style={{textDecoration: 'none'}} href="#experience">Experience</a>
            </div>
            <div className="nav-item">
                <a style={{textDecoration: 'none'}} href="#projects">Projects</a>
            </div>
            <div className="nav-item">
                <a style={{textDecoration: 'none'}} href="#contacts">Contacts</a>
            </div>
            <div className="nav-item">
                <a style={{textDecoration: 'none'}} target="_blank" href="https://soundcloud.com/atlasnoir">Music</a>
            </div>
        </div>
    </div>
  );
}

export default Navigator;
