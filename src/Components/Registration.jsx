import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div>
      <h2>Registration</h2> {/* Ändra texten till "Registration" */}
      <Link to="/">Tillbaka till Hem</Link> {/* Länk för att gå tillbaka */}
    </div>
  );
};

export default Registration;
