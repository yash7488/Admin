import React from 'react';
import TableRow from './TableRow';
import './Table.css'; // Import CSS file for styling

const Table = ({ users, handleEdit, handleSelectRow, onSave }) => {
  const renderTableHeaders = () => {
    // Define your table header cells here based on your data structure
    return (
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        {/* Add more header cells if needed */}
        <th>Action</th>
      </tr>
    );
  };

  const renderTableRows = () => {
    // Map through the 'users' array to render TableRow components
    return users.map((user) => (
      <TableRow
        key={user.id}
        user={user}
        handleEdit={handleEdit}
        handleSelectRow={handleSelectRow}
        onSave={onSave}
      />
    ));
  };

  return (
    <div className="table-responsive">
      <table>
        <thead>{renderTableHeaders()}</thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
};

export default Table;
