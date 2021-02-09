import React from 'react';
import PropsCh from './PropsCh';

const PropsPar = () => {
    return (
        <div>
            <PropsCh name="Bruce" heroName="Batman">
            <p>This is childern Props..!!!!</p>
            </PropsCh>
            <PropsCh name="John" heroname="Spiderman">
                <button>Action</button>
                </PropsCh>
            <PropsCh name="Diana" heroName="Wonderwoman"/>
        </div>
    );
};

export default PropsPar;