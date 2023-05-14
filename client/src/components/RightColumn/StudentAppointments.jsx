import React, { useState, useEffect, useContext } from "react";
import LeftColumnContext from "../../context/LeftColumnContext";
import RightColumnContext from "../../context/RightColumnContext";
import "../../styles/StudentAppointments.css"

export default function StudentAppointments(){

    const { students, tasks } = useContext(RightColumnContext);
    console.log("tasks state - ", tasks);
  
    return (
        <div>
          {students.map((student, indexed) => {
            const studentTasks = tasks.filter(task => task.student_id === student.id);
      
            return (
              <div key={indexed}>
                <div className="studentNames">
                  {student.firstname} {student.lastname}
                </div>
                <div className="appointments">
                  Reminder:
                  {studentTasks.map((task, i) => {
                    return (
                      <div key={i}>
                        <div>{task.note}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      );
}