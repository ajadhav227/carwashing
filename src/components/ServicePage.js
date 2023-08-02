import React, { useState } from 'react';
import "./ServicePage.css";

export default function ServicePage() {
  const [serviceName, setServiceName] = useState('');
  const [serviceCategory, setServiceCategory] = useState('category1');
  const [servicePrice, setServicePrice] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [serviceOffer, setServiceOffer] = useState('');
  const [serviceImage, setServiceImage] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can perform any additional logic here, like saving the data to a server.
    console.log('Form submitted:', {
      serviceName,
      serviceCategory,
      servicePrice,
      serviceDescription,
      serviceOffer,
      serviceImage,
    });
  };

  const handleDiscard = () => {
    // You can reset the form fields here.
    setServiceName('');
    setServiceCategory('category1');
    setServicePrice('');
    setServiceDescription('');
    setServiceOffer('');
    setServiceImage(null);
  };

  const offerOptions = ['No Offer', '10% Discount', '20% Discount', 'Special Deal', 'Gift with Purchase'];

  return (
    <div>
      <h1>Service Page</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="serviceName">Name of Service:</label>
        <input
          type="text"
          id="serviceName"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          required
        />
        <br />
        <label htmlFor="serviceCategory">Category of Service:</label>
        <select
          id="serviceCategory"
          value={serviceCategory}
          onChange={(e) => setServiceCategory(e.target.value)}
          required
        >
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          {/* Add more options for different categories as needed */}
        </select>
        <br />
        <label htmlFor="servicePrice">Price of Service:</label>
        <input
          type="number"
          id="servicePrice"
          value={servicePrice}
          onChange={(e) => setServicePrice(e.target.value)}
          required
        />
        <br />
        <label htmlFor="serviceDescription">Description:</label>
        <textarea
          id="serviceDescription"
          value={serviceDescription}
          onChange={(e) => setServiceDescription(e.target.value)}
          rows="4"
          required
        ></textarea>
        <br />
        <label htmlFor="serviceOffer">Offer on Product:</label>
        <select
          id="serviceOffer"
          value={serviceOffer}
          onChange={(e) => setServiceOffer(e.target.value)}
        >
          {offerOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="serviceImage">Upload Image:</label>
        <input
          type="file"
          id="serviceImage"
          onChange={(e) => setServiceImage(e.target.files[0])}
        />
        <br />
        <button type="submit">Save</button>
        <button type="button" onClick={handleDiscard}>
          Discard
        </button>
      </form>
    </div>
  );
}
