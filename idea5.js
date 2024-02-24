
import React, { useState } from 'react';
import axios from 'axios';

const ERPSynchronization = () => {
  const [syncStatus, setSyncStatus] = useState('');

  const handleSyncData = async () => {
    try {
      
      const response = await axios.post('flipkart_api_endpoint/erpSync', {
        
      });
    
      setSyncStatus('ERP synchronization initiated successfully');
    } catch (error) {
      
      setSyncStatus('Error initiating ERP synchronization');
    }
  }

  return (
    <div>
      <h3>ERP Synchronization</h3>
      <button onClick={handleSyncData}>Initiate ERP Synchronization</button>
      {syncStatus && <p>{syncStatus}</p>}
    </div>
  );
}

export default ERPSynchronization;
