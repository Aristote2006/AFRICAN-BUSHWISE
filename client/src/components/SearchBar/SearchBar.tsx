import React, { useState } from 'react';
import { TextField, Button, MenuItem } from '@mui/material';
import { FiSearch } from 'react-icons/fi';
import './SearchBar.css';

interface SearchBarProps {
  onSearch?: (data: any) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '2'
  });

  const destinations = [
    { value: 'rwanda', label: 'Rwanda' },
    { value: 'kenya', label: 'Kenya' },
    { value: 'tanzania', label: 'Tanzania' },
    { value: 'zanzibar', label: 'Zanzibar' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchData);
    }
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <TextField
          select
          label="Destination"
          name="destination"
          value={searchData.destination}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        >
          {destinations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Check In"
          name="checkIn"
          type="date"
          value={searchData.checkIn}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          label="Check Out"
          name="checkOut"
          type="date"
          value={searchData.checkOut}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          select
          label="Guests"
          name="guests"
          value={searchData.guests}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <MenuItem key={num} value={num}>
              {num} {num === 1 ? 'Guest' : 'Guests'}
            </MenuItem>
          ))}
        </TextField>

        <Button
          variant="contained"
          onClick={handleSearch}
          className="btn-search"
          startIcon={<FiSearch />}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
