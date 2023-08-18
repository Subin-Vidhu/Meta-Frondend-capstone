import './TimeSelector.css';
import React, { useState } from 'react';

const TimeCapsule = (props) => {

    // get the current time value  and pass to parent component
    const handleRadioChage = (e) => {
        props.chooseTime(e.target.value);
    }


    return (
            <div>
                <h1>{props.morning}</h1>
                <div className='timeslots-capsules' >
                {
                    props.slots.map((item) => {
                        return (
                        <span className='radio-lablel-box'>
                            <label htmlFor={item} className='radio-btn-label'>
                                <input type="radio" name="timeslots-m" id={item} value={item} onClick={handleRadioChage} />
                                {item}
                            </label>
                        </span>)
                    })
                }
                </div>
            </div> 
    );
}

const TimeSelector = (props) => {
    const hour = new Date().toTimeString().split(' ')[0].split(':');
    // console.log("Time: ", hour);

    let isMorning = false;
    let isAfternoon = false;
    let isEvening = false;
    // const hour = 21;
    if (parseInt(hour) >= 9 && parseInt(hour) < 12) {

        isMorning = true;
        isAfternoon = false;
        isEvening = false;

    } else if (parseInt(hour) >= 12 && parseInt(hour) < 16) {

        isMorning = false;
        isAfternoon = true;
        isEvening = false;
    } else if (parseInt(hour) >= 16 && parseInt(hour) < 21) {

        isMorning = false;
        isAfternoon = false;
        isEvening = true;

    }

    
    return (
        <div className="reservation__time-selector">
            {
                (isMorning && ( <TimeCapsule chooseTime={props.chooseTime} morning="Morning" slots={props.availableTimeSlots.morning} /> ))

                ||

                (isAfternoon && ( <TimeCapsule chooseTime={props.chooseTime} morning="Afternoon" slots={props.availableTimeSlots.afternoon}/>))

                ||

                (isEvening && ( <TimeCapsule chooseTime={props.chooseTime} morning="Evening" slots={props.availableTimeSlots.evening}/> ))

            }
        </div>
    );
};

export default TimeSelector;
