import logo from './logo.svg';
import './App.css';
import User from './User';
// import {Member} from './Member';

function App() {
  function Laptop() {
    return (
      <div>Lenovo Laptop!</div>
    )
  }
  return (
    <div className="App">
     <h1>Hello World!</h1>
     <Member />
     <Laptop />
     {Laptop()}
     {/* reuseable function component */}
     <Member />
    </div>
  );
}

function Member(){
  return (
    <div>
    <h1>Same file used!</h1>
    {/* how to reuse user class component */}
    <User />
    <User />
    <User />
    </div>
  )
}

export default App; 
