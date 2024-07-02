import "./Header.css"

function Header() {
  return (
    <div>
      <header className="header-section">
        <div className="title">
            <h1>Patema Ventures</h1>

        </div>
        <div className="navigation">
            <nav className="navlist">
            <ul className="list-container">
                <li className="navigationlist-items"><a href="#">Home</a></li>
                <li className="navigationlist-items"><a href="#">Services</a></li>
                <li className="navigationlist-items"><a href="#">Projects</a></li>
                <li className="navigationlist-items"><a href="#">Contacts</a></li>
                <li className="navigationlist-items"><a href="#">Sign Up</a></li>
                <li className="navigationlist-items"><a href="#">Sign in</a></li>

            </ul>
            </nav>
            
        </div>
      </header>
      </div>
    
  )
}

export default Header
