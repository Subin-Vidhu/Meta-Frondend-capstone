import React, { useState, useEffect } from 'react';
import GuestSelector from './GuestSelector/GuestSelector';
import DateSelecotr from './DateSelector/DateSelector';
import TimeSelector from './TimeSelector/TimeSelector';

import Reserve from './Reserve/Reserve';

function BookingForm(props) {
  const [time, setTime] = useState('00:00');
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState('');
  const [ocassion, setOccasion] = useState('birthday');

  // contains the data of the user from the reservation page which will be submitted via server to the database
  const [reservation, setReservation] = useState({guests: guests, date: '', time: '', ocassion: ocassion});

  // handler function in the Parent component
  // time is passed to it from child component
  /*
    passing chooseTime handler function as props to TimeSelector component and then to TimeCapsule component from there on each click on radio button a specific time value is passed to it.
  */
  const chooseTime = (time) => {
    setTime(time);

    setReservation({...reservation, time: time});
  }

  // handler function in the Parent component
  const chooseGuest = (guests) => {
    setGuests(guests);
    setReservation({...reservation, guests: guests});
  }

  // handler function in the Parent component to get date selected from child ccomponent

  const chooseDate = (date) => {
    setDate(date);
    setReservation({...reservation, date: date});

    props.dispatchTimeslotsOnDateChange(date);

  }    

  const chooseOcassion = (ocassion) => {
    setOccasion(ocassion);

    // reservationData['ocassion'] = ocassion;
    setReservation({...reservation, ocassion: ocassion});
  }



  // Form Submission
  const onSubmitHandler = (e) => {
    e.preventDefault();

    // Submission happens here
    
    props.submitReservation(reservation);
  }


  const validateReservation = () => {
    if (reservation.time !== '' && 
        reservation.date !== '' && 
        reservation.guests !== '' && 
        reservation.ocassion !== '') {
      return true;
    }

    return false;
  }


  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <GuestSelector chooseGuest={ chooseGuest } />

        <DateSelecotr chooseDate={chooseDate} chooseOcassion={chooseOcassion} ocassion={ocassion}/>

        <TimeSelector chooseTime={ chooseTime } availableTimeSlots={props.availableTimeSlots} />

        { // Enable, Disable Submit button on form validation
          validateReservation() ? <Reserve value={0} /> : <Reserve value={1} />
        }
      </form>
    </div>
  );
};

export default BookingForm;