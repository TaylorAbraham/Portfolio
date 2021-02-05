import './App.scss';
import 'cirrus-ui/dist/cirrus.min.css';
import 'cirrus-ui/dist/cirrus-core.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="App">
      <div id="app-header" className="header header-dark header-fixed unselectable header-animated">
        <div className="header-brand">
          <div className="nav-item no-hover">
            <h6 className="title">Taylor Abraham</h6>
          </div>
        </div>
        <div className="header-nav" id="header-menu">
          <div className="nav-right">
            <div className="nav-item text-center"><a href="!#about" className="u u-C">About</a></div>
            <div className="nav-item text-center"><a href="!#links" className="u u-C">Links</a></div>
          </div>
        </div>
      </div>

      <section className="section">
        <div id="splash-img" className="hero fullscreen hero-img parallax-img">
          <div className="hero-body">
            <div id="hero-text" className="content u-text-center">
              <h1 className="uppercase white title">Taylor Abraham</h1>
              <h3 className="uppercase white sub-title faded">Full stack developer. React.JS enthusiast.</h3></div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="content">
          <div className="row level">
            <div className="col-4">
              <div id="avatar" className="avatar">
                <img src="./taylor.jpeg" />
              </div>
            </div>
            <div className="col-8">
              <h3>About</h3>
              <div className="divider" />
              <p>Hey there, I'm Taylor! A full-stack developer and former hackathon organizer. I'm always looking for opportunities to learn new technology or to teach others.</p>
              <p>I have a broad variaety of experience. Through internships, hackathons, and personal projects, I've learned how to build maintainable code and how to get things out of the door when needed. Check out <a href="https://github.com/TaylorAbraham" target="_blank" classname="u u-LR">my GitHub</a> for a small sample!</p>
              <p>Lover of meetups, game development, and dogs. <FontAwesomeIcon icon={faHeart} /></p>
            </div>
          </div>
        </div>
      </section>

      <section id="links" className="section">
        <div className="content">
          <h3 className="u-center">My Links</h3>
          <div className="divider" />
          <div className="row level">
            <div className="col col-2">
              <a href="https://github.com/TaylorAbraham" target="_blank" classname="utb utb-OLR"><FontAwesomeIcon icon={faGithub} size="5x" /><p className="link-text">Github</p></a>
            </div>
            <div className="col col-2">
              <a href="https://www.linkedin.com/in/taylor-abra/" target="_blank" classname="utb utb-OLR"><FontAwesomeIcon icon={faLinkedin} size="5x" /><p className="link-text">LinkedIn</p></a>
            </div>
            <div className="col col-2">
              <a href="https://devpost.com/TaylorAbraham/" target="_blank" classname="utb utb-OLR"><FontAwesomeIcon icon={faDev} size="5x" /><p className="link-text">DevPost</p></a>
            </div>
          </div>
          <div className="row level">
            <div className="col col-2">
              <a href="mailto:taylor.abra8@gmail.com" target="_blank" classname="utb utb-OLR"><FontAwesomeIcon icon={faEnvelope} size="5x" /><p className="link-text">Email</p></a>
            </div>
            <div className="col col-2">
              <a href="TaylorAbraham.pdf" target="_blank" classname="utb utb-OLR"><FontAwesomeIcon icon={faFile} size="5x" /><p className="link-text">My Resume</p></a>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" class="footer">
        <h6 class="footer__title white uppercase">Thanks for visiting!</h6>
        <div class="content">
          <div class="divider"></div>
          <div class="u-center">
            <p>Want to get in touch?<br /><a href="mailto:taylor.abra8@gmail.com" target="_blank" classname="utb utb-OLR">taylor.abra8@gmail.com</a></p>
          </div>
        </div>
        <p class="subtitle">© 2021 Taylor Abraham</p>
      </footer>
    </div>
  );
}

export default App;
