import React, { useState } from "react";
import InputField from "../../components/InputField/InputField";
import SelectField from "../../components/SelectField/SelectField";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import "./EventRegistration.css";
import { useLocation, Navigate } from "react-router-dom";

const EventRegistration = () => {
  const location = useLocation();
  const userId = location.state?.userId;
  const eventId = location.state?.eventId;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);


  if (!userId) {
    // fallback if someone accesses the page directly
    return <Navigate to="/404" replace />;
  }

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   setSubmitted(true);
  //   if (!form.firstName || !form.lastName || !form.email || !form.event) return;
  //   if (!isValidEmail(form.email)) return;
  //   alert(`Thanks, ${form.firstName}! You registered for ${form.event}.`);
  // };

  const onSubmit = async (e) => {
  e.preventDefault();
  setSubmitted(true);

  // Basic validation
  if (!form.firstName || !form.lastName || !form.email) return;
  if (!isValidEmail(form.email)) return;

  // Construct the payload
  const payload = {
    userId,
    eventId,
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    // add more fields if you have
  };

  try {
    const response = await fetch("https://nfc-be.onrender.com/api/v1/profile/event/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to register event");
    }

    const data = await response.json();
    // You can show a success message or navigate
    alert(`Thanks, ${form.firstName}! You registered for event successfully.`);
    // Optionally, reset the form
    setForm({ firstName: "", lastName: "", email: "" });
  } catch (err) {
    console.error(err);
    alert("Something went wrong. Please try again later.");
  }
};


  return (
    <div className="er-container" role="form">
      <div className="er-header">
        <h1>
          <span className="er-title">Event Registration</span>
        </h1>
      </div>

      <form className="er-form" onSubmit={onSubmit} noValidate>
        <InputField
          id="firstName"
          label="First Name"
          value={form.firstName}
          onChange={update("firstName")}
          required
          error={submitted && !form.firstName ? "First name is required." : ""}
        />
        <InputField
          id="lastName"
          label="Last Name"
          value={form.lastName}
          onChange={update("lastName")}
          required
          error={submitted && !form.lastName ? "Last name is required." : ""}
        />
        <InputField
          id="email"
          label="Email"
          value={form.email}
          onChange={update("email")}
          required
          error={
            submitted && !form.email
              ? "Email is required."
              : submitted && !isValidEmail(form.email)
                ? "Please enter a valid email."
                : ""
          }
        />

    
        <PrimaryButton type="submit">Register Now</PrimaryButton>
      </form>
    </div>
  );
}

export default EventRegistration