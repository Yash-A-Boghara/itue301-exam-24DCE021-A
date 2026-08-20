import { useState } from "react";

const DOCTORS = [
  "Dr. Amit Shah - Cardiologist",
  "Dr. Neha Patel - Dermatologist",
  "Dr. Rahul Mehta - Neurologist",
  "Dr. Priya Singh - Pediatrician",
];

const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

function BookingPage() {
  const [formData, setFormData] = useState({
    patientName: "",
    doctor: "",
    date: "",
    timeSlot: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitted(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="page-container">
      <h1>Book an Appointment</h1>

      {formData.patientName && (
        <p className="live-preview">
          Booking for: <strong>{formData.patientName}</strong>
        </p>
      )}
      {formData.doctor && (
        <p className="live-preview">
          Selected doctor: <strong>{formData.doctor}</strong>
        </p>
      )}

      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="patientName">Patient Name</label>
        <input
          id="patientName"
          type="text"
          name="patientName"
          placeholder="Enter your full name"
          value={formData.patientName}
          onChange={handleChange}
          required
        />

        <label htmlFor="doctor">Doctor</label>
        <select
          id="doctor"
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          required
        >
          <option value="">-- Select a Doctor --</option>
          {DOCTORS.map((doc) => (
            <option key={doc} value={doc}>
              {doc}
            </option>
          ))}
        </select>

        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="timeSlot">Time Slot</label>
        <select
          id="timeSlot"
          name="timeSlot"
          value={formData.timeSlot}
          onChange={handleChange}
          required
        >
          <option value="">-- Select a Time Slot --</option>
          {TIME_SLOTS.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>

        <button type="submit" className="submit-btn">
          Confirm Appointment
        </button>
      </form>

      {submitted && (
        <div className="confirmation-card">
          <h2>Appointment Confirmed!</h2>
          <p><strong>Patient:</strong> {formData.patientName}</p>
          <p><strong>Doctor:</strong> {formData.doctor}</p>
          <p><strong>Date:</strong> {formData.date}</p>
          <p><strong>Time:</strong> {formData.timeSlot}</p>
        </div>
      )}
    </div>
  );
}

export default BookingPage;