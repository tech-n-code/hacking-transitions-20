import React from 'react';
import tempData from './StudentDetailsTempData'
import '../../styles/StudentDetails.css'

const StudentDetail = () => {
    const studentName = tempData[0]; 
    const studentBranch = tempData[1];
    const studentStatus = tempData[2];
    const currentTasks = tempData[3];
    const toDoTasks = tempData[4];    

    return (
        <div
            id='detailsmain'
            className='studentDetails'
        > 
            <table>
                <tbody>
                    <tr>
                        <td
                            id='details-0'
                            className='column1'
                        >Name</td>
                        <td
                        className='column2'>
                        {studentName}</td>
                    </tr>
                    <tr>
                        <td
                            id='details-1'
                            className='column1'
                        >Branch</td>
                        <td
                        className='column2'>
                        {studentBranch}</td>
                    </tr>
                    <tr>
                        <td
                            id='details-2'
                            className='column1'
                        >Outprocessing Status</td>
                        <td
                            className='column2'>
                            {studentStatus}</td>
                    </tr>
                    <tr>
                        <td
                            id='details-3'
                            className='column1'
                        >Current Taskers</td>
                        <td
                        className='column2'>
                        {currentTasks}</td>
                    </tr>
                    <tr>
                        <td
                            id='details-4'
                            className='column1'
                        >To-do</td>
                        <td
                        className='column2'>
                        {toDoTasks}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default StudentDetail;