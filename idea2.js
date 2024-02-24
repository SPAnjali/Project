

import React, { useState, useEffect } from 'react';
import InventoryManagement from './InventoryManagement';
import SalesPerformanceTracking from './SalesPerformanceTracking';
import CustomerFeedbackAnalysis from './CustomerFeedbackAnalysis';

const SellerDashboard = () => {
  

  return (
    <div>
      <h2>Seller Dashboard</h2>
      <InventoryManagement />
      <SalesPerformanceTracking />
      <CustomerFeedbackAnalysis />
    </div>
  );
}

export default SellerDashboard;
