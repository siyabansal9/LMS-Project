import React from 'react';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/student/Home';
import CoursesList from './pages/student/CoursesList';
import CourseDetails from './pages/student/CourseDetails';
import MyEnrollments from './pages/student/MyEnrollments';
import Player from './pages/student/Player';
import Loading from './components/student/Loading';
import Educator from './pages/educator/Educator';
import DashBoard from './pages/educator/DashBoard';
import AddCourse from './pages/educator/AddCourse';
import MyCourses from './pages/educator/MyCourses';
import StudentsEnrolled from './pages/educator/StudentsEnrolled';
import Navbar from './components/student/Navbar';

const App = () => {
  const location = useLocation();
  const isEducatorRoute = location.pathname.startsWith('/educator');

  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CoursesList />} />
        <Route path='/course-list/:input' element={<CoursesList />} />
        <Route path='/course/:id' element={<CourseDetails />} />
        <Route path='/my-enrollments' element={<MyEnrollments />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />

        {/* Educator nested routes */}
        <Route path='/educator' element={<Educator />}>
          <Route index element={<DashBoard />} />
          <Route path='add-course' element={<AddCourse />} />
          <Route path='my-courses' element={<MyCourses />} />
          <Route path='students-enrolled' element={<StudentsEnrolled />} />
        </Route>

        {/* 404 fallback */}
        <Route path="*" element={<h1 className="p-10 text-center text-2xl">404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
