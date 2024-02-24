
import React, { useState } from 'react';
import axios from 'axios'; // Assuming you are using axios for API requests

const BulkProductManagement = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    // Handle file input change
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  }

  const handleBulkList = async () => {
    
    try {
     
      const response = await axios.post('flipkart_api_endpoint/bulkListProducts', {
        file: file
      });
      
    } catch (error) {
      
    }
  }

  const handleBulkEdit = async () => {
    
    try {
      
      const response = await axios.post('flipkart_api_endpoint/bulkEditProducts', {
        file: file
      });
      
    } catch (error) {
      
    }
  }

  return (
    <div>
      <h3>Bulk Product Management</h3>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleBulkList}>Bulk List Products</button>
      <button onClick={handleBulkEdit}>Bulk Edit Products</button>
    </div>
  );
}

export default BulkProductManagement;
