import React, { FunctionComponent } from 'react';
import TextField from '@material-ui/core/TextField';

export const AddressForm: FunctionComponent<void> = () => {
  return (
    <form noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
};
