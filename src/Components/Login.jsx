import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h2>Login</h2> {/* Behåll texten "Login" här */}
      <Link to="/">Tillbaka till Hem</Link> {/* Länk för att gå tillbaka */}
    </div>
  );
};

export default Login;
