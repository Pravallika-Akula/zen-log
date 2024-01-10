import {useState, useEffect} from "react";
import "./Profile.css";
import {Link} from "react-router-dom";
import { Password } from 'primereact/password';
import { signOut, getAuth, onAuthStateChanged, currentUser } from "firebase/auth"

import {db} from "../../fbconfig";
import {collection, getDocs, addDoc, query, where} from 'firebase/firestore';

let totalEntries = 31;
let totalMoods = 28;
let userName = 'Varshni';
let userPass = '123secure';
let email = "";
let firstname = "";
let lastname = "";
let password = "";

const Profile = () => {
    
    // const usersCollectionRef = collection(db, "users")
    const [users, setUsers] = useState([]);
    const [value, setValue] = useState(password);
    const auth = getAuth()
    const user = auth.currentUser;
    // const q = query(usersCollectionRef, where("email", "==", email))

    // async function someFunction() {
    //     console.log("hi")
    //     const querySnapshot = await getDocs(q);
    //     querySnapshot.docs.forEach((doc) => {
    //         console.log(doc.id, " => ", doc.data());
    //         password = doc.data().password;
    //     });
    //     console.log(querySnapshot.docs[0].data());
    // }

    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                const usersCollectionRef = collection(db, "users");
                const q = query(usersCollectionRef, where("email", "==", user.email));
                const querySnapshot = await getDocs(q);
                console.log(querySnapshot.docs[0].data());
                password = querySnapshot.docs[0].data().firstname;
                console.log(password);
            }
        };
        fetchData();
    }, [user]);

    // useEffect(() => {
    //     const getUsers = async () => {
    //         const data = await getDocs(usersCollectionRef);
    //         setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    //     }
    //     getUsers()
    // }, [])

    async function handleSignOut(){
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error)
        }
    }

    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         const uid = user.uid;
    //     } else {

    //     }
    // })
    if (user != null) {
        email = user.email;
        firstname = user.firstname;
        lastname = user.lastname;
        password = user.password;
    }
    
    return(
        <div>
            
            <head>
                <link href='https://fonts.googleapis.com/css?family=Nunito Sans' rel='stylesheet' />
            </head>
            <body>
                <img src="/Assets/Icons/menu_button.svg" alt="menu button" classname="menu-logo"></img>
                <img src="/Assets/zenlog_logo.svg" alt="logo" className="logo-profile"></img>
                <div className="profile">
                    <h1 className="profile-header">Hey {firstname}!</h1> 
                    <p className="profile-subheader">You’ve made a total of {totalEntries} journal entries & logged your mood for {totalMoods} days.</p> 
                </div>
                
                <div className="p-form-items">
                    <div className="p-email-address">
                        <label className="p-field-header">Email</label>
                        <input type="text" id="email" placeholder={email}/>
                    </div>
                    <div className="p-full-name">
                        <label className="p-field-header">Full Name</label>
                        <input type="text" id="fullname" placeholder={password} />
                    </div>
                    <div className="p-password password2">    
                        <label className="password-field-header">Password</label>
                        <div className="card flex justify-content-center">
                            <Password  value={value} onChange={(e) => setValue(e.target.value)} feedback={false} tabIndex={1} toggleMask />
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