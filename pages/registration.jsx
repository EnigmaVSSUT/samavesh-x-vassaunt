import { Stack } from "@mui/system";
import TextField from "@mui/material/TextField";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Box, Modal } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
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
    sendOTP();

    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [otpTyped, setOtpTyped] = useState();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");
  const [radio, setRadio] = useState("");
  const verifyOTP = async () => {};
  const sendOTP = async () => {
    if (!email || !pwd || !cpwd || !name || !radio) {
      return toast.warn("Some fields are missing", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
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
          paddingTop="10px"
          type="password"
        />
        <TextField
          required
          id="name"
          label="Confirm Password"
          variant="outlined"
          helperText="Password should alphanumeric and atleast 8 characters"
          paddingTop="10px"
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
          sx={{
            marginTop: "10px",
            display: !reg ? "none" : "block",
          }}
        />
        <TextField
          required
          id="regno"
          label="Enter College"
          variant="outlined"
          sx={{
            marginTop: "10px",
            display: !college ? "none" : "block",
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
