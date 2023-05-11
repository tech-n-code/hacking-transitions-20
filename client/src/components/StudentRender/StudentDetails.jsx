import React, {useContext} from 'react';
import tempData from './StudentDetailsTempData'
import '../../styles/StudentDetails.css'
import LeftColumnContext from "../../context/LeftColumnContext";

const StudentDetail = () => {
    const { studentdata, branchdata } = useContext(LeftColumnContext);

    const studentName = studentdata && studentdata.length > 0 ? studentdata[0].firstname + ' ' + studentdata[0].lastname : '';
    const studentStatus = studentdata && studentdata.length > 0 ? studentdata[0].dutystatus: '';
    const currentTasks = tempData[3];
    const studentInstallation = studentdata && studentdata.length > 0 ? studentdata[0].base: '';
    const studentLocation = studentdata && studentdata.length > 0 ? studentdata[0].location: '';
    const studentPhone = studentdata && studentdata.length > 0 ? studentdata[0].phonenumber: '';
    const studentEmail = studentdata && studentdata.length > 0 ? studentdata[0].email: '';
    let studentBranch = '';
    
    if (branchdata && branchdata.length > 0) {
      const foundBranch = branchdata.find(branch => branch.id === studentdata[0].branch_id);
      studentBranch = foundBranch ? foundBranch.name : '';
    }

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
                            id='details-4'
                            className='column1'
                        >Installation:</td>
                        <td
                        className='column2'>
                        {studentInstallation}</td>
                    </tr>
                    <tr>
                        <td
                            id='details-5'
                            className='column1'
                        >Location:</td>
                        <td
                        className='column2'>
                        {studentLocation}</td>
                    </tr>
                    <tr>
                        <td
                            id='details-6'
                            className='column1'
                        >Phone Number:</td>
                        <td
                        className='column2'>
                        {studentPhone}</td>
                    </tr>
                    <tr>
                        <td
                            id='details-7'
                            className='column1'
                        >Email:</td>
                        <td
                        className='column2'>
                        {studentEmail}</td>
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

                </tbody>
            </table>
        </div>
    )
}

export default StudentDetail;