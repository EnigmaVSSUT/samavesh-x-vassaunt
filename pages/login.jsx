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
import Image from "next/image";
const Form = () => {
  const [reg, setReg] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const submit = (email, pwd) => {
    console.log({ email: email }, { password: pwd });
  };
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
          <TextField
            required
            id="name"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Stack sx={{ marginTop: "10px" }}>
            <TextField
              required
              id="name"
              label="Password"
              variant="outlined"
              type="password"
              paddingTop="10px"
              value={pwd}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </Stack>
          <Button variant="contained" onClick={() => submit(email, pwd)}>
            Login
          </Button>
        </Stack>
        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Image
            alt="helper image"
            src="/login/login.png"
            height="400"
            width="400"
            sx={{}}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Form;
