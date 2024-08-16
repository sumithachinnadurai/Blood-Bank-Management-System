import React from 'react';
import { useParams } from 'react-router-dom';
import './CampDetails.css';

const CampDetails = () => {
  const { id } = useParams();
  
  const camps = [
    {
      id: 1,
      name: 'City Hospital Blood Donation Camp',
      date: '2024-08-20',
      location: 'City Hospital, Coimbatore',
      details: 'Join us for a blood donation camp at City Hospital. Your donation can save lives!',
      extendedDetails: 'The event will be held in the main auditorium from 9 AM to 5 PM. Refreshments will be provided. Please bring your ID for registration.',
    },
    {
      id: 2,
      name: 'Community Center Blood Drive',
      date: '2024-08-25',
      location: 'Community Center, Coimbatore',
      details: 'Participate in our community blood drive and make a difference.',
      extendedDetails: 'This blood drive is organized in collaboration with the local health department. The camp will run from 10 AM to 4 PM. Free health check-ups available for all donors.',
    },
    {
      id: 3,
      name: 'Tech Park Blood Donation Camp',
      date: '2024-09-01',
      location: 'Tech Park, Chennai',
      details: 'Support your community by donating blood at our Tech Park drive!',
      extendedDetails: 'The camp will be located in the main lobby of Tech Park Building A. Open from 8 AM to 3 PM. Donors will receive a small gift as a token of appreciation.',
    },
    {
      id: 4,
      name: 'University Campus Blood Drive',
      date: '2024-09-05',
      location: 'University of Madras, Chennai',
      details: 'Students and faculty are welcome to donate and help save lives.',
      extendedDetails: 'Held at the University Sports Complex from 11 AM to 6 PM. All participants will receive a certificate of appreciation.',
    },
    {
      id: 5,
      name: 'Downtown Blood Drive',
      date: '2024-09-12',
      location: 'Downtown Mall, Bengaluru',
      details: 'A convenient location for everyone. Drop by and donate blood.',
      extendedDetails: 'Located near the main entrance of the mall. Open from 10 AM to 5 PM. Snacks and drinks will be available for donors.',
    },
  ];

  const camp = camps.find((camp) => camp.id === parseInt(id));

  if (!camp) {
    return <div>Camp not found</div>;
  }

  return (
    <div className="camp-details">
      <h2>{camp.name}</h2>
      <p><strong>Date:</strong> {camp.date}</p>
      <p><strong>Location:</strong> {camp.location}</p>
      <p>{camp.details}</p>
      <p>{camp.extendedDetails}</p>
    </div>
  );
};

export default CampDetails;
