import { Stack } from "@mui/system";
import TextField from "@mui/material/TextField";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Box, Modal } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

import {
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Select, MenuItem } from "@mui/material";
import React from "react";
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
import { useForm } from "react-hook-form";

const Form = () => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  //password visibility
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [reg, setReg] = useState(false);
  const [college, setCollege] = useState(false);
  const [otpReceived, setOtpReceived] = useState();
  const [open, setOpen] = useState();
  //form validation
  const {
    register,
    formState: { errors },
  } = useForm();
  const regexExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

  const handleOpen = () => {
    console.log(
      { username: name },
      { email: email },
      { password: pwd },
      { isVssutian: !college },
      { regdNo: regnum },
      { collegeName: colgname },
      { graduationYear: year },
      { branch: branch }
    );
    if (
      !email ||
      !pwd ||
      !cpwd ||
      !name ||
      !colgname ||
      !branch ||
      !year ||
      !phnnum
    ) {
      return toast.error("All field must be filled");
    }
    if (phnnum.length < 10) {
      return toast.error("Enter valid Phone number");
    }
    if (pwd != cpwd) {
      return toast.error("Password and Confirm Password not matching");
    }
    if (!regexExp.test(email)) {
      return toast.error("Enter valid Email");
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
  const [phnnum, setPhnnum] = useState("");
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
        <InputLabel htmlFor="outlined-adornment-password">Password*</InputLabel>
        <OutlinedInput
          id="pwd"
          type={values.showPassword ? "text" : "password"}
          value={pwd}
          size="small"
          onChange={(e) => {
            setPwd(e.target.value);
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />

        <InputLabel htmlFor="outlined-adornment-password">
          Confirm-Password*
        </InputLabel>
        <OutlinedInput
          id="cpwd"
          size="small"
          type={values.showPassword ? "text" : "password"}
          value={cpwd}
          onChange={(e) => {
            setCpwd(e.target.value);
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Confirm-Password"
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
        <Stack direction="row" gap="5px">
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
            id="phnnum"
            size="small"
            label="Phone-Number"
            variant="outlined"
            value={phnnum}
            fullWidth="false"
            sx={{
              marginTop: "10px",
            }}
            onChange={(e) => {
              setPhnnum(e.target.value);
            }}
          />
          <TextField
            required
            id="institution-name"
            label="Institution Name"
            value={colgname}
            size="small"
            variant="outlined"
            fullWidth="false"
            sx={{
              marginTop: "10px",
              display: college ? "block" : "none",
            }}
            onChange={(e) => {
              setColgname(e.target.value);
            }}
          />
        </Stack>

        <InputLabel id="demo-simple-select-label">Graduation-Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          size="small"
          label="Graduation-Year"
          onChange={(e) => {
            setYear(e.target.value);
          }}
          fullWidth="false"
        >
          <MenuItem value={2023}>2023</MenuItem>
          <MenuItem value={2024}>2024</MenuItem>
          <MenuItem value={2025}>2025</MenuItem>
          <MenuItem value={2026}>2026</MenuItem>
          <MenuItem value={2027}>2027</MenuItem>
          <MenuItem value={2028}>Other</MenuItem>
        </Select>

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
