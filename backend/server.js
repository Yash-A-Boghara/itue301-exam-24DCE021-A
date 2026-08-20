const express = require("express");

const app = express();

app.use(express.json());

const doctors = [
  {
    id: 1,
    name: "Dr. Amit Shah",
    email: "amit@gmail.com",
    specialisation: "Cardiologist",
    available: true
  },
  {
    id: 2,
    name: "Dr. Neha Patel",
    email: "neha@gmail.com",
    specialisation: "Dermatologist",
    available: true
  }
];

const appointments = [
  {
    id: 1,
    patientId: 1,
    doctorId: 1,
    date: "2026-08-25",
    timeSlot: "10:00 AM",
    status: "confirmed",
    reason: "Regular checkup"
  }
];

function requestLogger(req, res, next) {
  console.log(
    `[${req.method}] ${req.path} [${new Date().toISOString()}]`
  );

  next();
}

app.use(requestLogger);

app.get("/api/v1/appointments", (req, res) => {
  res.status(200).json(appointments);
});

app.post("/api/v1/appointments", (req, res) => {
  const { patientId, doctorId, date, timeSlot, status, reason } = req.body;

  if (!patientId || !doctorId || !date || !timeSlot) {
    return res.status(400).json({
      error: "patientId, doctorId, date and timeSlot are required"
    });
  }

  const appointment = {
    id: appointments.length + 1,
    patientId,
    doctorId,
    date,
    timeSlot,
    status: status || "pending",
    reason: reason || ""
  };

  appointments.push(appointment);

  res.status(201).json(appointment);
});

app.get("/api/v1/doctors", (req, res) => {
  res.status(200).json(doctors);
});

app.use((err, req, res, next) => {
  console.log(err.message);

  res.status(500).json({
    error: "Internal server error"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});