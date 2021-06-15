import logo from '../../assets/img/nav-logo.png'

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-main navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">
          <a className="logo" href="https://www.venuerific.com/sg">
            <figure className="mb-0 logo">
              <img src={logo} alt="" />
            </figure>
          </a>
        </div>
        <div className="country-selector navbar-expand">
          <ul className="navbar-nav">
            <li className="nav-item dropdown select-nation">
              <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <img className="shadow-sm flag-img"
                  src="https://static-staging.venuerific.com/packs/media/img/sg-99531698f90954f8c0dcb80daecdc2d8.png" alt=""></img>
                <i className="fa fa-chevron-down ml-1"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;