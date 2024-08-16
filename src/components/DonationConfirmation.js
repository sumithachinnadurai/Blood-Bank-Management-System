import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './DonationConfirmation.css';

const DonationConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { donorDetails } = location.state || {};

  if (!donorDetails) {
    return <p>No details available.</p>;
  }

  return (
    <div className="confirmation">
      <h1>Donation Confirmation</h1>
      <p>Thank you for your donation! Here are your details:</p>
      <div className="donor-details">
        <p><strong>Name:</strong> {donorDetails.name}</p>
        <p><strong>Email:</strong> {donorDetails.email}</p>
        <p><strong>Phone:</strong> {donorDetails.phone}</p>
        <p><strong>Blood Type:</strong> {donorDetails.bloodType}</p>
        <p><strong>Donation Date:</strong> {donorDetails.donationDate}</p>
      </div>
      <button onClick={() => navigate('/')}>Go Back to Home</button>
    </div>
  );
};

export default DonationConfirmation;
