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
  Box,
} from "@mui/material";
import { useState, useEffect } from "react";
const Form = () => {
  const [reg, setReg] = useState(false);
  return (
    <Stack direction="row" justifyContent="center">
      <Stack
        width="90%"
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Stack
          //   maxWidth="550px"
          height="auto"
          padding="25px"
          margin="0 auto"
          gap="25px"
          sx={{
            width: {
              md: "500px",
            },
          }}
        >
          <Typography variant="h3" color="initial">
            Login :
          </Typography>
          <TextField required id="name" label="Email" variant="outlined" />
          <Stack sx={{ marginTop: "10px" }}>
            <TextField
              required
              id="name"
              label="Password"
              variant="outlined"
              helperText="Password should alphanumeric and atleast 8 characters"
              paddingTop="10px"
            />
          </Stack>
          <Button variant="contained">Login</Button>
        </Stack>
        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <img src="/login/login.png" height="600px" width="600px" sx={{}} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Form;
