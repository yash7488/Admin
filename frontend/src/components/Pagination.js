import React, { useState, useEffect } from 'react';
import './Pagination.css'; // Import the CSS file with styles

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  const [visiblePages, setVisiblePages] = useState([]);
  const [slideDirection, setSlideDirection] = useState('left');

  useEffect(() => {
    const initialPages = [];
    for (let i = 1; i <= Math.min(totalPages, 2); i++) {
      initialPages.push(i);
    }
    setVisiblePages(initialPages);
  }, [totalPages]);

  const handleShowNextPages = () => {
    setSlideDirection('left');
    setTimeout(() => {
      const updatedVisiblePages = [];
      for (let i = currentPage + 1; i <= Math.min(currentPage + 2, totalPages); i++) {
        updatedVisiblePages.push(i);
      }
      setVisiblePages(updatedVisiblePages);
    }, 300); // Delay the change after the slide transition (adjust timing as needed)
    handlePageChange(Math.min(currentPage + 1, totalPages));
  };

  const handleShowPreviousPages = () => {
    setSlideDirection('right');
    setTimeout(() => {
      const updatedVisiblePages = [];
      for (let i = Math.max(1, currentPage - 1); i <= currentPage; i++) {
        updatedVisiblePages.push(i);
      }
      setVisiblePages(updatedVisiblePages);
    }, 300); // Delay the change after the slide transition (adjust timing as needed)
    handlePageChange(Math.max(currentPage - 1, 1));
  };

  return (
    <div className="pagination">
      <button onClick={handleShowPreviousPages} disabled={currentPage === 1}>
        Previous
      </button>
      <div className={`page-numbers ${slideDirection}`}>
        {visiblePages.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </button>
        ))}
      </div>
      <button onClick={handleShowNextPages} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
