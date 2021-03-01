import React from "react";
import { Card, Button, CardColumns, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Home/Home.style.css";

export const EmployeeBox = ({employee,handleSelectedEmployee,handleShow}) => {
  const imgPath = `${employee.employeeThumbnail}`;
  const sectionStyle = {
    backgroundImage: "url(" + imgPath + ")",
  };

  return (
    <React.Fragment>
      {/* <Col lg="12"> */}
        <div className="card-margin">
          {/* <Card className="card-shadow"> */}
            {/* <div className="employeecard-image" style={{ backgroundImage: imgDisplay }}></div> */}
            {/* <div className="employeecard-image" style={sectionStyle}></div> */}
            {/* <div className="employeecard-image" style={{ backgroundImage: `url(${require("../../img/employee-1.png")})` }}></div> */}
            {/* <Card.Body>
              <div className="card-content">
                <Card.Title className="employeecard-title text-center">
                  {employee.FirstName}
                </Card.Title>
                <Card.Title className="employeecard-title text-center">
                  {employee.designame}
                </Card.Title>

                <Card.Text className="employeecard-title text-center">
                  {employee.DeptName}
                </Card.Text>
                <Card.Text className="employeecard-title text-center">
                  {employee.genderName}
                </Card.Text>
                <div className=" text-center">
                  <a
                    href="#"
                    className="btn-default btn-block btn3"
                    onClick={() => {
                      handleSelectedEmployee(employee);
                      handleShow();
                    }}
                  >
                    View Details
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card> */}

          {/* card starts here */}
          <Card className="card_detailing">
            <div className="card_inner">
        <Card.Img className="employeecard-image" style={sectionStyle}/>
            </div>
        <Card.Body>
          <div className="card_text">

          <Card.Title>
            {employee.FirstName} <br/>
             {employee.designame}
          </Card.Title>
          <Card.Text>
            {employee.DeptName}
          </Card.Text>
          <Button className="card_button" variant="primary">
            View Details
          </Button>
          </div>
        </Card.Body>
      </Card>
        </div>
      {/* </Col> */}
    </React.Fragment>
  );
};
