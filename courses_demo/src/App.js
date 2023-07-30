import React from 'react';
import './App.css';
import Home from './components/Home';
import Menus from './components/Menus';
import AddCourse from './components/AddCourse';
import AllCourses from './components/AllCourses';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import UpdateCourse from './components/UpdateCourse';
import { Col, Container, Row } from 'reactstrap';

function App() {

  return (
    <div className='App'>
      <ToastContainer />
      <BrowserRouter>
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add-courses' element={<AddCourse />} />
                <Route path='/view-courses' element={<AllCourses />} />
                <Route path='/update-course/:cid' element={<UpdateCourse />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>

  );
}

export default App;
