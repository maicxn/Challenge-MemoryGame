import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [name, setName] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();


  const handleInput = (event) => {
    const inputValue = event.target.value;
    setName(inputValue);

    if (inputValue.length > 3) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem("player", name);
    navigate("/memoryGame");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login__header">
        <img src="/brain.png" alt="brain icon" />
        <h1>Challenge Phygital LAB!</h1>
      </div>
      <input
        type="text"
        placeholder="Nome"
        className="login__input"
        value={name}
        onChange={handleInput}
      />
      <button type="submit" className="login__button" disabled={isButtonDisabled}>
        Jogar
      </button>
    </form>
  );
};

export default Login;
