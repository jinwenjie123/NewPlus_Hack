import React from 'react'
import {useState, useEffect} from 'react';
import './profileCard.css';
import 'bulma/css/bulma.min.css';
import Friends from "./friends.js"

function ProfileCard(props) {

    let [s, setS] = useState(false);



    const handleClick = () => {
        console.log(s);
        s = setS(true);
        console.log(s);
      };

      if (s == true) {
        return(
            <div className="container">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-1by1">
                        <img class="img" src="https://media.istockphoto.com/id/1198036466/vector/people-family-together-human-unity-chat-bubble-vector-icon.jpg?s=612x612&w=0&k=20&c=TAoPZDTuP3LABAzWv7jVVD-Sv7MxyztMQ2hGR3OyIQI=" alt="image" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        <h1>Yunxiao Liu</h1>
                    </div>
                </div>
                <footer class="card-footer">
                    <button class="button is-primary" onclick={handleClick}>Find My friends</button>
                    <button class="button is-primary" onclick={handleClick}>Update Info</button>
                </footer>
            </div>
            <Friends name="Billy Bob" distance="0.02"/>
            <Friends name="Denji" distance="0.08"/>
            <Friends name="Eren Jaeger" distance="0.22"/>
            <Friends name="Tor Aamodt" distance="0.64" />
            <Friends name="Kevin Manias" distance="0.78"/>
            <Friends name="Steven Shapiro" distance="1.23" />
        </div>    
        )
      }
    else return(
        <div className="container">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img class="img" src="https://media.istockphoto.com/id/1198036466/vector/people-family-together-human-unity-chat-bubble-vector-icon.jpg?s=612x612&w=0&k=20&c=TAoPZDTuP3LABAzWv7jVVD-Sv7MxyztMQ2hGR3OyIQI=" alt="image" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        <h1>NAME</h1>
                    </div>
                </div>
                <footer class="card-footer">
                    <button class="button is-primary" onclick={handleClick}>Find My friends</button>
                    <button class="button is-primary" onclick={handleClick}>Update Info</button>
                </footer>
            </div>
            <Friends name="Billy Bob" distance="0.02"/>
            <Friends name="Denji" distance="0.08"/>
            <Friends name="Eren Jaeger" distance="0.22"/>
            <Friends name="Tor Aamodt" distance="0.64" />
            <Friends name="Kevin Manias" distance="0.78"/>
            <Friends name="Steven Shapiro" distance="1.23" />
        </div>    
    )
}

export default ProfileCard;