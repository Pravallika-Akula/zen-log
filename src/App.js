import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
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

export default function App() {

  return (
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            {/* <Route index element={<Login />} /> */}
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="menu" element={<Menu />} />
            <Route path="profile" element={<Profile />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="past-entries" element={<PastEntries />} />
            <Route path="journal-entry" element={<JournalEntry />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
