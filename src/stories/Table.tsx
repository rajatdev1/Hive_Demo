import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import './Table.css'
import {
  DataGridPremium,
  GridToolbar,
  useGridApiRef,
} from '@mui/x-data-grid-premium';
import Dropdown from './Dropdown';  // Adjust the path if needed
import DateCalender from './DatePicker';  // Adjust the path if needed

// DataGridPremiumDemo Component
export default function DataGridPremiumDemo() {
  const apiRef = useGridApiRef();
  const [data, setData] = useState({ rows: [], columns: [] });
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState('Option 1'); // State for selected option
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // State for selected date

  // Handle dropdown selection
  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    console.log('Selected Option:', option);
    // Add actions or effects based on the selected option here
  };

  // Handle date change
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    console.log('Selected Date:', date);
    // Add actions or effects based on the selected date here
  };

  useEffect(() => {
    const apiEndpoint = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';

    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const apiData = await response.json();

        if (Array.isArray(apiData)) {
          const columns = Object.keys(apiData[0]).map((key) => ({
            field: key,
            headerName: key.charAt(0).toUpperCase() + key.slice(1),
            width: 150,
          }));

          setData({
            rows: apiData,
            columns: columns,
          });
        } else {
          console.error('Invalid data structure:', apiData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ height: 520, width: '100%' }}>

      



<Dropdown 
        options={['Option 1', 'Option 2', 'Option 3']} 
        selectedOption={selectedOption} 
        onSelectOption={handleSelectOption} 
      />

<div className='celender'>

  <h3>From</h3>
<DateCalender 
        selectedDate={selectedDate} 
        onDateChange={handleDateChange} 
      />


<h3>To</h3>
<DateCalender 
        selectedDate={selectedDate} 
        onDateChange={handleDateChange} 
      />

</div>

      <DataGridPremium
        rows={data.rows}
        columns={data.columns}
        apiRef={apiRef}
        loading={loading}
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />



      





      {/* Dropdown Component */}
     

      {/* DateCalender Component */}
     
    </Box>
  );
}