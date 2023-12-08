import React, {useState, useEffect} from 'react';
import Home from './page/Home';
import SignUp from './page/SignUp';
import Login from './page/Login';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Book from './page/Book';
 
function App() {
 
  return (
    <Router>
      <div>
        <section>                              
            <Routes>
              <Route path="/" element={<Home/>}/>
               <Route path="/signup" element={<SignUp/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path='/book' element={<Book/>}></Route>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;
