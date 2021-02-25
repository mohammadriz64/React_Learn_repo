import React from "react";
import "./Student_Form.css";

export const Students_Admission_Form = () => {
  return (
    <div>
      <h3 className="Acad_Heading">
        Academic Details:(Inter/12th Std. Details)
      </h3>
      <form>
        <label>Name of Exam :</label>
        <input className="student_input" type="text" /> <br />
        <label>Board of Exam :</label>
        <input className="student_input" type="text" /> <br />
        <label>Name of School/college :</label>
        <input className="student_input" type="text" /> <br />
        <label>HallTicket No :</label>
        <input className="input_inline" type="text" />
        <label>Total Marks Obtained :</label>
        <input className="input_inline" type="text" />
        <label>Maximum Marks :</label>
        <input className="input_inline" type="text" /> <br/>
        <label>Passing Month :</label>
        <input className="input_inline" type="text" />
        <label>Year :</label>
        <input className="input_inline" type="text" />
        <label>Percentage Marks Scored :</label>
        <input className="input_inline" type="text" />
        <label>Grade :</label>
        <input className="input_inline" type="text" />
      </form>
      <p className="note_heading">(Note: Attach attested Photocopy of 12th/Diploma std marks card)</p>
    </div>
  );
};
