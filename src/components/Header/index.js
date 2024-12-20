import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <>
    <nav className="nav-Container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            data-testid="hamburgerIconButton"
            className="ham"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <button
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <ul className="list-container">
              <li>
                <Link to="/" onClick={() => close()}>
                  <div className="styling">
                    <AiFillHome size="36" className="icon" />
                    <h1>Home</h1>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => close()}>
                  <div className="styling">
                    <BsInfoCircleFill size="32" className="icon" />
                    <h1>About</h1>
                  </div>
                </Link>
              </li>
            </ul>
          </>
        )}
      </Popup>
    </nav>
  </>
)

export default withRouter(Header)
