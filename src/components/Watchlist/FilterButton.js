import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FilterButton({genres, onFilter}) {
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
          {genres.map((genre) => {
            return <MenuItem 
                    key={genre.id} 
                    value={genre.id}
                  >
                  {genre.name}
                  </MenuItem>
          })
          }
        </Select>
      </FormControl>
    </Box>
  );
}
