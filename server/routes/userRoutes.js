import express from 'express';
import {
  addUserRating,
  getUserCourseProgress,
  getUserData,
  purchaseCourse,
  updateUserCourseProgress,
  userEnrolledCourses
} from '../controllers/userController.js';

const userRouter = express.Router();

// Get User Data
userRouter.get('/data', getUserData);

// Purchase a Course
userRouter.post('/purchase', purchaseCourse);

// Get Enrolled Courses
userRouter.get('/enrolled-courses', userEnrolledCourses);

// Update Course Progress
userRouter.post('/update-course-progress', updateUserCourseProgress);

// Get Course Progress
userRouter.post('/get-course-progress', getUserCourseProgress);

// Add Course Rating
userRouter.post('/add-rating', addUserRating);

export default userRouter;
