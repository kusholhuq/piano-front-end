import './App.css';
import { Piano } from './components/Piano';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Piano/>
      </header>
    </div>
  );
}

export default App;
