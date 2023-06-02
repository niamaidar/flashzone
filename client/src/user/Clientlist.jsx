// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./../App.css"; 	
// function ClientList() {
//   const [clients, setClients] = useState([]);

//   useEffect(() => {
//     fetchClients();
//   }, []);

//   const fetchClients = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/api/clients");
//       console.log('response:' , response.data);
//       const filteredClients = response.data.filter(
//         (client) => client.user.is_admin === 0
//       );
//       setClients(filteredClients);
//       console.warn(filteredClients);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const removeClient = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8000/api/clients/${id}`);
//       fetchClients(); // Refresh the client list
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Clients</h1>
//       <br/>
//       <div className="card-deck">
//       <div className="row ">
      
//         {clients.map((client) => (
//           <div className="col-md-4 card-header " key={client.id}>  
//             <div className="card mb-3 card border-primary mb-3">
//                 <div className="card-body">
//                 <h5 className="card-title">{client.user.name}</h5>
//                 <p className="card-text">First Name: {client.first_name}</p>
//                 <p className="card-text">Last Name: {client.last_name}</p>
//                 <p className="card-text">City: {client.city}</p>
//                 <p className="card-text">Address: {client.address}</p>
//                 <p className="card-text">Telephone: {client.telephone}</p>
//                                   <button className="btn btn-danger" onClick={() => removeClient(client.id)}>Remove</button>

//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       </div>
//     </div>
//   );
// }

// export default ClientList;
import React, { useEffect, useState } from "react";
import axios from "axios";

function ClientList() {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");

  useEffect(() => {
    fetchClients();
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


 
  const removeClient = async (id) => {
        try {
          await axios.delete(`http://localhost:8000/api/clients/${id}`);
          fetchClients(); // Refresh the client list
        } catch (error) {
          console.log(error);
        }
      };
    

  return (
    <div className="container">
      <h1>Clients</h1>
      <br />
      <div className="card-deck">
        <div className="row">
          {clients.map((client) => (
            <div className="col-md-4 card-header" key={client.id}>
              <div className="card mb-3 card border-primary mb-3">
                <div className="card-body">
                  <h5 className="card-title">{client.user.name} - {client.user.id}</h5>
                  <p className="card-text">First Name: {client.first_name}</p>
                  <p className="card-text">Last Name: {client.last_name}</p>
                  <p className="card-text">City: {client.city}</p>
                  <p className="card-text">Address: {client.address}</p>
                  <p className="card-text">Telephone: {client.telephone}</p>
                  
                 <button className="btn btn-danger" onClick={() => removeClient(client.id)}>Remove</button>

                </div>
              </div>
            </div>
          ))}
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

export default ClientList;
