import { EmailOutlined } from "@mui/icons-material";
import {
  Stack,
  Typography,
  Box,
  Container,
  Button,
  Avatar,
} from "@mui/material";
import Image from "next/image";
import Speaker from "/pictures/speakers.png";
import Link from "next/link";

const Speakers = () => {
  const officials = [
    {
      name: "Prof.Dr.Bansidhar Majhi",
      designation: "Hon'ble Vice Chancellor, VSSUT",
      id: "1",
    },
    {
      name: "Prof.Dr.Bansidhar Majhi",
      designation: "Hon'ble Vice Chancellor, VSSUT",
      id: "2",
    },
    {
      name: "Prof.Dr.Bansidhar Majhi",
      designation: "Hon'ble Vice Chancellor, VSSUT",
      id: "3",
    },
    {
      name: "Prof.Dr.Bansidhar Majhi",
      designation: "Hon'ble Vice Chancellor, VSSUT",
      id: "4",
    },
  ];
  const organisers = [
    {
      name: "name here",
      designation: "designation here",
      id: "1",
    },
    {
      name: "name",
      designation: "designation",
      id: "2",
    },
    {
      name: "name",
      designation: "designation",
      id: "3",
    },
    {
      name: "name",
      designation: "designation",
      id: "4",
    },
  ];

  return (
    <>
      <Typography
        variant="h1"
        textAlign="center"
        sx={{ fontSize: "45px", lineHeight: "52px" }}
      >
        The Team
      </Typography>
      <Typography
        textAlign="center"
        margin="20px 0"
        variant="p"
        sx={{ fontSize: "35px", lineHeight: "52px", fontWeight: "100" }}
      >
        Hon`&apos;`ble Mentions
      </Typography>
      <Stack
        direction="column"
        width="90%"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          margin="25px auto"
          direction="row"
          flexWrap="wrap"
          justifyContent="space-around"
          rowGap="20px"
          columnGap="100px"
        >
          {officials.map((e) => (
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              sx={{
                borderRadius: "9px",
                margin: "0",
                padding: "0 8px",
                width: {
                  xs: "300px",
                  md: "400px",
                },
                height: "100px",
                backgroundColor: "white",
                color: "#ffffff",
              }}
              key={e.id}
            >
              <Avatar
                src="/clubs/1.png"
                sx={{
                  height: "80px",
                  width: "80px",
                }}
              >
                p
              </Avatar>
              <Box>
                <Typography color="black">{e.name}</Typography>
                <Typography variant="p" color="black">
                  {e.designation}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
        <Typography
          textAlign="center"
          margin="20px 0"
          variant="p"
          sx={{ fontSize: "35px", lineHeight: "52px", fontWeight: "100" }}
        >
          ORGANISERS
        </Typography>
        <Stack
          margin="25px auto"
          direction="row"
          flexWrap="wrap"
          justifyContent="space-around"
          rowGap="20px"
          columnGap="100px"
        >
          {organisers.map((e) => (
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              sx={{
                borderRadius: "9px",
                marginLeft: "0px",
                margin: "0",
                padding: "0 8px",
                width: {
                  xs: "300px",
                  md: "400px",
                },
                height: "100px",
                backgroundColor: "white",
                color: "#ffffff",
              }}
              key={e.id}
            >
              <Avatar
                src="/clubs/1.png"
                sx={{
                  height: "80px",
                  width: "80px",
                }}
              >
                p
              </Avatar>
              <Box>
                <Typography color="black">{e.name}</Typography>
                <Typography variant="p" color="black">
                  {e.designation}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Link href="/clubs">
        <Button variant="contained" sx={{ borderRadius: "20px" }}>
          CLUBS
        </Button>
      </Link>
    </>
  );
};
export default Speakers;
