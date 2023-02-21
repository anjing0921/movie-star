import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FilterButton({onFilter}) {
  const [filter, setFilter] = useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
    onFilter(event.target.value)
  };

  return (
    <Box>
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel id="filter-label">Filter by Genre</InputLabel>
        <Select
          labelId="filter-label"
          id="filter"
          value={filter}
          label="filter"
          onChange={handleChange}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={12}>Adventure</MenuItem>
          <MenuItem value={14}>Fantasy</MenuItem>
          <MenuItem value={35}>Comedy</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
