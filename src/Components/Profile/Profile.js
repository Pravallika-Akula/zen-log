import {useState, useEffect} from "react";
import "./Profile.css";
import {Link} from "react-router-dom";
import { Password } from 'primereact/password';
import { signOut, getAuth, onAuthStateChanged, currentUser } from "firebase/auth"

import {db} from "../../fbconfig";
import {collection, getDocs, addDoc, query, where} from 'firebase/firestore';

let totalEntries = 31;
let totalMoods = 28;
let email = "";

const Profile = () => {
    
    // const [users, setUsers] = useState([]);
    const [value, setValue] = useState("");
    const auth = getAuth()
    const user = auth.currentUser;
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");

    // for fetching user data
    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                const usersCollectionRef = collection(db, "users");
                const q = query(usersCollectionRef, where("email", "==", user.email));
                const querySnapshot = await getDocs(q);
                setPassword(querySnapshot.docs[0]?.data()?.password || "");
                setFirstname(querySnapshot.docs[0]?.data()?.firstname || "");
                setLastname(querySnapshot.docs[0]?.data()?.lastname || "");
                // console.log(password);
            }
        };
        fetchData();
    }, [user, password, firstname, lastname]);

    // for Auth
    async function handleSignOut(){
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error)
        }
    }

    if (user != null) {
        email = user.email;
    }
    
    return(
        <div>
            
            <head>
                <link href='https://fonts.googleapis.com/css?family=Nunito Sans' rel='stylesheet' />
            </head>
            <body>
                <img src="/Assets/Icons/menu_button.svg" alt="menu button" className="menu-logo"></img>
                <img src="/Assets/zenlog_logo.svg" alt="logo" className="logo-profile"></img>
                <div className="profile">
                    <h1 className="profile-header">Hey {firstname}!</h1> 
                    <p className="profile-subheader">You’ve made a total of {totalEntries} journal entries & logged your mood for {totalMoods} days.</p> 
                </div>
                
                <div className="p-form-items">
                    <div className="p-email-address">
                        <label className="p-field-header">Email</label>
                        <input type="text" id="email" placeholder="email@gmail.com" value={email}/>
                    </div>
                    <div className="p-full-name">
                        <label className="p-field-header">Full Name</label>
                        <input type="text" id="fullname" placeholder="password" value={firstname + " " + lastname} />
                    </div>
                    <div className="p-password password2">    
                        <label className="password-field-header">Password</label>
                        <div className="card flex justify-content-center">
                            <Password  value={password} onChange={(e) => setValue(e.target.value)} feedback={false} tabIndex={1} toggleMask />
                        </div>    
                    </div>
                    <button>

                    </button>
                    <Link to="/dashboard">
                        <p className="p-change-password">change password</p>
                    </Link>
                </div>

                <button className="p-signOut" onClick={() => {handleSignOut()}}>
                    <p >Sign Out of My Account</p>
                </button>
                
                
            </body>
        </div>  
    
    );
};

export default Profile;