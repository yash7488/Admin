import React from 'react';
import './DeleteButton.css'; // Import the CSS file for styling

const DeleteButton = ({ handleDeleteSelected }) => {
  return (
    <button className="delete-button" onClick={handleDeleteSelected}>
      Delete or go back
    </button>
  );
};

export default DeleteButton;
