import './header.css';

function Header() {
  return (
    <div className="header-component">
        <div className="nav-bar">
            <div className="nav-item">
                <p>Skills</p>
            </div>
            <div className="nav-item">
                <p>Experience</p>
            </div>
            <div className="nav-item">
                <p>Projects</p>
            </div>
            <div className="nav-item">
                <p>Contacts</p>
            </div>
        </div>
    </div>
  );
}

export default Header;
