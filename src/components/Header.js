import logo from '../assets/img/nav-logo.png'

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-main navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">
          <a className="logo" href="https://www.venuerific.com/sg">
            <h1>test</h1>
            <figure className="mb-0 logo">
              <img src={logo} alt="" />
            </figure>
          </a>
        </div>
        <div className="country-selector navbar-expand">
          <ul className="navbar-nav">
            
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;