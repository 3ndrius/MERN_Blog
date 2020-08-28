import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import API from "../helpers/API";
import { notify } from "../helpers/Notify";
import { useAuthAccess } from "../contexts/AuthContext";

export default function Login(props) {
  const { setAuth, auth, dispatch } = useAuthAccess();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formData;
      const config = { headers: { "Content-Type": "application/json" } };
      const body = { email, password };
      const response = await API.post("/login", body, config);
      if (response.data.success) {
        setAuth(response.data.login);
        localStorage.setItem("auth", JSON.stringify(response.data.login));
        props.history.push(`/`);
      }
      notify({ error: response.data.error });
    } catch (e) {
      notify({ error: e });
    }
  };
  const handleUser = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="container">
      <Form handleSubmit={handleLogin} handleChange={handleUser} />
    </div>
  );
}
