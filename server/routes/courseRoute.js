import express from 'express';
import { getAllCourse, getCourseId } from '../controllers/courseController.js';

const courseRouter = express.Router();

// Get All Courses
courseRouter.get('/all', getAllCourse);

// Get Course Data By ID
courseRouter.get('/:id', getCourseId);

export default courseRouter;
