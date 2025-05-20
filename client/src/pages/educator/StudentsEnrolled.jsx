import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';
import { toast } from 'react-toastify';
import Loading from '../../components/student/Loading';

const StudentsEnrolled = () => {
  const { backendUrl, getToken, isEducator } = useContext(AppContext);
  const [enrolledStudents, setEnrolledStudents] = useState(null);

  const fetchEnrolledStudents = async () => {
    try {
      const token = await getToken();

      const { data } = await axios.get(`${backendUrl}/api/educator/enrolled-students`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        setEnrolledStudents(data.enrolledStudents.reverse());
      } else {
        toast.error(data.message); // Corrected from success to error
      }
    } catch (error) {
      toast.error(error.message || 'Failed to fetch enrolled students');
    }
  };

  useEffect(() => {
    if (isEducator) fetchEnrolledStudents();
  }, [isEducator]);

  if (!enrolledStudents) return <Loading />;
  if (enrolledStudents.length === 0) return <div className="p-8">No students enrolled yet.</div>;

  return (
    <div className="min-h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
        <table className="table-fixed md:table-auto w-full overflow-hidden pb-4">
          <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
            <tr>
              <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell">#</th>
              <th className="px-4 py-3 font-semibold">Student Name</th>
              <th className="px-4 py-3 font-semibold">Course Title</th>
              <th className="px-4 py-3 font-semibold hidden sm:table-cell">Date</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-500">
            {enrolledStudents.map((item, index) => (
              <tr key={item._id || index} className="border-b border-gray-500/20">
                <td className="px-4 py-3 text-center hidden sm:table-cell">{index + 1}</td>
                <td className="md:px-4 px-2 py-3 flex items-center space-x-3">
                  <img
                    src={item.student.imageUrl || '/default-avatar.png'}
                    alt="Student"
                    className="w-9 h-9 rounded-full object-cover"
                    onError={(e) => (e.target.src = '/default-avatar.png')}
                  />
                  <span className="truncate">{item.student.name || 'Unnamed'}</span>
                </td>
                <td className="px-4 py-3 truncate">{item.courseTitle || 'Untitled Course'}</td>
                <td className="px-4 py-3 hidden sm:table-cell">
                  {item.purchaseDate
                    ? new Date(item.purchaseDate).toLocaleDateString()
                    : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsEnrolled;
