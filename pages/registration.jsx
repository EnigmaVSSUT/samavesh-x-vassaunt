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
import { useState } from "react";
const Form = () => {
  const [reg, setReg] = useState(false);
  const [nonvssut, setNon] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [college, setCollege] = useState("");
  const [regnum, setRegnum] = useState("");
  const [phnnum, setPhnnum] = useState("");

  const submit = (name, email, password, college, regnum, phnnum) => {
    console.log(name, email, password, college, regnum, phnnum);
  };

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
        <TextField
          required
          id="name"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          required
          id="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Stack>
      <Stack sx={{ marginTop: "10px" }}>
        <TextField
          required
          id="password"
          value={password}
          label="Password"
          variant="outlined"
          helperText="Password should alphanumeric and atleast 8 characters"
          paddingTop="10px"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
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
                    setNon(!e.target.checked);
                    setCollege(e.target.value);
                    setPhnnum("");
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
                    setNon(e.target.checked);
                    setCollege("");
                    setRegnum("");
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
          value={regnum}
          sx={{
            marginTop: "10px",
            display: !reg ? "none" : "block",
          }}
          onChange={(e) => {
            setRegnum(e.target.value);
          }}
        />
        <TextField
          required
          id="institution-name"
          label="Institution Name"
          value={college}
          variant="outlined"
          sx={{
            marginTop: "10px",
            display: nonvssut ? "block" : "none",
          }}
          onChange={(e) => {
            setCollege(e.target.value);
          }}
        />
        <TextField
          required
          id="phone-number"
          value={phnnum}
          label="Contact Number"
          variant="outlined"
          sx={{
            marginTop: "10px",
            display: nonvssut ? "block" : "none",
          }}
          onChange={(e) => {
            setPhnnum(e.target.value);
          }}
        />
      </Stack>
      <Button
        variant="contained"
        onClick={() => submit(name, email, password, college, regnum, phnnum)}
      >
        Register
      </Button>
    </Stack>
  );
};

export default Form;
