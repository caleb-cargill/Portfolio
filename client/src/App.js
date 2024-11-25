import { ThemeProvider, SetTheme } from './components/ThemeProvider';
import ContactMe from './components/ContactMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './styles/App.css';

function App() {
  SetTheme();

  return (
    <div className="App">
      <div Name="welcome"> 
        <div Name="intro">
          <ThemeProvider/>
          <h2 className="primaryHeader">Caleb Cargill</h2>
          <h2 className="accentHeader">Software Engineer passionate about helping others</h2>
          <div className="gallery">
            <div className="block">
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="block">
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            </div>        
            <div className="block">
              <p>Thank you for visiting my portfolio! I hope to connect with you soon.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <ContactMe/>
      </div>
      <div className="section">
        <h2 className="accentHeader">About Me</h2>
        <div className="gallery">
          <div className="block">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="block">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
      <div className="section">
        <Experience />
      </div>
      <div className="section">
        <Projects/>
      </div>
    </div>
  );
}

export default App;
