import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SortButton({onSort}) {
  const [sort, setSort] = useState('');

  const handleChange = (event) => {
    setSort(event.target.value);
    onSort(event.target.value)
  };

  return (
    <Box>
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel id="sort-label">Sort by</InputLabel>
        <Select
          labelId="sort-label"
          id="sort"
          value={sort}
          label="sort"
          onChange={handleChange}
        >
          <MenuItem value={'rate'}>My Heart Rate</MenuItem>
          <MenuItem value={'date'}>Recent Published</MenuItem>
          <MenuItem value={'title'}>Title</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
