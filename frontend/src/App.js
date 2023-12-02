import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import DeleteButton from './components/DeleteButton';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);

  const itemsPerPage = 10;

  useEffect(() => {
    fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
      .then(response => response.json())
      .then(data => {
        const sortedUsers = data.sort((a, b) => parseInt(a.id) - parseInt(b.id));
        setUsers(sortedUsers);
        setFilteredUsers(sortedUsers);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filtered = users.filter(user =>
      Object.values(user).some(val =>
        val.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredUsers(filtered);
    setCurrentPage(1); // Reset page after search
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSaveChanges = (updatedUserData) => {
   
    fetch(`https://your-api-endpoint/users/${updatedUserData.id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUserData), 
    })
      .then((response) => response.json())
      .then((data) => {
       
        console.log('API response:', data);

       
        const updatedUsers = users.map((user) =>
          user.id === updatedUserData.id ? { ...user, ...updatedUserData } : user
        );
        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers);
      })
      .catch((error) => {

        console.error('Error updating user data:', error);
      });
  };


  const handleEdit = (id) => {
    const updatedUsers = users.map(user => {
      if (user.id === id) {
        return { ...user, isEditing: !user.isEditing }; 
      }
      return user;
    });
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers); 
  };
  

  const handleDeleteSelected = () => {
    const updatedUsers = users.filter(user => !selectedRows.includes(user));
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers); 
    setSelectedRows([]); 
  };

  const handleSelectRow = (id) => {
    const selectedRow = users.find(user => user.id === id);
    const updatedSelectedRows = selectedRows.includes(selectedRow)
      ? selectedRows.filter(row => row !== selectedRow)
      : [...selectedRows, selectedRow];

    setSelectedRows(updatedSelectedRows);
  };

  
  
  return (
    <div className="container">
      <SearchBar handleSearch={handleSearch} searchTerm={searchTerm} />
      <Table
        users={filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
        handleEdit={handleEdit}
        handleSelectRow={handleSelectRow}
        onSave={handleSaveChanges}
      />
      <Pagination
        totalPages={Math.ceil(filteredUsers.length / itemsPerPage)}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <DeleteButton handleDeleteSelected={handleDeleteSelected} />
    </div>
  );
};

export default App;
