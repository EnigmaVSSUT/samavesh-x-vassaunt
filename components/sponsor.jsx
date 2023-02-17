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
              Join us and become a part of the largest techno cultural festival
              in western Odisha. Explore our packages and unleash the marketing
              potential of thousands of young minds by advertising your brand in
              one of the largest youth gathering of Odisha.
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
