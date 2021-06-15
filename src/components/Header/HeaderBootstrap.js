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
                  src="https://static-staging.venuerific.com/packs/media/img/sg-99531698f90954f8c0dcb80daecdc2d8.png" alt="" />
                <i className="fa fa-chevron-down ml-1"></i>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item pl-2" href="/sg/productivity-solutions-grant">
                  <img className="shadow-sm mr-2 flag-img"
                    src="https://static.venuerific.com/packs/media/img/sg-e5e76cccf7ce77ae8340938158e1b835.png" alt="" />
                  Singapore
                </a>
                <a className="dropdown-item pl-2" href="/my/productivity-solutions-grant">
                  <img className="shadow-sm mr-2 flag-img"
                    src="https://static-staging.venuerific.com/packs/media/img/my-221a445c68db7c9ff4cbb5d9ba7db6be.png" alt="" />
                  Malaysia
                </a>
                <a className="dropdown-item pl-2" href="/id/productivity-solutions-grant">
                  <img className="shadow-sm mr-2 flag-img"
                    src="https://static-staging.venuerific.com/packs/media/img/id-81394ed473d60bcc17db29d463dff7d6.png" alt="" />
                  Indonesia
                </a>
                <a className="dropdown-item pl-2" href="/ph/productivity-solutions-grant">
                  <img className="shadow-sm mr-2 flag-img"
                    src="https://static-staging.venuerific.com/packs/media/img/ph-98aa829210389c80ee7eece4bdc3dd91.png" alt="" />
                  Philippines
                </a>
                <a className="dropdown-item pl-2" href="/hk/productivity-solutions-grant">
                  <img className="shadow-sm mr-2 flag-img"
                    src="https://static.venuerific.com/packs/media/img/hk-385e234be3ffe7fff0c9a68f32838880.png" alt="" />
                  Hong Kong
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;