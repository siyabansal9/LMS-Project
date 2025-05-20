import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from '../../context/AppContext';
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency, calculateRating} = useContext(AppContext) || { currency: "$" };

  return (
    <Link 
      to={`/course/${course?._id || ''}`} 
      onClick={() => window.scrollTo(0, 0)} 
      className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg"
    >
      <div>
        <img
          className="w-full"
          src={course?.courseThumbnail || assets.course_1_thumbnail}
          alt={course?.courseTitle || "Course Thumbnail"}
          onError={(e) => e.target.src = assets.course_1_thumbnail}
        />
        <div className="p-3 text-left">
          <h3 className="text-base font-semibold">{course?.courseTitle || "Untitled Course"}</h3>
          <p className="text-gray-500">Mr.X</p>
          <div className="flex items-center space-x-2">
            <p>{calculateRating(course)}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img key={i} src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt="star" className="w-3.5 h-3.5" />
              ))}
            </div>
            <p className="text-gray-500">{course.courseRatings.length}</p>
          </div>
          <p className="text-base font-semibold text-gray-800">
            {currency}
            {(
              (course?.coursePrice || 0) - ((course?.discount || 0) * (course?.coursePrice || 0)) / 100
            ).toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
