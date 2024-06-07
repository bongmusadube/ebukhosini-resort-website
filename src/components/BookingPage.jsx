import React from 'react';
import '../styles/BookingPage.css';

const BookingPage = () => {
    const [bookingDetails, setBookingDetails] = useState({
      name: '',
      email: '',
      checkInDate: '',
      checkOutDate: '',
      guests: 1,
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setBookingDetails({ ...bookingDetails, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Booking Details:', bookingDetails);
      alert('Booking Successful!');
    };
  
    return (
      <div className="book">
        <div className="container">
          <h2>Book Your Stay</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={bookingDetails.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={bookingDetails.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="checkInDate">Check-In Date:</label>
              <input
                type="date"
                id="checkInDate"
                name="checkInDate"
                value={bookingDetails.checkInDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="checkOutDate">Check-Out Date:</label>
              <input
                type="date"
                id="checkOutDate"
                name="checkOutDate"
                value={bookingDetails.checkOutDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="guests">Number of Guests:</label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={bookingDetails.guests}
                onChange={handleChange}
                required
                min="1"
              />
            </div>
            <button type="submit">Book Now</button>
          </form>
        </div>
      </div>
    );
  };
  

export default BookingPage;
