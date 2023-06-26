import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const About = () => {
  const [firstName, setFirstName] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const validateForm = () => {
    const errors = {};

    if (!firstName.trim()) {
      errors.firstName = 'First Name is required';
    }

    // Add validation rules for other fields...

    setFormErrors(errors);

    // Return true if the form is valid (no errors)
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Submit the form
      console.log('Form submitted!');
    }
  };

  return (
    <div className='py-40'>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={firstName}
        onChange={handleFirstNameChange}
        className="border rounded-lg p-2 w-full"
      />
      {formErrors.firstName && (
        <p className="text-red-500">{formErrors.firstName}</p>
      )}

      <NavLink to="/finaldetails">
        <button
          className="py-1 px-10 bg-button text-white rounded-lg"
          onClick={handleSubmit}
        >
          Continue
        </button>
      </NavLink>
    </div>
  );
};


