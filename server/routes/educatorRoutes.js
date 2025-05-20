import express from 'express';
import {
  addCourse,
  educatorDashboardData,
  getEducatorCourses,
  getEnrolledStudentsData,
  updateRoleToEducator
} from '../controllers/educatorController.js';
import upload from '../configs/multer.js';
import { protectEducator } from '../middlewares/authMiddleware.js';

const educatorRouter = express.Router();

// Add Educator Role
educatorRouter.get('/update-role', updateRoleToEducator);

// Add Course
educatorRouter.post('/add-course', protectEducator, upload.single('image'), addCourse);

// Get Educator's Courses
educatorRouter.get('/courses', protectEducator, getEducatorCourses);

// Get Educator Dashboard Data
educatorRouter.get('/dashboard', protectEducator, educatorDashboardData);

// Get Enrolled Students Data
educatorRouter.get('/enrolled-students', protectEducator, getEnrolledStudentsData);

export default educatorRouter;
