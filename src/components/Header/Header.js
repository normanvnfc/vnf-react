// import Image from 'next/image'

export default function Header() {

  return (
    <div>
      <header class="header container">
        <nav class="nav-main navbar navbar-expand-lg">
          <div class="container">
            <a class="logo" href="https://www.venuerific.com/sg" >
              <figure class="mb-0 logo">
                <img class="light" src="/img/nav-logo.png" alt="Venuerific" />
                {/* <img class="dark" src="img/nav-logo-white.png" alt="Venuerific" /> */}
              </figure>
            </a>
            {/* {% include "partials/content/navigation-cselector.html" %} */}

            <div class="justify-content-between w-100  d-none d-sm-flex">
              <div class="mr-auto menu navbar-expand d-none d-lg-block">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="/sg/search">Venues</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"  href="https://blog.venuerific.com/">Inspiration</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="/#" role="button" aria-haspopup="true"
                      aria-expanded="false">
                      Solutions
                      <i class="fa fa-chevron-down ml-1" style={{ fontSize: "10px" }}></i>
                    </a>
                    {/* {% include "partials/content/navigation-dropdown.html" %} */}
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"  href="/sg/productivity-solutions-grant">PSG</a>
                  </li>
                </ul>
              </div>

              <div class="ml-auto right-menu navbar-expand d-none d-sm-block">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="list-venue nav-link" href="/why">
                      <i class="fa fa-map-marker text-danger pr-1"></i> Why List
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="login nav-link shadow-none px-3 font-weight-bold"
                      href="https://www.venuerific.com/users/login">Login</a>
                  </li>
                  <li class="nav-item">
                    <a class="signup nav-link font-weight-bold gtm_event_onclick" data-toggle="modal"
                      data-gtm-event-name="SignUpFlow - ClickSignUpHeader" href="#how-it-works">Sign up</a>
                  </li>
                </ul>
              </div>
            </div>


            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav d-flex justify-content-around d-block d-lg-none">
                <li class="nav-item">
                  <a class="nav-link" href="/sg/search">Venues</a>
                </li>
                <li class="nav-item">
                  <a rel="noreferrer" class="nav-link"  href="https://blog.venuerific.com/">Inspiration</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="/#" role="button" aria-haspopup="true"
                    aria-expanded="false">
                    Solutions
                    <i class="fa fa-chevron-down ml-1"></i>
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="/sg/venues/why">Venue Lead Generation</a>
                    <a class="dropdown-item" href="/contentproduction?country=sg">Content Production</a>
                    <a class="dropdown-item" href="/sg/venuerific-pay">Venuerific Pay</a>
                    <a  class="dropdown-item" rel="noreferrer" href="https://www.thevirtualbackground.com/">The
                      Virtual Background</a>
                    <a class="dropdown-item"  href="https://thevirtualwedding.co">The Virtual Wedding</a>
                    <a class="dropdown-item text-muted" href="/#">Venue Management Cloud Solution <br /> (Coming
                      Soon)</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a rel="noreferrer" class="nav-link"  href="/sg/productivity-solutions-grant">PSG</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}