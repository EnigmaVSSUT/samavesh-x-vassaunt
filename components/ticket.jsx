import { Button, Stack, TextField, Typography } from "@mui/material";
import { borderRadius, Box } from "@mui/system";
import { useRef, useState } from "react";
import React from "react";
import ReactToPrint from "react-to-print";
const Ticket = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const ref = useRef();
  return (
    <>
      <Box
        width="600px"
        backgroundColor="#D61513"
        borderRadius="10px"
        margin="0 auto"
        ref={ref}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography
            variant="h4"
            sx={{
              textDecoration: "underline",
              color: "white",
              padding: "10px",
            }}
          >
            FEST PASS
          </Typography>
          <Typography
            variant="h4"
            padding="10px 15px"
            margin="10px 10px"
            textAlign="center"
            sx={{
              backgroundColor: "#F3EEE8",
              borderRadius: "50%",
            }}
          >
            69
          </Typography>
        </Stack>
        <Stack
          direction="column"
          justifyContent="space-between"
          spacing={1}
          padding="10px"
        >
          <Stack direction="row" spacing={1}>
            <Typography sx={{ color: "white" }}>Name:</Typography>
            <input
              type="text"
              style={{ height: "30px", width: "250px", border: "none" }}
            />
          </Stack>
          <Stack direction="row" spacing={1}>
            <Typography sx={{ color: "white" }}>COLLEGE:</Typography>
            <input
              type="text"
              style={{ height: "30px", width: "", border: "none" }}
            />
          </Stack>
          <Stack direction="row" spacing={1}>
            <Typography sx={{ color: "white" }}>PHONE NUMBER:</Typography>
            <input type="text" style={{ height: "30px", border: "none" }} />
          </Stack>
          <img src={file} height="100px" width="100px" />
        </Stack>
      </Box>
      <Button variant="contained" component="label">
        Upload Image
        <input type="file" accept="image/*" onChange={handleChange} hidden />
      </Button>
      <ReactToPrint
        trigger={() => <Button variant="contained">Generate & Print</Button>}
        content={() => ref.current}
      />
    </>
  );
};

export default Ticket;
