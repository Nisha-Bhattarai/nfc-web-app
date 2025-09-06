import React, { useState } from "react";
import InputField from "../InputField/InputField";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./ExchangeContact.css";


export default function ExchangeContact({exchangeToUserId}) {
const [form, setForm] = useState({
firstName: "",
lastName: "",
email: "",
phone: "",
});
const [submitted, setSubmitted] = useState(false);


const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

const onSubmit = async (e) => {
  e.preventDefault();
  setSubmitted(true);

  const emailOk = /.+@.+\..+/.test(form.email);
  if (!form.firstName || !form.lastName || !emailOk || !form.phone) return;

  try {
    const response = await fetch("https://nfc-be.onrender.com/api/v1/contact/exchangeContact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        phone: form.phone,
        exchangeToUserId: exchangeToUserId, 
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(`Thanks, ${form.firstName}! Contact exchanged successfully.`);
      setForm({ firstName: "", lastName: "", email: "", phone: "" }); // reset form
      setSubmitted(false);
    } else {
      alert(`Error: ${data.error || "Something went wrong."}`);
    }
  } catch (err) {
    alert(`Error: ${err.message}`);
  }
};



const emailInvalid = submitted && !/.+@.+\..+/.test(form.email);


return (
<div className="ec-container" role="form">
    <div className="ec-header">
        <h1>
            <span className="ec-title-accent">Exchange Contact Information</span>
            <span className="ec-title-sub"> with us</span>
        </h1>
    </div>

<form className="ec-form" onSubmit={onSubmit} noValidate>
    <div className="ec-names">
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
    </div>

    <InputField
    id="email"
    type="email"
    label="Email"
    value={form.email}
    onChange={update("email")}
    required
    aria-invalid={emailInvalid}
    error={emailInvalid ? "Please enter a valid email." : ""}
    />


    <InputField
    id="phone"
    type="tel"
    label="Phone Number"
    value={form.phone}
    onChange={update("phone")}
    required
    autoComplete="tel"
    inputMode="tel"
    error={submitted && !form.phone ? "Phone number is required." : ""}
    />


<PrimaryButton type="submit">Exchange Contact</PrimaryButton>
</form>
</div>
);
}