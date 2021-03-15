import React from 'react';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';

const Hero = () => {
    return (

        <div className="container">
            <div className="row mt-3">
                <div className="col-12 col-md-4">
                    <HomeLeft></HomeLeft>
                </div>
                <div className="col-12 col-md-8">
                    <HomeRight></HomeRight>
                </div>
            </div>
        </div>

    );
};

export default Hero;