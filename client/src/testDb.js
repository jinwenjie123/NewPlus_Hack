import React from 'react'
import {useState, useEffect} from 'react';
import {db} from "./firebase/config.js"
import { collection, getDocs } from "firebase/firestore";
function TestUser() {
    const [users, setUsers] = useState([]);
    const userCollectionRef = collection(db,"users");
    
    useEffect(()=>{
        const getUsers = async () =>{
            const data = await getDocs(userCollectionRef);
            setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        };
        getUsers();
    },[]);
    return(
        <div >
           {users.map((user)=>{
            return(
                <div>
                    <h1>Name:{user.name}</h1>
                    
                </div>
            );
           })} 
        </div>
    )
}

export default TestUser;