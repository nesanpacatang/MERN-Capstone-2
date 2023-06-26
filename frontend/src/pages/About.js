import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const About = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [driverLicenseNumber, setDriverLicenseNumber] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleDriverLicenseNumberChange = (event) => {
    setDriverLicenseNumber(event.target.value);
  };

  const validateForm = () => {
    const errors = {};

    if (!firstName.trim()) {
      errors.firstName = 'First Name is required';
    }

    if (!lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }

    if (!driverLicenseNumber.trim()) {
      errors.driverLicenseNumber = 'Driver License Number is required';
    } else {
      // Regular expression pattern for validating the format
      const licenseNumberPattern = /^[A-Z0-9]{8}$/;

      if (!licenseNumberPattern.test(driverLicenseNumber)) {
        errors.driverLicenseNumber = 'Invalid Driver License Number format';
      }
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log('Form submitted!');
      navigate('/finaldetails');
    }
  };

  return (
    <div className='py-40'>
      <div>
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
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleLastNameChange}
          className="border rounded-lg p-2 w-full"
        />
        {formErrors.lastName && (
          <p className="text-red-500">{formErrors.lastName}</p>
        )}
      </div>
      <div>
        <label htmlFor="driverLicenseNumber">Driver License Number:</label>
        <input
          type="text"
          id="driverLicenseNumber"
          name="driverLicenseNumber"
          value={driverLicenseNumber}
          onChange={handleDriverLicenseNumberChange}
          className="border rounded-lg p-2 w-full"
        />
        {formErrors.driverLicenseNumber && (
          <p className="text-red-500">{formErrors.driverLicenseNumber}</p>
        )}
      </div>
      
      <button
        className="py-1 px-10 bg-button text-white rounded-lg"
        onClick={handleSubmit}
      >
        Continue
      </button>
    </div>
  );
};
