import HomePage from "./components/HomePage";
import DoctorsPage from "./components/DoctorsPage";
import BookingPage from "./components/BookingPage";
import AppointmentCard from "./components/AppointmentCard";

function App() {
  return (
    <div>
      <HomePage />

      <hr />

      <DoctorsPage />

      <hr />

      <BookingPage />

      <hr />

      <AppointmentCard
        patientName="Yash"
        doctorName="Dr. Amit Shah"
        date="25 August 2026"
        timeSlot="10:00 AM"
        status="confirmed"
      />

      <AppointmentCard
        patientName="Rahul"
        doctorName="Dr. Neha Patel"
        date="26 August 2026"
        timeSlot="11:00 AM"
        status="pending"
      />

      <AppointmentCard
        patientName="Amit"
        doctorName="Dr. Rahul Mehta"
        date="27 August 2026"
        timeSlot="2:00 PM"
        status="cancelled"
      />
    </div>
  );
}

export default App;