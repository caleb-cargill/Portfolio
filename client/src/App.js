import { ThemeProvider, SetTheme } from './components/ThemeProvider';
import './styles/App.css';

function App() {
  SetTheme();

  return (
    <div className="App">
      <h2>Welcome</h2>
      <ThemeProvider/>
    </div>
  );
}

export default App;
