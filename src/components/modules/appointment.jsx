import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";
import { HeroContent } from "../../constants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    serviceOfChoice: '', // Add a property for the service of choice
  });
  const [errors, setErrors] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    serviceOfChoice: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(errors)

    
    const hasErrors = Object.values(errors).some((error) => error.length > 0);


    if (hasErrors) {
   
   
      toast.error('Form has errors');
    } else {
 
      console.log('Form submitted:', formData);
      toast.success(`Form submitted`);
      
    }
   
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
        case 'serviceOfChoice':
          setErrors((prevErrors) => ({
            ...prevErrors,
            serviceOfChoice: value.length < 1 ? 'Enter a service' : '',
          }));
          break;
      default:
        break;
    }
   
  };


  return (
    <>
      <section className="py-14 dark:bg-gray-800 dark:text-gray-50">
      <ToastContainer />
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2">
          <div className="py-6 md:py-0 md:px-6">
            <img src="/retouched65.jpg" className="rounded-2xl" alt="" />
          </div>
          <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6" onSubmit={handleSubmit}>
            <div className="font-semibold font-montserrat text-gray-800">Book An Appointment</div>
            <div className="flex flex-col">
              <div className="flex-grow">
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base rounded-lg bg-default focus:outline-none"
                />
              </div>
              <div className="flex-grow mt-4">
                <input
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base rounded-lg bg-default focus:outline-none"
                />
              </div>
              <div className="flex-grow mt-4">
                <input
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  name="email"
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base rounded-lg bg-default focus:outline-none"
                />
              </div>
              <div className="flex w-full gap-4">
                <Select
                  label="Service of choice"
                  size="sm"
                  color="default"
                  className="mt-4 p-0"
                  value={formData.serviceOfChoice}
                  onChange={(value) => handleChange({ target: { name: 'serviceOfChoice', value } })}
                >
                  {HeroContent.map((animal, id) => (
                    <SelectItem
                      className="px-4 py-2.5 mt-2 text-base rounded-lg w-full text-black"
                      key={id}
                      value={animal.title}
                    >
                      {animal.title}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>
            <button
              type="submit"
              className="text-center w-fit bg-[#eec373] py-3 px-5 text-white text-sm font-semibold font-montserrat rounded-full"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Appointment;

