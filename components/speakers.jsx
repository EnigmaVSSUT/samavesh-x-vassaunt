import { EmailOutlined } from "@mui/icons-material";
import { Stack, Typography, Box, Container, Button } from "@mui/material";
import Image from "next/image";
import Speaker from "/pictures/speakers.png";
import Link from "next/link";

const Speakers = () => {
  return (
    <Stack
      // padding='10px 32px'
      alignItems="flex-start"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "0px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px 0px ",
          gap: "20px",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "45px", lineHeight: "52px" }}>
          SPEAKERS
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-around",
            padding: "10px",
            borderRadius: "8px",
            width: "70vw",
          }}
        >
          <Image src={Speaker} alt="IMAGE" id="speak" />
          <Image src={Speaker} alt="IMAGE" id="speak" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-around",
            padding: "10px",
            borderRadius: "8px",
            width: "70vw",
          }}
        >
          <Image src={Speaker} alt="IMAGE" id="speak" />
          <Image src={Speaker} alt="IMAGE" id="speak" />
        </Box>
      </Box>
    </Stack>
  );
};
export default Speakers;
