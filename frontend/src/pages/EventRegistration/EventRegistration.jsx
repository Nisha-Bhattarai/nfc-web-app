import React, { useState } from "react";
import InputField from "../../components/InputField/InputField";
import SelectField from "../../components/SelectField/SelectField";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton"; 
import "./EventRegistration.css";

const EventRegistration = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    event: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!form.firstName || !form.lastName || !form.email || !form.event) return;
    if (!isValidEmail(form.email)) return;
    alert(`Thanks, ${form.firstName}! You registered for ${form.event}.`);
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

        <SelectField
          id="event"
          label="Which event are you registering for?"
          value={form.event}
          onChange={update("event")}
          required
          options={["Workshop", "Webinar", "Conference"]}
          error={submitted && !form.event ? "Please select an event." : ""}
        />

        <PrimaryButton type="submit">Register Now</PrimaryButton>
      </form>
    </div>
  );
}

export default EventRegistration