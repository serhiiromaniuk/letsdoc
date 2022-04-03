import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { encode, decode } from 'js-base64'

export default function MultilineTextFields(): JSX.Element {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log(encode(event.target.value))
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0, width: '100%' },
      }}
      noValidate
      autoComplete="on"
    >
      <div>
        <TextField
          // disabled
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          value={value}
          onChange={handleChange}
          variant="standard"
        />
      </div>
    </Box>
  );
}
