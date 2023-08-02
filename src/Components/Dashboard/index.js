import React from 'react';
import Base from '../Base';

function Dashboard() {
    return (
       <Base title={"StudentsVerse"} description={""}>
            <div>
                <span className="dashboard-style">
                    <img id="dashb-img" src="https://statequota.sikkim.gov.in/Content/img/sso-intro.svg" alt="Student Application Dashboard"></img>
                    <h3 className="dashboard-head">Students details register application. Navigate to Different pages</h3>
                </span>
            </div>
       </Base>
    );
}

export default Dashboard;