import React from "react";
import "./SignUp.css";
import {Link, useNavigate} from "react-router-dom";

import {useState, useEffect} from "react";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {db} from "../../fbconfig";
import {collection, getDocs, addDoc} from 'firebase/firestore';

const SignUp = () => {

    // Database
    const [newEmail, setNewEmail] = useState("");
    const [newFirstname, setNewFirstname] = useState("");
    const [newLastname, setNewLastname] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users")

    const createUser = async () => {
        await addDoc(usersCollectionRef, {email: newEmail, firstname: newFirstname, lastname: newLastname, password: newPassword});
    };

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getUsers()
    }, [])

    function onChangeEmail(e) {
        setEmail(e);
        setNewEmail(e);
    }

    function onChangePassword(e) {
        setPassword(e);
        setNewPassword(e);
    }

    function onClickSignUp(e) {
        handleSignUp(e);
        createUser();
    }

    // user Auth
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth()
    const navigate = useNavigate();
    async function handleSignUp(e) {
        e.preventDefault();
        // alert(email + ':' + password);
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log(user)
            navigate('/dashboard')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return(
        <div>
            <head>
                <link href='https://fonts.googleapis.com/css?family=Nunito Sans' rel='stylesheet' />
            </head>
            <body>
                <div className="s-logo"></div>
                <div className="signUp">
                    <h1 className="signUp-header">Welcome to ZenLog!</h1> 
                    <p className="signUp-subheader">Please sign in to begin writing</p> 
                </div>
                <div className="s-form-items"> {/* <form action=""></> */}
                    <div className="s-email-address">
                        <label className="s-field-header">Email</label>
                        <input onChange={(e) => {onChangeEmail(e.target.value)}} type="text" id="email" placeholder="you@email.com" />
                    </div>
                    <div className="s-full-name">
                        <label className="s-field-header">First Name</label>
                        <input type="text" id="firstname" placeholder="John" onChange={(event) => {setNewFirstname(event.target.value)}} />
                    </div>
                    <div className="s-full-name">
                        <label className="s-field-header">Last Name</label>
                        <input type="text" id="lastname" placeholder="Doe" onChange={(event) => {setNewLastname(event.target.value)}} />
                    </div>
                    <div className="s-password">    
                        <label className="s-field-header">Password</label>
                        <input onChange={(e) => {onChangePassword(e.target.value)}} type="text" id="password" placeholder="Enter 6 characters or more" />
                    </div>
                    <div className="s-confirm-password">    
                        <label className="s-field-header">Confirm Password</label>
                        <input type="text" id="confirmpassword" placeholder="Enter password again" />
                    </div>
                    <Link to="/dashboard">
                        <button onClick={ (e) => {onClickSignUp(e)}} className="signUp-button">Sign Up</button>
                    </Link>
                </div>
                <Link to="/login">
                    <p className="s-login">Already have an account? <b>Login</b></p>
                </Link> 
            </body>
        </div>  

    );
};
  
export default SignUp;