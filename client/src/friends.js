import React from 'react'
import {useState, useEffect} from 'react';
import './friends.css';
import 'bulma/css/bulma.min.css';

function friend(props) {
    return(
        <div className="container">
            <div class="card1">
                <div class="img">
                    <img width="32px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO59ubdqItRWvNp3m0OqIH9isnHVbODgi6Fz24sAxxzLKrnABrLAaT5dMQ3svfH2jPft4&usqp=CAU"></img>
                </div>
                <div class="name">
                    <h3>{props.name}</h3>
                </div>
                <div class="distance">
                    <h4>Distance: {props.distance} km</h4>
                    <a href="http://youtube.com">Connect</a>
                </div>
            </div>
        </div>
    )
}

export default friend;