import React from "react";
import {useEffect, useState} from "react";
import { db } from "./firebase/config.js";
import firebase from 'firebase/compat/app';
import {
    setDoc,doc} from "firebase/firestore";
const Location = (user) => {
    
    var [lat, setLat] = useState(null);
    var [long, setLong] = useState(null);


    useEffect(() => {
        storeData();
      }, [])


    async function storeData() {
        getLocation();
        console.log("location"+ user);
        const docRef = doc(db, "users", user.uid);
        setDoc(docRef, {
            latitude: lat,
            longitude: long
        }, {

        merge: true
        }).then(() => console.log("Document updated"));
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            lat = setLat("Geolocation is not supported on this device");
            long = setLong(null);
        }
    }
    function showPosition(position) {
        console.log(position.coords.latitude);
        lat = setLat(position.coords.latitude);
        long = setLong(position.coords.longitude);
    }

    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
            lat = setLat("User denied the request for Geolocation.");
            long = setLong(null);
            break;
            case error.POSITION_UNAVAILABLE:
            lat = setLat("User denied the request for Geolocation.");
            long = setLong(null);
            break;
            case error.TIMEOUT:
            lat = setLat("User denied the request for Geolocation.");
            long = setLong(null);
            break; 
          case error.UNKNOWN_ERROR:
            lat = setLat("User denied the request for Geolocation.");
            long = setLong(null);
            break;
             }
        }


return <div>
    <p id="demo">{lat}</p>
    <p id="demo">{long}</p>
    </div>
}

export default Location;