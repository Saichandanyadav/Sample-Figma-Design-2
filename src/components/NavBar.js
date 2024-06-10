import {useState} from 'react'
import {Link} from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = () => {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => {
    setShowNav(!showNav)
  }

  return (
    <div>
      <button type="button" className="menu-button" onClick={toggleNav}>
        <img src="/menu-icon.png" alt="Menu" />
      </button>
      {showNav && (
        <nav className="navbar">
          <div className="navbar-content">
            <div className="navbar-header">
              <img src="/path/to/lama-icon.png" alt="LAMA" />
              <span>LAMA</span>
            </div>
            <ul className="nav-items">
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/configuration">Widget Configuration</Link>
              </li>
              <li>
                <Link to="/deployment">Deployment</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
            <div className="settings-icon">
              <Link to="/account-settings">
                <img src="/settings-icon.png" alt="Settings" />
              </Link>
            </div>
          </div>
        </nav>
      )}
    </div>
  )
}

export default NavBar
