
// src/pages/Auth/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Auth.scss";

const Signup = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student", // student, teacher, admin
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <h2>{t("signup_title")}</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          name="name"
          placeholder={t("full_name")}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder={t("email")}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder={t("password")}
          value={formData.password}
          onChange={handleChange}
          required
        />
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="student">{t("student")}</option>
          <option value="teacher">{t("teacher")}</option>
          <option value="admin">{t("admin")}</option>
        </select>
        <button type="submit">{t("signup")}</button>
      </form>
    </div>
  );
};

export default Signup;
