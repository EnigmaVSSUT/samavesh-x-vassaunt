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
        width="fit-content"
        backgroundColor="#D61513"
        borderRadius="10px"
        margin="0 auto"
        padding="10px"
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

        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            sx={{
              margin: "10px",
              height: 100,
              width: 100,
              borderRadius: "50%",
              border: "1px solid #c0c0c0",
            }}
          >
            <img
              src={file}
              height="100px"
              width="100px"
              style={{ borderRadius: "50%" }}
            />
          </Box>

          <Stack
            direction="column"
            justifyContent="space-between"
            spacing={1}
            padding="10px"
          >
            <Stack direction="row" spacing={1}>
              <Typography sx={{ color: "white" }}>NAME:</Typography>
              <input
                type="text"
                style={{ height: "30px", width: "100%", border: "none" }}
              />
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography sx={{ color: "white" }}>COLLEGE:</Typography>
              <input
                type="text"
                style={{ height: "30px", width: "100%", border: "none" }}
              />
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography sx={{ color: "white" }}>
                PHONE&nbsp;&nbsp;&nbsp;NUMBER:
              </Typography>
              <input
                type="text"
                style={{ height: "30px", width: "100%", border: "none" }}
              />
            </Stack>
          </Stack>
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
