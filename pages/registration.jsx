import { Stack } from "@mui/system";
import TextField from "@mui/material/TextField";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Button,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
const Form = () => {
  const [reg, setReg] = useState(false);
  return (
    <Stack
      maxWidth="550px"
      height="auto"
      padding="25px"
      margin="0 auto"
      gap="25px"
    >
      <Typography variant="h3" color="initial">
        Registration Form
      </Typography>
      <Stack direction="row" gap="30px" sx={{ marginTop: "15px" }}>
        <TextField required id="name" label="Name" variant="outlined" />
        <TextField required id="name" label="Email" variant="outlined" />
      </Stack>
      <Stack sx={{ marginTop: "10px" }}>
        <TextField
          required
          id="name"
          label="Password"
          variant="outlined"
          helperText="Password should alphanumeric and atleast 8 characters"
          paddingTop="10px"
        />
        <FormControl sx={{ marginTop: "10px" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Institution
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="VSSUT"
              control={
                <Radio
                  onChange={(e) => {
                    setReg(e.target.checked);
                  }}
                />
              }
              label="VSSUT"
            />
            <FormControlLabel
              value="Non-VSSUT"
              control={
                <Radio
                  onChange={(e) => {
                    setReg(!e.target.checked);
                  }}
                />
              }
              label="Non-VSSUT"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          required
          id="regno"
          label="Registration Number"
          variant="outlined"
          sx={{
            marginTop: "10px",
            display: !reg ? "none" : "block",
          }}
        />
      </Stack>
      <Button variant="contained">Register</Button>
    </Stack>
  );
};

export default Form;
