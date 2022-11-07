import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import LoginPage from './loginPage.js';
import TestUser from './testDb.js';
import Location from './locaiton.js';
import ProfileCard from './profileCard.js'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  let [user, setUser] = useState(null);

  const childToParent = (user)=> {
    setUser(user);
  }

  useEffect(() => {
    var responseClone; // 1
  fetch("http://localhost:3001/api", {mode:'cors'})
  .then(function (response) {
    responseClone = response.clone(); // 2
    return response.json();
    })
    .then(function (data) {
      setData(data);
    }, function (rejectionReason) { // 3
    console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
    responseClone.text() // 5
    .then(function (bodyText) {
        console.log('Received the following instead of valid JSON:', bodyText); // 6
    });
})});

useEffect(() => {
  if (user) {
    navigate('/main');
  }
  else {
    navigate('./');
  }
}, [user]);

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<LoginPage childToParent={childToParent} />} />
        <Route path='/main' element={<ProfileCard/>} />
      </Routes>
    </div>
  );
}

export default App;
