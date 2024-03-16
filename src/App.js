import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signin from './components/Signin';
import StateBasic from './components/StateBasic';
import Counter from './components/Counter';
import Statebasic2 from './components/Statebasic2';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <StateBasic/>
    {/* <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signin' element={<Signin/>}/>
    </Routes> */}
    </div>
  );
}

export default App;
