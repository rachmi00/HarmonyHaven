import './App.css';
import Landing from './pages1/Landing';
import Login from './pages1/Login';
import SignUp from './pages1/SignUp';
import Dashboard from './Dashboard';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/app/*' element={<Dashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
