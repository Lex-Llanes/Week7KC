import React, { useState } from "react";
import "../styles.css";

const PERMISSIONS = ["Yes", "No"];

const RegisterYourApplicationForm = () => {
  const [date, setDate] = useState(new Date());

  const [submitted, setSubmitted] = useState(false);

  const [form, setInput] = useState({
    nameInput: "",
    emailInput: "",
    ageInput: "",
    aboutInput: ""
  });

  console.log(form);

  const handleNameInput = (event) => {
    setInput({ ...form, nameInput: event.target.value });
  };

  const handleEmailInput = (event) => {
    setInput({ ...form, emailInput: event.target.value });
  };

  const handleAgeInput = (event) => {
    setInput({ ...form, ageInput: event.target.value });
  };

  const handleAboutInput = (event) => {
    setInput({ ...form, aboutInput: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Please Register for our next Event</h2>
      {submitted ? <h3 style={{ color: "green" }}>Submit Complete!</h3> : null}
      <label for="nameField">Name*:</label>
      <input
        onChange={handleNameInput}
        value={form.nameInput}
        type="text"
        required
        placeholder="Name"
        name="nameField"
      />

      <label>Email*:</label>
      <input
        onChange={handleEmailInput}
        value={form.emailInput}
        type="email"
        required
        placeholder="Email"
        name="emailField"
      />

      <label>Age*:</label>
      <input
        onChange={handleAgeInput}
        value={form.ageInput}
        type="number"
        required
        min="0"
        placeholder="Age"
      />

      <label>About us*:</label>
      <select onChange={handleAboutInput} value={form.aboutInput} required>
        <option>Do you want to receive Techtonica's Newsletter</option>
        {PERMISSIONS.map((preference) => (
          <option key={preference}>{preference}</option>
        ))}
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterYourApplicationForm;
