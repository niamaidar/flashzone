import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ClientDetails() {
  const { id } = useParams();
  const [client, setClient] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");


  useEffect(() => {
    fetchClientDetails();
  }, []);


  const fetchClients = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/clients");
      console.log("response:", response.data);
      const filteredClients = response.data.filter(
        (client) => client.user.is_admin === 0
      );
      setClients(filteredClients);
      console.warn(filteredClients);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchClientDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/clients/${id}`
      );
      setClient(response.data);
    } catch (error) {
      console.log("where the error is : ", error);
    }
  };

  if (!client) {
    return <div>Loading...</div>;
  }
  
  const openEditModal = (client) => {
    setSelectedClient(client);
    setFirstName(client.first_name);
    setLastName(client.last_name);
    setCity(client.city);
    setAddress(client.address);
    setTelephone(client.telephone);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedClient(null);
    setFirstName("");
    setLastName("");
    setCity("");
    setAddress("");
    setTelephone("");
    setEditModalOpen(false);
  };

  const updateClient = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/clients/${selectedClient.id}`,
        {
          first_name: firstName,
          last_name: lastName,
          city: city,
          address: address,
          telephone: telephone,
        }
      );
      console.log(response.data);
      closeEditModal();
      fetchClients();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Client Details</h1>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{client.user}</h5>
          <p className="card-text">
            <strong>First Name:</strong> {client.first_name}
          </p>
          <p className="card-text">
            <strong>Last Name:</strong> {client.last_name}
          </p>
          <p className="card-text">
            <strong>City:</strong> {client.city}
          </p>
          <p className="card-text">
            <strong>Address:</strong> {client.address}
          </p>
          <p className="card-text">
            <strong>Telephone:</strong> {client.telephone}
          </p>
          <button
            className="btn btn-primary mr-2"
            onClick={() => openEditModal(client)}
          >
            Edit
          </button>
        </div>
      </div>
         {/* Edit Modal */}
         {selectedClient && (
        <div className={`modal ${editModalOpen ? "d-block" : "d-none"}`}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Client</h5>
                <button
                  type="button"
                  className="close"
                  onClick={closeEditModal}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      className="form-control"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Telephone</label>
                    <input
                      type="text"
                      className="form-control"
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={updateClient}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeEditModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClientDetails;
