import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './input.css';

function ProfileInput(props) {

    const [profile, setProfile] = useState({ sProfile: "" });
    const [open, setOpen] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (!profile.sProfile) return;
        console.log("Final profile: ", profile);

        props.addProfile(profile);
        setProfile({ sProfile: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='inputLabel'>profileInput</div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                aria-label="Toggle skill input"
            >
                {open ? (
                    <FontAwesomeIcon icon={faArrowUp} />
                ) : (
                    <FontAwesomeIcon icon={faArrowDown} />
                )}
            </Button>
            <Collapse in={open}>
                <div id="_skill_prompt">
                    <label htmlFor="sProfile">Profile</label>
                    <input type="text" name="sProfile" value={profile.sProfile} onChange={handleInputChange} />
                </div>
            </Collapse>
            {open ? (
                <Button type="submit" className="Primary">Submit</Button>
            ) : (
                <div></div>
            )}

        </form>
    )
}

export default ProfileInput;
