import React, {useContext} from 'react';
import '../../styles/StudentDetails.css'
import LeftColumnContext from "../../context/LeftColumnContext";

const StudentDetail = () => {
    const { studentdata, branchdata, assignColor, setRenderStudent } = useContext(LeftColumnContext);

    const studentName = studentdata && studentdata.length > 0 ? studentdata[0].firstname + ' ' + studentdata[0].lastname : '';
    const studentStatus = studentdata && studentdata.length > 0 ? studentdata[0].dutystatus: '';
    const studentInstallation = studentdata && studentdata.length > 0 ? studentdata[0].base: '';
    const studentLocation = studentdata && studentdata.length > 0 ? studentdata[0].location: '';
    const studentEmail = studentdata && studentdata.length > 0 ? studentdata[0].email: '';
    let studentBranch = '';

    if (branchdata && branchdata.length > 0) {
      const foundBranch = branchdata.find(branch => branch.id === studentdata[0].branch_id);
      studentBranch = foundBranch ? foundBranch.name : '';
    }

    const formattedPhoneNumber = studentdata[0].phonenumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3');
    const etsDate = new Date(studentdata[0].ets_date).toLocaleDateString('en-us');
    const setColor = assignColor(studentdata[0].ets_date)

    return (
        <div
            id='detailsmain'
            className='studentDetails'
        > 
            <table className="student-table">                    
  
                <tbody>
                    <tr>
                        <td
                            id='details-0'
                            className='column1'
                        >Name</td>
                        <td
                        className='column2'>
                        {studentName}
                            <td className='exit' onClick={() => { setRenderStudent(false) }}>X</td></td>
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
                        {formattedPhoneNumber}</td>
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
                            id='details-8'
                            className='column1'
                        >ETS Date:</td>
                        <td
                        className='column2'>
                        {etsDate}<div className='circle-student' id={setColor}></div></td>
                    </tr>
                    <tr>
                        <td
                            id='details-9'
                            className='column1'
                        >Outprocessing Status</td>
                        <td
                            className='column2'>
                            {studentStatus}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default StudentDetail;