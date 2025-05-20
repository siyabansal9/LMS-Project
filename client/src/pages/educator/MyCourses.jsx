import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import Loading from "../../components/student/Loading";

const MyCourses = () => {
  const { currency, allCourses } = useContext(AppContext);
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    if (Array.isArray(allCourses)) {
      setCourses(allCourses);
    }
  }, [allCourses]);

  if (!courses) return <Loading />;
  if (courses.length === 0) return <div className="p-8">No courses found.</div>;

  return (
    <div className="h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="w-full">
        <h2 className="pb-4 text-lg font-medium">My Courses</h2>
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className="md:table-auto table-fixed w-full overflow-hidden">
            <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">All Courses</th>
                <th className="px-4 py-3 font-semibold truncate">Earnings</th>
                <th className="px-4 py-3 font-semibold truncate">Students</th>
                <th className="px-4 py-3 font-semibold truncate">Published On</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {courses.map((course) => {
                const studentCount = course.enrolledStudents?.length || 0;
                const price = course.coursePrice || 0;
                const discount = course.discount || 0;
                const earningsPerStudent = price - (discount * price) / 100;
                const totalEarnings = Math.floor(studentCount * earningsPerStudent);

                return (
                  <tr key={course._id} className="border-b border-gray-500/20">
                    <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                      <img
                        src={course.courseThumbnail}
                        alt="Course Thumbnail"
                        className="w-16 h-12 object-cover rounded"
                      />
                      <span className="truncate hidden md:block">{course.courseTitle || "Untitled Course"}</span>
                    </td>
                    <td className="px-4 py-3">
                      {currency}
                      {totalEarnings.toLocaleString()}
                    </td>
                    <td className="px-4 py-3">{studentCount}</td>
                    <td className="px-4 py-3">
                      {course.createdAt
                        ? new Date(course.createdAt).toLocaleDateString()
                        : "N/A"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
