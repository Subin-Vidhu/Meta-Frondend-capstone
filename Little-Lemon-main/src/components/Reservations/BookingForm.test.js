import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

//TODO: TEST NEEDS tobe Corrected, as they failed abnormally

  const availableTimeSlots = ['17:00', '17:30'];
  const today = new Date().toISOString().split('T')[0];
  const dispatchOnDateChange = jest.fn();
  const submitReservation = jest.fn();


test ('Should Successfully Submit Form with all data Fileds Filled', () =>{
    render(<BookingForm 
        submitReservation={submitReservation} 
        availableTimeSlots={availableTimeSlots} 
      />);

    const submitButtom = screen.getByRole('button');
    fireEvent.click(submitButtom);

    expect(submitReservation).toHaveBeenCalled({
        date: today,
        guests: 1,
        ocassion: "birthday",
        time: availableTimeSlots.morning[0] ,
    });
});

