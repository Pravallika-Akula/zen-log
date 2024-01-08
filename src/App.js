import './App.css';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext';
import { Protected } from './Context/Protected';

// import Layout from "./Components/Layout";
import NoPage from './Components/NoPage';

import Calendar from "./Components/Calendar/Calendar";
import Dashboard from "./Components/Dashboard/Dashboard";
import JournalEntry from "./Components/Journal-Entry/JournalEntry";
import Landing from "./Components/Landing/Landing"; // I changed from "L" to "l"
import Login from "./Components/Login/Login";
import Menu from "./Components/Menu/Menu";
import PastEntries from "./Components/Past-Entries/PastEntries";
import Profile from "./Components/Profile/Profile";
import SignUp from "./Components/Sign-Up/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Landing/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/sign-up",
      element:<SignUp/>
    },
    {
      path:"/dashboard",
      element:<Protected><Dashboard/></Protected> 
    },
    {
      path:"/menu",
      element:<Protected><Menu/></Protected> 
    },
    {
      path:"/profile",
      element:<Protected><Profile/></Protected> 
    },
    {
      path:"/calendar",
      element:<Protected><Calendar/></Protected> 
    },
    {
      path:"/past-entries",
      element:<Protected><PastEntries/></Protected> 
    },
    {
      path:"/journal-entry",
      element:<Protected><JournalEntry/></Protected> 
    },
    {
      path:"*",
      element:<NoPage/>
    },
  ])

  return (
    <AuthContext className="App">
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>
  );
}

export default App;

// export default function App() {

//   return (
//       <AuthContext>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Layout />}>
//               <Route index element={<Landing />} />
//               <Route path="login" element={<Login />} />
//               <Route path="sign-up" element={<SignUp />} />
//               <Protected><Route path="dashboard" element={<Dashboard />} /></Protected>
//               <Protected><Route path="menu" element={<Menu />} /></Protected>
//               <Protected><Route path="profile" element={<Profile />} /></Protected>
//               <Protected><Route path="calendar" element={<Calendar />} /></Protected>
//               <Protected><Route path="past-entries" element={<PastEntries />} /></Protected>
//               <Protected><Route path="journal-entry" element={<JournalEntry />} /></Protected>
//               <Protected><Route path="*" element={<NoPage />} /></Protected>
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       </AuthContext>
      

//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
