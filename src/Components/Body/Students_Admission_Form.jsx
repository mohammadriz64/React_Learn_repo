import React from 'react';
import './Student_Form.css';

export const Students_Admission_Form = () => {
    return (
        <div>
                <h3 className="Acad_Heading">Academic Details:(Inter/12th Std. Details)</h3>
            <form>
                <label>Name of Exam :</label><input className="student_input" type="text"/> <br/>
                <label>Board of Exam :</label><input className="student_input" type="text"/> <br/>
                <label>Name of School/college :</label><input className="student_input" type="text"/>

            </form>
        </div>
    );
};
