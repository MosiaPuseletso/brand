import './App.css';

import Hero from './components/hero/hero';
import Services from './components/services/services';
import CaseStudies from './components/casestudies/casestudies';
import Brands from './components/brands/brands';

function App() {
  return (
    <>
      <header>
        <nav>
          <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} alt='logo'/>
          <div className='navbar-menu'>
            <ul>
              <li>Services</li>
              <li>Industries</li>
              <li>Cases</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='search'>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
              <circle cx="19" cy="19" r="18" fill="#70259B" stroke="white" strokeWidth="2" />
              <path fillRule="evenodd" clipRule="evenodd" d="M23 18.5C23 20.9853 20.9853 23 18.5 23C16.0147 23 14 20.9853 14 18.5C14 16.0147 16.0147 14 18.5 14C20.9853 14 23 16.0147 23 18.5ZM22.3347 23.7489C21.2597 24.5356 19.9341 25 18.5 25C14.9101 25 12 22.0899 12 18.5C12 14.9101 14.9101 12 18.5 12C22.0899 12 25 14.9101 25 18.5C25 19.9341 24.5356 21.2597 23.7489 22.3347L27.7071 26.2929C28.0976 26.6834 28.0976 27.3166 27.7071 27.7071C27.3166 28.0976 26.6834 28.0976 26.2929 27.7071L22.3347 23.7489Z" fill="#FAFAFA" />
            </svg>
            <button className='btn-talk'>Let's Talk</button>
          </div>
        </nav>
      </header>

      <Hero />
      <Services />
      <CaseStudies />
      <Brands />

      <footer>
        <div className='footer-content'>
          <div className="footer-heading">
            <span></span>
            <h4>Contact us</h4>
          </div>
          <div className='footer-description'>
            <div className='footer-question'>
              <p>Have a project in mind?<br /> Let's make it happen</p>
            </div>
            <div className='footer-address'>
              <p>22 Street Name, Suburb, 8000,<br /> Cape Town, South Africa <br /> +27 21 431 0001 <br /> enquirie@website.co.za</p>
            </div>
          </div>
          <div className='footer-links'>
            <div className='links1'>
              <ul>
                <li>Terms of service</li>
                <li>Privacy policy</li>
                <li>Impressum</li>
              </ul>
            </div>
            <div className='links2'>
              <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
            <div className='links3'>
              <ul>
                <li>Github</li>
                <li>Linkedin</li>
                <li>Teams</li>
              </ul>
            </div>
            <div className='links4'>
              <ul>
                <li>Youtube</li>
                <li>Behance</li>
                <li>Dribble</li>
              </ul>
            </div>
            <div className='links5'>
              <ul>
                <li>Explore open jobs</li>
              </ul>
              <p>©2000-2023 Company Name</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
