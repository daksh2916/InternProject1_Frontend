// CurrentDataPage.js
import React, { useState } from 'react';
import axios from 'axios';
import './CurrentDataPage.css';

// Import statements...

function CurrentDataPage() {
  const [data, setData] = useState([]);

  const fetchData = async (endpoint) => {
    try {
      const response = await axios.get(`http://localhost:3000/v1/users/${endpoint}`);
      setData(response.data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  return (
    <div className="current-data-page">
      <h2>Current Data Page</h2>
      <div className="button-container">
        <button onClick={() => fetchData('getAll')}>All Time Data</button>
        <button onClick={() => fetchData('getLastMonth')}>Last Month Data</button>
        <button onClick={() => fetchData('getLastWeek')}>Last Week Data</button>
        <button onClick={() => fetchData('getToday')}>Today's Data</button>
      </div>
      {(data.size===0)?<p>No Data Found</p> :
      <div className="data-table">
        <table>
          
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              
            </tr>
          </thead>
          <tbody >
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.totalScore}</td> 
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      }
    </div>
  );
}

export default CurrentDataPage;
