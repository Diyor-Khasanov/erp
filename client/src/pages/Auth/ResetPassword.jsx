import React, { useState } from "react";
import "./auth.scss";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    // Reset parol logikasi (API chaqiruv)
    setMessage("Parolni tiklash havolasi emailingizga yuborildi.");
  };

  return (
    <div className="auth-container">
      <h2>Parolni tiklash</h2>
      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Emailingizni kiriting"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Yuborish</button>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default ResetPassword;
