import React from "react";
import "./Student_Form.css";

export const Students_Admission_Form = () => {
  return (
    <div>
      <h3 className="Main_Heading">
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
        <input className="input_inline" type="text" /> <br />
        <label>Passing Month :</label>
        <input className="input_inline" type="text" />
        <label>Year :</label>
        <input className="input_inline" type="text" />
        <label>Percentage Marks Scored :</label>
        <input className="input_inline" type="text" />
        <label>Grade :</label>
        <input className="input_inline" type="text" />
      </form>
      <p className="note_heading">
        (Note: Attach attested Photocopy of 12th/Diploma std marks card)
      </p>
      <p className="para_text">
        Candidate should fill the details of marks obtained in each individual
        subjects at Inter / 12th /Diploma std examinations in the following
        table/ candidate seeking Direct second year admission can write
        diploma/degree subjects and marks in the table
      </p>
      <table id="table_border" >
          <tr >
              <th className="table_row1">Subjects</th>
              <th className="table_row">Marks Obtained</th>
              <th className="table_row">Maximum Marks</th>
          </tr>
          <tr>
              <td className="table_row1">English</td>
              <td className="table_row"><input className="table_input" type="text"/></td>
              <td className="table_row"><input className="table_input" type="text"/></td>
          </tr>
          <tr>
              <td className="table_row1">English</td>
              <td className="table_row"><input className="table_input" type="text"/></td>
              <td className="table_row"><input className="table_input" type="text"/></td>
          </tr>
          <tr>
              <td className="table_row1">Physics</td>
              <td className="table_row"><input className="table_input" type="text"/></td>
              <td className="table_row"><input className="table_input" type="text"/></td>
          </tr>
          <tr>
              <td className="table_row1">Chemistry</td>
              <td className="table_row"><input className="table_input" type="text"/></td>
              <td className="table_row"><input className="table_input" type="text"/></td>
          </tr>
          <tr>
              <td className="table_row1">MAthematics</td>
              <td className="table_row"><input className="table_input" type="text"/></td>
              <td className="table_row"><input className="table_input" type="text"/></td>
          </tr>
          <tr>
              <td className="table_row1">Biology</td>
              <td className="table_row"><input className="table_input" type="text"/></td>
              <td className="table_row"><input className="table_input" type="text"/></td>
          </tr>
          <tr>
              <td className="table_row1">Computer Science</td>
              <td className="table_row"><input className="table_input" type="text"/></td>
              <td className="table_row"><input className="table_input" type="text"/></td>
          </tr>
          <tr>
              <td className="table_row1">Other</td>
              <td className="table_row"><input className="table_input" type="text"/></td>
              <td className="table_row"><input className="table_input" type="text"/></td>
          </tr>
          <tr>
              <td className="table_row1">Other</td>
              <td className="table_row"><input className="table_input" type="text"/></td>
              <td className="table_row"><input className="table_input" type="text"/></td>
          </tr>
      </table>
      <h3 className="after_Heading">
      Address Details: ( Local Address )
      </h3>
      <form>
      <label>Address :</label>
        <input className="address_input" type="text" /> <br />
        <input className="address_input" type="text" /> <br />
        <label>City :</label>
        <input className="input_inline" type="text" />
        <label>Pin :</label>
        <input className="input_inline" type="text" />
        <label>Dist. :</label>
        <input className="input_inline" type="text" />
        <label>State :</label>
        <input className="input_inline" type="text" /> <br/>
        <label>Parent’s Landline phone No. :</label>
        <input className="input_inline" type="text" />
        <label>Parent’s Mobile No. :</label>
        <input className="input_inline" type="text" /> <br/>
        <label>Candidate’s Mobile No :</label>
        <input className="input_inline" type="text" />
        <label>E-mail Id :</label>
        <input className="input_inline" type="text" /> <br/>
        <label>Nearest Bus Station :</label>
        <input className="input_inline" type="text" />
        <label>Railway Station :</label>
        <input className="input_inline" type="text" />
      </form>
      <h3 className="after_Heading">
      Address Details: ( Permanent Address )
      </h3>
      <form>
      <label>Address :</label>
        <input className="address_input" type="text" /> <br />
        <input className="address_input" type="text" /> <br />
        <label>City :</label>
        <input className="input_inline" type="text" />
        <label>Pin :</label>
        <input className="input_inline" type="text" />
        <label>Dist. :</label>
        <input className="input_inline" type="text" />
        <label>State :</label>
        <input className="input_inline" type="text" /> <br/>
        <label>Parent’s Landline phone No. :</label>
        <input className="input_inline" type="text" />
        <label>Parent’s Mobile No. :</label>
        <input className="input_inline" type="text" /> <br/>
        <label>Candidate’s Mobile No :</label>
        <input className="input_inline" type="text" />
        <label>E-mail Id :</label>
        <input className="input_inline" type="text" /> <br/>
        <label>Nearest Bus Station :</label>
        <input className="input_inline" type="text" />
        <label>Railway Station :</label>
        <input className="input_inline" type="text" />
      </form>
       <hr/>
      
    </div>
  );
};
