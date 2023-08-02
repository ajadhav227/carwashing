import React, { useState } from 'react';
import "./DeleteService.css";

export default function DeleteService() {
  const services = ['Service A', 'Service B', 'Service C']; // Replace this with your list of services
  const [selectedService, setSelectedService] = useState('');
  const [confirmationChecked, setConfirmationChecked] = useState(false);

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleConfirmationChange = (event) => {
    setConfirmationChecked(event.target.checked);
  };

  const handleDeleteService = () => {
    if (confirmationChecked && selectedService !== '') {
      // Perform the deletion of the selected service here
      // You can add your logic to handle the deletion of the service from your data source.
      // For demonstration purposes, we'll just show an alert.
      alert(`Service "${selectedService}" will be deleted.`);
    } else {
      alert('Please select a service and confirm before deleting.');
    }
  };

  return (
    <div className="container"> {/* Center content */}
      <div className="service-page"> {/* Apply styles to the form container */}
        <div>
          <select value={selectedService} onChange={handleServiceChange}>
            <option value="">Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={confirmationChecked}
              onChange={handleConfirmationChange}
            />
            Are you sure you want to delete service ?
          </label>
        </div>
        <button  onClick={handleDeleteService} disabled={!confirmationChecked || selectedService === ''}>
          Delete Service
        </button>
      </div>
    </div>
  );
}
