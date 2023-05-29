import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../App.css"; 	
function ClientList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/clients");
      console.log('response:' , response.data);
      const filteredClients = response.data.filter(
        (client) => client.user.is_admin === 0
      );
      setClients(filteredClients);
      console.warn(filteredClients);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Clients</h1>
      <br/>
      <div className="card-deck">
      <div className="row ">
      
        {clients.map((client) => (
          <div className="col-md-4 card-header " key={client.id}>  
            <div className="card mb-3 card border-primary mb-3">
                <div className="card-body">
                <h5 className="card-title">{client.user.name}</h5>
                <p className="card-text">First Name: {client.first_name}</p>
                <p className="card-text">Last Name: {client.last_name}</p>
                <p className="card-text">City: {client.city}</p>
                <p className="card-text">Address: {client.address}</p>
                <p className="card-text">Telephone: {client.telephone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default ClientList;
