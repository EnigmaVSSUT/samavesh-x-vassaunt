/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from "@mui/system";
import TextField from "@mui/material/TextField";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Box, Modal } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";
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
import AppContext from "context/AppContext";
const Form = () => {
  useEffect(() => {
    if (isAuthenticated) return;
  }, []);
  const { isAuthenticated, setIsAuthenticated } = React.useContext(AppContext);
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

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [reg, setReg] = useState(false);
  const [college, setCollege] = useState(false);
  const [otp, setOtp] = useState();
  const [open, setOpen] = useState(false);
  const [isVssutian, setIsVssutian] = useState(false);
  //form validation
  const {
    register,
    formState: { errors },
  } = useForm();
  const regexExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleOpen = async () => {
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
    if (phnnum.length !== 10) {
      return toast.error("Enter valid Phone number");
    }
    if (pwd.length < 5)
      toast.error("Password length must be atleast 5 characters!");
    if (pwd != cpwd) {
      return toast.error("Password and Confirm Password not matching");
    }

    if (!regexExp.test(email)) {
      return toast.error("Enter valid Email");
    }
    if (!college) {
      if (regnum?.length !== 10) {
        return toast.error("Enter valid 10 digit registration number");
      }
    }
    sendOTP();
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [otpTyped, setOtpTyped] = useState();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");
  // const [otpTyped,setOtpTyped]
  const [regnum, setRegnum] = useState();
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState();
  const [colgname, setColgname] = useState("");
  const [phnnum, setPhnnum] = useState();
  const [verifyLoad, setVerifyLoad] = useState(false);
  const verifyOTP = async () => {
    setVerifyLoad(true);
    if (otp !== otpTyped) {
      toast.error("Your entered OTP didn't match the OTP sent to your e-mail!");
    } else {
      toast.success("OTP matched!");
      setOtp("");
      setOtpTyped("");
      setOpen(false);
      const { data } = await axios.post(
        "http://localhost:8000/api/auth/signup",
        {
          username: name,
          email,
          password: cpwd,
          isVssutian: colgname === "VSSUT" ? true : false,
          regdNo: regnum ? regnum : 0,
          college: colgname,
          graduationYear: year,
          branch,
          phone: phnnum,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (await data.success) {
        toast.success(await data.message);
        // window.location.reload()
        setColgname("");
        setName("");
        setPwd("");
        setCpwd("");
        setCollege(false);
        setReg(false);
        setOpen(false);
        setYear("");
        setRegnum("");
        setBranch("");
        localStorage.setItem("token", await data.token);
        setIsAuthenticated(true);
      } else {
        toast.error(await data.message);
      }
    }
    setVerifyLoad(false);
  };

  const sendOTP = async () => {
    setOtp("");
    setOtpTyped("");
    setOtpLoading(true);
    const { data } = await axios.post(
      "http://localhost:8000/api/auth/sendOTP",
      { email },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      }
    );
    if (await data.otp) {
      setOtp(await data.otp);

      setOpen(true);
    }

    toast.info(await data.message);
    setOtpLoading(false);
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
  const [otpLoading, setOtpLoading] = useState(false);
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
                    setIsVssutian(e.target.checked);
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
            type="number"
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
            type="number"
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

      <LoadingButton
        loading={otpLoading}
        onClick={handleOpen}
        variant="contained"
      >
        Register
      </LoadingButton>
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
          <LoadingButton
            onClick={verifyOTP}
            variant="contained"
            sx={{ marginTop: "1rem" }}
            loading={verifyLoad}
          >
            <Typography sx={{ color: "white" }} variant="p">
              Verify OTP
            </Typography>
          </LoadingButton>
        </Box>
      </Modal>
    </Stack>
  );
};

export default Form;
