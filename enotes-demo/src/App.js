import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import ViewNotes from './components/ViewNotes';
import AddNotes from './components/AddNotes';
import Login from './components/Login';
import Register from './components/Register';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './components/PrivateRoute';
import { Navigator } from './components/Dashboard';

function App() {

  return (
    <div className='App'>
      <ToastContainer />
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Welcome />} />
          <Route path='/view-notes'
            exact element={
              <PrivateRoute>
                <ViewNotes />
              </PrivateRoute>} />
          <Route path='/add-notes'
            exact element={
              <PrivateRoute>
                <AddNotes />
              </PrivateRoute>
            }
          />
          <Route path='/login' exact element={<Login />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/dashboard'
            exact element={
              <PrivateRoute>
                <Navigator />
              </PrivateRoute>
            } />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
