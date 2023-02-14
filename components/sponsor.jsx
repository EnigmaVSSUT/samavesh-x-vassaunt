import { EmailOutlined } from "@mui/icons-material";
import {
  Stack,
  Typography,
  Box,
  Container,
  Button,
  Avatar,
} from "@mui/material";
import Link from "next/link";
import Sponsorlist from "./sponsorlist";
const Sponsor = () => {
  return (
    <Stack
      // padding='10px 32px'
      alignItems="flex-start"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "25px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "32px 0",
          gap: "20px",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "45px", lineHeight: "52px" }}>
          Sponsors
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "80%",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            rowGap: {
              xs: "20px",
            },
            columnGap: {
              xs: "10px",
              md: "none",
            },
          }}
        >
          <Avatar
            sx={{ height: "100px", width: "100px", fontSize: "50px" }}
            src="/clubs/6.png"
          >
            S
          </Avatar>
          <Avatar
            sx={{ height: "100px", width: "100px", fontSize: "50px" }}
            src="/clubs/4.png"
          >
            N
          </Avatar>
          <Avatar
            sx={{ height: "100px", width: "100px", fontSize: "50px" }}
            src="/clubs/3.png"
          >
            A
          </Avatar>
          <Avatar
            sx={{ height: "100px", width: "100px", fontSize: "50px" }}
            src="/clubs/2.png"
          >
            P
          </Avatar>
        </Box>
        {/* <Sponsorlist />   */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "40px",
            background: "#C0000A",
            borderRadius: "8px",
            width: "70vw",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              alignItems: "flex-start",
              padding: "0px",
              gap: "40px",
            }}
          >
            <Typography
              variant="h3"
              color="#fff"
              sx={{
                fontSize: "2rem",
                display: "flex",
                alignItems: "left",
                textAlign: "left",
              }}
            >
              SPONSOR US
            </Typography>
            <Typography variant="nav" color="#fff">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tristique senectus et netus et malesuada fames ac turpis. Amet est
              placerat in egestas erat imperdiet sed euismod nisi. Nulla aliquet
              porttitor lacus luctus accumsan tortor posuere ac. Amet est
              placerat in egestas erat imperdiet sed euismod nisi. Nulla aliquet
              porttitor lacus luctus accumsan tortor posuere ac.
              <br />
            </Typography>
          </Box>
          <Link href="/login">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#410001",
                fontFamily: "Product sans",
                textTransform: "inherit",
                fontWeight: "600",
                marginTop: "10px",
              }}
            >
              <EmailOutlined sx={{ marginRight: "5px" }} /> Contact Us
            </Button>
          </Link>
        </Box>
      </Box>
    </Stack>
  );
};
export default Sponsor;
