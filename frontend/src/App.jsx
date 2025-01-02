import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/useAuthStore.js';
import { Loader } from 'lucide-react';
import HomePage from './pages/homePage.jsx';
import SignUp from './pages/signUp.jsx';
import LoginPage from './pages/login.jsx';
import SettingsPage from './pages/settings.jsx';
import ProfilePage from './pages/profilePage.jsx';

const App = () => {
  const { authuser, checkAuth, isCheckingAuth } = useAuthStore(); // Ensure isCheckingAuth is available

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authuser });

  if (isCheckingAuth && !authuser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader size={40} className="animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={authuser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authuser ? <SignUp /> : <Navigate to="/" />} />
        <Route path="/login" element={!authuser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={authuser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
