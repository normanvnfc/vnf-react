// import Image from 'next/image'

export default function Footer() {

  return (
    <div>
      <footer class="footer footer-new">
        <div class="container">
          <div class="row footer-content">
            <div class="col-lg-4">
              <div class="description">
                <figure class="img-wrapper footer-logo">
                  <img src="/img/logo-footer.png" alt="Venuerific" />
                </figure>
                <h5 class="text">Since 2013, Venuerific has been helping people celebrate their personal and business events by connecting them to unique event venues in Singapore, Malaysia, Hong Kong, Philippines, and Indonesia.
                </h5>
                <ul class="list-inline-social-item">
                  <li class="list-inline-item">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="subscribe">
                <h4 class="title">Subscribe to our newsletter</h4>
                <h5 class="subtitle">and get exclusive discount!</h5>
                <form>
                  <div class="form">
                    <div class="form-group mb-3">
                      <input type="email" class="form-control" id="" aria-describedby="" placeholder="Enter your email" />
                    </div>
                    <button type="submit" class="btn btn-danger w-100">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="footer-menu">
                <div class="row">
                  <div class="col-5">
                    <div class="menu-wrapper">
                      <h4 class="title">Menu</h4>
                      <ul class="list-unstyled">
                        <li class="list-item">
                          <a href="/#" class="text">Blogs</a>
                        </li>
                        <li class="list-item">
                          <a href="/#" class="text">Video</a>
                        </li>
                        <li class="list-item">
                          <a href="/#" class="text">Event</a>
                        </li>
                        <li class="list-item">
                          <a href="/#" class="text">Press</a>
                        </li>
                        <li class="list-item">
                          <a href="/#" class="text">Partners</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-7">
                    <div class="menu-wrapper">
                      <h4 class="title">Information</h4>
                      <ul class="list-unstyled">
                        <li class="list-item">
                          <a href="/#" class="text">How it works</a>
                        </li>
                        <li class="list-item">
                          <a href="/#" class="text">About</a>
                        </li>
                        <li class="list-item">
                          <a href="/#" class="text">FAQ</a>
                        </li>
                        <li class="list-item">
                          <a href="/#" class="text">Terms and Conditions</a>
                        </li>
                        <li class="list-item">
                          <a href="/#" class="text">Privacy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright">
            <span class="text">Venuerific © 2021</span>
          </div>
        </div>
      </footer>
    </div>
  )
}