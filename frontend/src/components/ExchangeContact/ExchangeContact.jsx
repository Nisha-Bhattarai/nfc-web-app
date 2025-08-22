import React, { useState } from "react";
import InputField from "../InputField/InputField";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./ExchangeContact.css";


export default function ExchangeContact() {
const [form, setForm] = useState({
firstName: "",
lastName: "",
email: "",
phone: "",
});
const [submitted, setSubmitted] = useState(false);


const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));


const onSubmit = (e) => {
e.preventDefault();
setSubmitted(true);


const emailOk = /.+@.+\..+/.test(form.email);
if (!form.firstName || !form.lastName || !emailOk || !form.phone) return;


alert(`Thanks, ${form.firstName}! We\'ll reach you at ${form.email}.`);
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