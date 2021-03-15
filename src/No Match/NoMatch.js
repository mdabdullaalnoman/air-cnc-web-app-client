import React from 'react';
import { useHistory } from 'react-router';
import './NoMatch.css';

const NoMatch = () => {
    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }
    return (
        <div className="main">
            <div className="child">
                <h1>404</h1>
                <p>Page Not Found</p>
                <button onClick={goToPreviousPath} className="btn btn-danger"> Go Back >> </button>
            </div>
        </div>
    );
};

export default NoMatch;