import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI} from '../../utilities/API';
import { React, useReducer } from "react";

import { useNavigate, redirect } from "react-router-dom";


const updateTimeSlots = (availableTimeSlots, date) => {
  const response = fetchAPI(new Date(date));
 
  return (
    response.morning.length !== 0 && response.afternoon.length !== 0 && response.evening.length !== 0
    ) ? response : availableTimeSlots; 
}

const initTimeSlots = (initAvaliableTimeSlots) => {
    // return [...initAvaliableTimeSlots, ...fetchAPI(new Date())];
    return {
        morning: [...initAvaliableTimeSlots.morning, ...fetchAPI(new Date()).morning], 
        afternoon: [...initAvaliableTimeSlots.afternoon, ...fetchAPI(new Date()).afternoon], 
        evening: [...initAvaliableTimeSlots.evening, ...fetchAPI(new Date()).evening]
    };
}

const Reservations = () => {

  // Reducer hook which will update the available time slots and initialize the available time slots
   const [
    availableTimeSlots, 
    dispatchTimeslotsOnDateChange
  ] = useReducer(updateTimeSlots, {morning: [], afternoon: [], evening: []}, initTimeSlots);

  const navigate = useNavigate();

  // Handler Function to submit the reservation data to the server
  const submitReservation = (reservation) => {
    console.log("Reservation From Data: ", reservation);
    const response = submitAPI(reservation);

    const confrimPageMap = new Map();
    confrimPageMap.set("confirmedBooking", {name: 'Confirmed Booking', path: '/ConfirmedBooking', anchorable: true});


    if (response) {
      // alert("Data Submitted Successfully");
      navigate(confrimPageMap.get("confirmedBooking").path);
    } else {
      alert("Data Submission Failed");
    }

  }


  return (
    <>
      <BookingForm 
        submitReservation={submitReservation} 
        availableTimeSlots={availableTimeSlots} 
        dispatchTimeslotsOnDateChange={dispatchTimeslotsOnDateChange}
      />
    </>
  )
};

export default Reservations;