import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import style from "../styles/clubs.module.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
function clubs() {
  const clubs = [
    {
      title: "Enigma",
      image: "1",
    },
    {
      title: "Robotics",
      image: "1",
    },
    {
      title: "IIC",
      image: "1",
    },
    {
      title: "xyz",
      image: "1",
    },
    {
      title: "enigma",
      image: "1",
    },
    {
      title: "enigma",
      image: "1",
    },
    {
      title: "enigma",
      image: "1",
    },
    {
      title: "enigma",
      image: "1",
    },
    {
      title: "enigma",
      image: "1",
    },
    {
      title: "Computer Science",
      image: "1",
    },
    {
      title: "Information Technology",
      image: "1",
    },
    {
      title: "Chemical Engineering",
      image: "1",
    },
    {
      title: "Electrical Engineering",
      image: "1",
    },
    ,
    {
      title: "Electrical & Electronics Engineering",
      image: "1",
    },
    {
      title: "Electrical & Telecomm. Engineering",
      image: "1",
    },
    {
      title: "Mechanical Engineering",
      image: "1",
    },
    {
      title: "Civil Engineering",
      image: "1",
    },
    {
      title: "Metallurgy & Materials Engineering",
      image: "1",
    },
  ];

  return (
    <>
      <Typography
        margin="0 auto"
        marginTop="20px"
        padding="20px 0"
        fontSize={{
          xs: "40px",
          md: "60px",
        }}
        sx={{
          textDecorationLine: "underline",
          textAlign: "center",
        }}
      >
        ORGANIZING CLUBS AND SOCIETIES
      </Typography>
      <div className={style.container}>
        {clubs.map((club) => (
          <div className={style.box}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar sx={{ height: "70px", width: "70px" }}>
                {club.image}
              </Avatar>
              <p className={style.p1}>{club.title}</p>
            </Stack>
            <p>
              <IconButton>
                <OpenInNewIcon sx={{ color: "#fff" }} />
              </IconButton>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default clubs;
