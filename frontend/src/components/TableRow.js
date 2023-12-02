// TableRow.js
import React, { useState, useEffect } from 'react';
import './TableRow.css';

const TableRow = ({ user, handleEdit, handleSelectRow, onSave, isSelected }) => {
  const { id, name: initialName, email: initialEmail, role: initialRole } = user;
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [role, setRole] = useState(initialRole);
  const [isEditing, setIsEditing] = useState(false);
  const [selected, setSelected] = useState(isSelected);

  useEffect(() => {
    setSelected(isSelected);
  }, [isSelected]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setName(initialName);
      setEmail(initialEmail);
      setRole(initialRole);
    }
    handleEdit(id);
  };

  const handleSelect = () => {
    handleSelectRow(id);
    setSelected(!selected); // Toggle selected state
  };

  const handleSave = () => {
    onSave({ id, name, email, role });
    setIsEditing(false);
    handleEdit(id);
  };

  return (
    <tr className={selected ? 'selected-row' : ''}>
      <td>{id}</td>
      <td>{isEditing ? <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> : name}</td>
      <td>{isEditing ? <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> : email}</td>
      <td>{isEditing ? <input type="text" value={role} onChange={(e) => setRole(e.target.value)} /> : role}</td>
      <td className="action-buttons">
        {isEditing ? (
          <>
            <button className="save-button" onClick={handleSave}>Save</button>
            <button className="cancel-button" onClick={handleEditClick}>Cancel</button>
          </>
        ) : (
          <>
            <button className="edit-button" onClick={handleEditClick}>Edit</button>
            <input type="checkbox" checked={selected} onChange={handleSelect} />
          </>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
