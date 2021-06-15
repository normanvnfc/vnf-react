import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import logo from '../../assets/img/nav-logo.png';

const Countries = [
  {
    id: 'a1',
    name: 'Singapore',
    src: "https://static-staging.venuerific.com/packs/media/img/sg-99531698f90954f8c0dcb80daecdc2d8.png"
  },
  {
    id: 'a2',
    name: 'Malaysia',
    src: "https://static-staging.venuerific.com/packs/media/img/my-221a445c68db7c9ff4cbb5d9ba7db6be.png"
  },
  {
    id: 'a3',
    name: 'Indonesia',
    src: "https://static-staging.venuerific.com/packs/media/img/id-81394ed473d60bcc17db29d463dff7d6.png"
  },
  {
    id: 'a4',
    name: 'Philippines',
    src: "https://static-staging.venuerific.com/packs/media/img/ph-98aa829210389c80ee7eece4bdc3dd91.png"
  },
  {
    id: 'a5',
    name: 'Hong Kong',
    src: "https://static-staging.venuerific.com/packs/media/img/hk-585fb76ecf1cf61fd5d823417b123b7a.png"
  }
]

const Header = () => {
  return (
    <header className="header">
      <Navbar className="nav-main navbar navbar-expand-lg bg-white shadow-sm">
        <Container>
          <Navbar.Brand className="logo" href="#home">
            <figure className="mb-0 logo">
              <img src={logo} alt="" />
            </figure>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title={
                <img className="shadow-sm flag-img"
                  src="https://static-staging.venuerific.com/packs/media/img/sg-99531698f90954f8c0dcb80daecdc2d8.png" alt="" />
              } id="basic-nav-dropdown">
                {Countries.map((country) =>
                  <NavDropdown.Item href="/#" key={country.id}>
                    <img className="shadow-sm flag-img"
                      src={country.src} alt="" />
                    {country.name}
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;