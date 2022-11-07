import React from 'react'
import {useState, useEffect} from 'react';
import './loginPage.css';
import 'bulma/css/bulma.min.css';
import ProfileCard from './profileCard.js'
import {signInWithGoogle} from './firebase/config.js'


function LoginPage({childToParent}) {
    let [user, setUser] = useState(null);
    return(
        <div className="body">
            <div className="container"> 
                <div className="title">
                    <img src="https://res.cloudinary.com/yuliu/image/upload/c_scale,h_200,w_400/v1667786689/logo_la7n4v.jpg" alt="let's meet"/>
                    <h4 class="subtitle is-3 has-text-light">Reconnect with your fellow humans</h4>
                </div>
                <button class="button is-secondary has-text-dark" onClick={() => {
                    setUser(signInWithGoogle);
                    console.log(user);
                    childToParent(user);
                    }}>Login</button>
            </div>
        </div>
    )
}

export default LoginPage;

<script src="https://apis.google.com/js/platform.js" async defer></script>