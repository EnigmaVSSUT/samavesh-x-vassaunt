import { Stack } from "@mui/system";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from "react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import Ticket from "@/components/ticket";
import React from "react";
import { Button, Typography } from "@mui/material";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import { useState, useEffect } from "react";

const Ticketgen = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const [open, setOpen] = useState();
  const handleOpen = () => {
    console.log(name, phone, colgname);
    if (!name || !colgname || !phone) {
      return toast.warning("All field must be filled");
    }
  };
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [colgname, setColgname] = useState("");
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
    <>
      <Stack
        maxWidth="550px"
        height="auto"
        padding="25px"
        margin="0 auto"
        gap="25px"
      >
        <Typography variant="h4" color="initial">
          Generate your Ticket
        </Typography>
        <Ticket />
        {/* <Stack direction="row" gap="30px">
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
          id="college"
          size="small"
          label="College"
          au
          variant="outlined"
          value={colgname}
          onChange={(e) => {
            setColgname(e.target.value);
          }}
        />
      </Stack>
      <Stack>
        <TextField
          required
          id="phoneno"
          value={phone}
          size="small"
          label="Phone No."
          variant="outlined"w
          paddingTop="10px"
          helperText="Please upload your clear photo as it will be used for verification purpose"
          type="password"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </Stack> */}
        <ToastContainer />
      </Stack>
    </>
  );
};

export default Ticketgen;
