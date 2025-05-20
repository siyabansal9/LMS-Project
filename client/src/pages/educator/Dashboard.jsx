import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'; // ✅ correct
import { assets, dummyDashboardData } from '../../assets/assets'
import Loading from '../../components/student/Loading'

const Dashboard = () => {
  const { currency } = useContext(AppContext)
  const [dashboardData, setDashboardData] = useState(null)

  const fetchDashboardData = async () => {
    // Simulating API call
    setDashboardData(dummyDashboardData)
  }

  useEffect(() => {
    fetchDashboardData()
  }, [])

  if (!dashboardData) return <Loading />

  const { enrolledStudentsData, totalCourses, totalEarnings } = dashboardData

  return (
    <div className='min-h-screen flex flex-col items-start gap-8 md:p-8 p-4 pt-8'>
      <div className='space-y-5'>

        {/* Summary Cards */}
        <div className='flex flex-wrap gap-5 items-center'>
          {/* Total Enrollments */}
          <div className='flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md'>
            <img src={assets.patients_icon} alt="Total Enrollments Icon" />
            <div>
              <p className='text-2xl font-medium text-gray-600'>
                {enrolledStudentsData?.length || 0}
              </p>
              <p className='text-base text-gray-500'>Total Enrollments</p>
            </div>
          </div>

          {/* Total Courses */}
          <div className='flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md'>
            <img src={assets.appointments_icon} alt="Total Courses Icon" />
            <div>
              <p className='text-2xl font-medium text-gray-600'>{totalCourses}</p>
              <p className='text-base text-gray-500'>Total Courses</p>
            </div>
          </div>

          {/* Total Earnings */}
          <div className='flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md'>
            <img src={assets.earning_icon} alt="Total Earnings Icon" />
            <div>
              <p className='text-2xl font-medium text-gray-600'>
                {currency}{Number(totalEarnings).toLocaleString()}
              </p>
              <p className='text-base text-gray-500'>Total Earnings</p>
            </div>
          </div>
        </div>

        {/* Latest Enrollments */}
        <div className='w-full max-w-4xl'>
          <h2 className='pb-4 text-lg font-medium'>Latest Enrollments</h2>
          <div className='overflow-hidden rounded-md bg-white border border-gray-500/20'>
            <table className='table-fixed md:table-auto w-full'>
              <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left'>
                <tr>
                  <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>#</th>
                  <th className='px-4 py-3 font-semibold'>Student Name</th>
                  <th className='px-4 py-3 font-semibold'>Course Title</th>
                </tr>
              </thead>
              <tbody className='text-sm text-gray-500'>
                {enrolledStudentsData.map((item, index) => (
                  <tr key={index} className='border-b border-gray-500/20'>
                    <td className='px-4 py-3 text-center hidden sm:table-cell'>{index + 1}</td>
                    <td className='md:px-4 px-2 py-3 flex items-center space-x-3'>
                      <img src={item.student.imageUrl} alt="Profile" className='w-9 h-9 rounded-full' />
                      <span className='truncate'>{item.student.name}</span>
                    </td>
                    <td className='px-4 py-3 truncate'>{item.courseTitle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
