import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ClientForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/clients', {
        first_name: firstName,
        last_name: lastName,
        city:city,
        address:address,
        telephone:telephone,
      });

      console.log(response.data);

      // Clear form inputs
      setFirstName('');
      setLastName('');
      setCity('');
      setAddress('');
      setTelephone('');
    } catch (error) {
      console.error(error);
    }
    navigate('/clientlist')
  };

  return (
    <div className="container">
      <h1>Add Client</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="telephone" className="form-label">Telephone</label>
          <input type="text" id="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Add Client</button>
      </form>
    </div>
  );
};

export default ClientForm;
