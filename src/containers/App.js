import HeroCover from '../components/HeroCover/HeroCover';
import NavBar from '../components/NavBar/NavBar';
import Skills from '../components/Skills/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroCover />

      <Skills />
    </div>
  );
}

export default App;
