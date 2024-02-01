import React from 'react';

function InputTable(props) {
    return (
        <div>
            <div>Input Table</div>
            <div className='Header'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>LinkedIn</th>
                        <th>Github</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{props.sHeader.Name}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{props.sHeader.Email}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{props.sHeader.Phone}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{props.sHeader.LinkedIn}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{props.sHeader.GitHub}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{props.sHeader.Address}</td>
                    </tr>
                </tbody>
            </table>
            </div>

            <div className='Profile'>
                 Profile
                 <div style={{ border: '1px solid black', padding: '8px' }}>{props.sProfile.sProfile}</div>   
            </div>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th>Skills</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {props.sSkills.map((skills, index) => (
                            <td key={index} style={{ border: '1px solid black', padding: '8px' }}>{skills.sName}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
            <h3>Education</h3>
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
    <thead>
        <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>DegreeType</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>CollegeName</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>DegreeName</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Major</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Gpa</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>StartDate</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>EndDate</th>
        </tr>
    </thead>
    <tbody>
        {props.sDegreeList.map((degree, index) => (
            <tr key={index}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{degree.DegreeType}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{degree.CollegeName}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{degree.DegreeName}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{degree.Major}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{degree.Gpa}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{degree.StartDate}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{degree.EndDate}</td>
            </tr>
        ))}
    </tbody>
</table>
<h3>Work Experience</h3>

<table style={{ borderCollapse: 'collapse', width: '100%' }}>
    <thead>
        <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Company Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Job Title</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Start Date</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>End Date</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Location</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Description</th>
        </tr>
    </thead>
    <tbody>
        {props.sExperienceList.map((ExperienceList, index) => (
            <tr key={index}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{ExperienceList.Company_Name}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{ExperienceList.JobTitle}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{ExperienceList.Start_date}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{ExperienceList.End_date}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{ExperienceList.Location}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{ExperienceList.Description}</td>
            </tr>
        ))}
    </tbody>
</table>
        </div>
    );
}

export default InputTable;
