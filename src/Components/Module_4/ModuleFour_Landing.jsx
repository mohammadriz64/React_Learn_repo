import React, { memo } from 'react';
import { Row, Col } from 'react-bootstrap';
import CondRender_Par_F from './Conditional_rendering_Function/A-ConditionalRendering_TernaryMethod/CondRender_Par_F';
import Radium_Parent from './Styling_By_Radium/Radium_Parent';

const ModuleFour_Landing = () => {
    return (
        <div>
            <h2>Conditional Rending</h2>
            <Row>
                <Col xs={6} lg={6} md={6}>
                    <CondRender_Par_F />
                    <Radium_Parent />

                </Col>
            </Row>

        </div>
    );
};

export default ModuleFour_Landing;