import { Stack } from "@mui/system";
import TextField from "@mui/material/TextField";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Box, Modal } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

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
  const [college, setCollege] = useState(false);
  const [otpReceived, setOtpReceived] = useState();
  const [open, setOpen] = useState();
  const handleOpen = () => {
    console.log(name, pwd, regnum, branch, year, colgname);
    if (!email || !pwd || !cpwd || !name || !colgname || !branch || !year) {
      return toast.warning("All field must be filled");
    } else {
      const otp = sendOTP();
      if (otp) {
        setOpen();
      }
    }
  };
  const handleClose = () => setOpen(false);
  const [otpTyped, setOtpTyped] = useState();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");
  const [radio, setRadio] = useState("");
  const [regnum, setRegnum] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [colgname, setColgname] = useState("");
  const verifyOTP = async () => {};
  const sendOTP = async () => {
    return true;
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid ",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Stack
      maxWidth="550px"
      height="auto"
      padding="25px"
      margin="0 auto"
      gap="25px"
    >
      <Typography variant="h4" color="initial">
        Registration Form
      </Typography>
      <Stack direction="row" gap="30px">
        <TextField
          required
          id="name"
          size="small"
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
          size="small"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Stack>
      <Stack>
        <TextField
          required
          id="password"
          value={pwd}
          size="small"
          label="Password"
          variant="outlined"
          paddingTop="10px"
          type="password"
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
        <TextField
          required
          id="name"
          size="small"
          label="Confirm Password"
          variant="outlined"
          helperText="Password should alphanumeric and atleast 8 characters"
          paddingTop="10px"
          onChange={(e) => {
            setCpwd(e.target.value);
          }}
          type="password"
          sx={{ marginTop: "1rem" }}
        />
        <FormControl sx={{ marginTop: "10px" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Institution
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="radio"
          >
            <FormControlLabel
              value="VSSUT"
              control={
                <Radio
                  onChange={(e) => {
                    setReg(e.target.checked);
                    setColgname(e.target.value);
                    setCollege(!e.target.checked);
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
                    setColgname("");
                    setCollege(e.target.checked);
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
          fullWidth="true"
          size="small"
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
          value={colgname}
          size="small"
          variant="outlined"
          fullWidth="true"
          sx={{
            marginTop: "10px",
            display: college ? "block" : "none",
          }}
          onChange={(e) => {
            setColgname(e.target.value);
          }}
        />
        <TextField
          required
          id="year"
          value={year}
          size="small"
          label="Graduation Year"
          variant="outlined"
          sx={{
            marginTop: "10px",
          }}
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
        <TextField
          required
          id="branch"
          size="small"
          label="Branch"
          variant="outlined"
          value={branch}
          sx={{
            marginTop: "10px",
          }}
          onChange={(e) => {
            setBranch(e.target.value);
          }}
        />
      </Stack>

      <Button onClick={handleOpen} variant="contained">
        Register
      </Button>
      <ToastContainer />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ marginBottom: "1rem" }} variant="h6">
            {" "}
            {`Enter 4 digit OTP sent to ${email}`}
          </Typography>
          <MuiOtpInput
            value={otpTyped}
            onChange={(newValue) => {
              setOtpTyped(newValue);
            }}
          />
          <Button
            onClick={verifyOTP}
            variant="contained"
            sx={{ marginTop: "1rem" }}
          >
            <Typography sx={{ color: "white" }} variant="p">
              Verify OTP
            </Typography>
          </Button>
        </Box>
      </Modal>
    </Stack>
  );
};

export default Form;
