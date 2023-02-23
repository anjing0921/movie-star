import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';



export default function SortButton({onSort}) {
  const [sort, setSort] = useState('');

  const handleChange = (event) => {
    setSort(event.target.value);
    onSort(event.target.value)
  };

  return (
    <ThemeProvider theme={theme}>
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
          <MenuItem style={{ fontFamily:'Lato'}} value={'rate'}>My Heart Rate</MenuItem>
          <MenuItem style={{ fontFamily:'Lato'}} value={'date'}>Recent Published</MenuItem>
          <MenuItem style={{ fontFamily:'Lato'}} value={'title'}>Title</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </ThemeProvider>
  );
}
