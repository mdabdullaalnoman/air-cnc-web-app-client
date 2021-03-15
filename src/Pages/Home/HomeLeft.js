import React, { useState } from 'react';
import './HomeLeft.css';
import { BsFillPlusCircleFill, BsFillDashCircleFill } from "react-icons/bs";

const HomeLeft = () => {
    const [adultCount, setAdultCount] = useState(0);
    const [child, setChildCount] = useState(0);
    const [babyCount, setBabyCount] = useState(0);
   
// Adult
    const handlePlus = () => {
        setAdultCount(adultCount + 1);
    };
    const handleMynus = () => {
        if (adultCount > 0) {
            setAdultCount(adultCount - 1);
        }
        else {
            setAdultCount(0)
        }
    };
// Child
    const handlePlusTwo = () => {
        setChildCount(child + 1)
    };
    const handleMynusTwo = () => {
        if (child > 0) {
            setChildCount(child - 1)
        }
        else {
            setChildCount(0)
        }
    };
// Baby
   const handlePlusThree = () => {
       setBabyCount(babyCount + 1)
   };
   const handleMynusThree = () => {
    if (child > 0) {
        setChildCount(child - 1)
    }
    else {
        setChildCount(0)
    }
};

    
    return (
        <div>

            <div className="row">
                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>where do you want to go ?</p>
            </div>

            {/* Location input */}
            <div className="row location-input">
                <p>Location</p>
                <input type="text" className="w-75" placeholder="add city landmark or address" name="location" />
            </div>

            {/* start end */}
            <div className="row start-end my-3">
                <div className="col-12 col-md-6  location-input">
                    <p>Arrival</p>
                    <input type="date" name="arrival" />
                </div>
                <div className="col-12 col-md-6 location-input">
                    <p>Departure</p>
                    <input type="date" name="arrival" />
                </div>
            </div>

            {/* Guest Count */}
            <div className="guestCountBox">
                <div className="guest">
                    <p>Guest</p>
                    <small>Adult {adultCount} Child {child} Baby {babyCount}</small>
                </div>

            </div>
            <BsFillDashCircleFill onClick={() => handleMynus()} />
            <BsFillPlusCircleFill onClick={() => handlePlus()} />
            <h1>{adultCount}</h1>

            <BsFillDashCircleFill onClick={() => handleMynusTwo()} />
            <BsFillPlusCircleFill onClick={() => handlePlusTwo()} />
            <h1>{child}</h1>

            <BsFillDashCircleFill onClick={() => handleMynusThree()} />
            <BsFillPlusCircleFill onClick={() => handlePlusThree()} />
            <h1>{babyCount}</h1>

        </div>
    );
};

export default HomeLeft;