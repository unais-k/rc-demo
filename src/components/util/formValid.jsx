import React, { useState } from 'react';

const FormValidationExample = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate the input and update errors
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    switch (name) {
      case 'name':
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: value.length < 3 ? 'Name must be at least 3 characters long' : '',
        }));
        break;
      case 'phoneNumber':
        setErrors((prevErrors) => ({
          ...prevErrors,
          phoneNumber: !/^\d{10}$/.test(value) ? 'Enter a valid phone number' : '',
        }));
        break;
      case 'email':
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: !/^\S+@\S+\.\S+$/.test(value) ? 'Enter a valid email address' : '',
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform additional actions on form submission
    // For example, sending the data to a server
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <p className="error">{errors.name}</p>
      </div>

      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <p className="error">{errors.phoneNumber}</p>
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <p className="error">{errors.email}</p>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidationExample;