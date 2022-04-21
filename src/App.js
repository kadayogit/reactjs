import logo from './logo.svg';
import './App.css';
// import {Member} from './Member';

function App() {
  return (
    <div className="App">
     <h1>Hello World!</h1>
     <Member />
    </div>
  );
}

function Member(){
  return (
    <div>
    <h1>Same file used!</h1>
    <h2>Same file used!</h2>
    </div>
    
  )
}

export default App; 
