import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import "./bookingform.css";

// Movie Data
const movies = [
  { id: 1, title: "Inception" },
  { id: 2, title: "Interstellar" },
  { id: 3, title: "The Dark Knight" },
  { id: 4, title: "The Dark Knight Rises" },
  { id: 5, title: "Memento" },
  { id: 6, title: "Dunkirk" },
  { id: 7, title: "Tenet" },
  { id: 8, title: "The Prestige" },
  { id: 9, title: "Insomnia" },
];

const SEAT_ROWS = 10;
const SEAT_COLS = 10;
const TICKET_PRICE = 150; // Fixed price per ticket
const UPI_ID = "9542532209@upi"; // Replace with actual UPI ID

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  const [seatMap, setSeatMap] = useState(() => {
    const savedSeats = JSON.parse(localStorage.getItem(`seats-${id}`));
    return savedSeats || Array.from({ length: SEAT_ROWS }, () => Array(SEAT_COLS).fill(false));
  });

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [paymentDone, setPaymentDone] = useState(false);
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem(`seats-${id}`, JSON.stringify(seatMap));
  }, [seatMap, id]);

  const validateForm = () => {
    if (name.length < 3) {
      alert("Name must be at least 3 characters long.");
      return false;
    }
    if (!/^\d{10}$/.test(mobile)) {
      alert("Invalid mobile number. Please enter a 10-digit number.");
      return false;
    }
    if (selectedSeats.length < 1) {
      alert("Please select at least one seat.");
      return false;
    }
    return true;
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setPaymentDone(true);
  };

  const confirmBooking = () => {
    const updatedSeatMap = seatMap.map((row, rowIndex) =>
      row.map((seat, colIndex) =>
        selectedSeats.some(([r, c]) => r === rowIndex && c === colIndex) ? true : seat
      )
    );

    setSeatMap(updatedSeatMap);
    setIsBookingSuccess(true);

    setTimeout(() => navigate(`/movie/${id}`), 2000);
  };

  const toggleSeatSelection = (row, col) => {
    if (seatMap[row][col]) return;

    setSelectedSeats((prevSeats) =>
      prevSeats.some(([r, c]) => r === row && c === col)
        ? prevSeats.filter(([r, c]) => !(r === row && c === col))
        : [...prevSeats, [row, col]]
    );
  };

  const totalAmount = selectedSeats.length * TICKET_PRICE;
  const upiQRData = `upi://pay?pa=${UPI_ID}&pn=${name}&am=${totalAmount}&cu=INR`;

  if (!movie) {
    return <h2>Error: Movie not found</h2>;
  }

  return (
    <div className="booking-form-page">
      <h2>Booking for {movie.title}</h2>
      <p>Selected Seats: {selectedSeats.length}</p>
      <p>Total Amount: ₹{totalAmount}</p>

      {isBookingSuccess ? (
        <p>Booking Successful! Redirecting...</p>
      ) : paymentDone ? (
        <div className="payment-section">
          <h3>Scan to Pay</h3>
          <QRCodeCanvas value={upiQRData} size={200} />
          <p>UPI ID: {UPI_ID}</p>
          <p>Amount: ₹{totalAmount}</p>
          <button onClick={confirmBooking}>I have paid</button>
        </div>
      ) : (
        <form onSubmit={handleBookingSubmit}>
          <div>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="mobile">Mobile Number:</label>
            <input type="text" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required maxLength="10" />
          </div>

          <h3>Select Seats</h3>
          <div className="seat-map">
            {seatMap.map((row, rowIndex) => (
              <div key={rowIndex} className="seat-row">
                {row.map((seat, colIndex) => (
                  <button
                    key={colIndex}
                    className={`seat ${seat ? "booked" : selectedSeats.some(([r, c]) => r === rowIndex && c === colIndex) ? "selected" : ""}`}
                    onClick={() => toggleSeatSelection(rowIndex, colIndex)}
                    type="button"
                    disabled={seat}
                  >
                    {seat ? "X" : "O"}
                  </button>
                ))}
              </div>
            ))}
          </div>

          <button type="submit">Proceed to Payment</button>
        </form>
      )}
    </div>
  );
};

export default BookingForm;
