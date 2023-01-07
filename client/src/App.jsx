import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav Bar";
import Drawer from './components/Drawer'
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import './index.css'
import { Clubs } from "./pages/ClubsPage";
import DoctorPage from "./pages/DoctorPage";
import ProfilePage from "./pages/ProfilePage";
import WelcomePage from "./pages/WelcomePage";
import { SignOut } from "./components/SignOut";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Bus from "./components/Bus/bus";
import Requests from "./pages/RequestPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddEventPage from "./pages/AddEventPage";
import AddDoctorPage from "./pages/AddDoctorPage";
import { useSelector, useDispatch } from 'react-redux'
import Calender from "./components/Clender";

function App() {

  const user = useSelector((state) => state.user.user)
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(state => !state);
  console.log(user);
  if (user.email !== "") {
    return (
      <div className="flex font-mainFont text-mainBlack">
        <Drawer user={user} isOpen={isOpen} toggleDrawer={toggleDrawer} />
        <div className="flex-1 bg-gray-100 min-h-screen">
          <Navbar user={user} toggleDrawer={toggleDrawer} />
          <main className="">
            <Routes>
              <Route path="/calender" element={<Calender user={user} />} />
              <Route path="/home" element={<HomePage user={user} />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/logout" element={<SignOut />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/bus" element={<Bus user={user} />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/clubs" element={<Clubs />}>
                <Route path="alphabit" element={<Clubs />} />
                <Route path="ingenioums" element={<Clubs />} />
                <Route path="gdg-sba" element={<Clubs />} />
                <Route path="gdsc" element={<Clubs />} />
              </Route>
              <Route path="/doctor" element={<DoctorPage />} />
              <Route path="/profile" element={<ProfilePage user={user} />} />
              <Route path="/" element={<WelcomePage user={user} />} />
              <Route path="/add-event" element={<AddEventPage user={user} />} />
              <Route path="/add-doctor-event" element={<AddDoctorPage />} />
              <Route path="*" element={<NotFoundPage />} />

            </Routes>
          </main>
        </div>
      </div>
    )
  } else {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/resetpassword" element={<ResetPasswordPage />} />
        <Route path="/" element={<WelcomePage user={user} />} />
        <Route path="*" element={<NotFoundPage message={'Page not found'} />} />
      </Routes>
    )

  }

}

export default App
