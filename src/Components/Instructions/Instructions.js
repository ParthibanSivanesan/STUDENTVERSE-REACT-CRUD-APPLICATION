import React from 'react';
import Base from '../Base';

function Instructions() {
    return (
        <Base title={"Instructions"} description={""}>
         <div>
            <div>
                <h2 className="instruction-headline">Read the below Instrucions</h2>
            </div> 
            <div>
            <h4 className="instruction-headline">Add Students</h4>
            <ol>
                <li className="inst-style">Choose Your Profile</li>
                <li className="inst-style">Enter Your Name</li>
                <li className="inst-style">Enter Your Batch</li>
                <li className="inst-style">Enter Your Educational Qualification</li>
                <li className="inst-style">Enter Your Gender</li>
                <li className="inst-style">List out your skills</li>
            </ol>
            </div>
            <div>
            <h4 className="instruction-headline">Edit Students</h4>
            <ol>
                <li className="inst-style">You can edit all your existing data & submit the new one</li>
            </ol>
            </div>
             <div>
            <h4 className="instruction-headline">Delete Profile</h4>
            <ol>
                <li className="inst-style">Think & check twice before Deleting your Profile!</li>
            </ol>
            </div>
        </div>

   </Base>
    );
}

export default Instructions;