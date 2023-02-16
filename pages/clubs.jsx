import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import style from "../styles/clubs.module.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";

function clubs() {
  const clubs = [
    {
      title: "Enigma",
      image: "1",
      id: "enigma",
    },
    {
      title: "Robotics",
      image: "1",
      id: "robotics",
    },
    {
      title: "IIC",
      image: "1",
      id: "iic",
    },
    {
      title: "xyz",
      image: "1",
      id: "4",
    },
    {
      title: "enigma",
      image: "1",
      id: "enigma",
    },
    {
      title: "enigma",
      image: "1",
      id: "enigma",
    },
    {
      title: "enigma",
      image: "1",
      id: "enigma",
    },
    {
      title: "Aerotech",
      image: "1",
      id: "aerotech",
    },
    {
      title: "Souls & Vibranz",
      image: "1",
      id: "souls",
    },
    {
      title: "Computer Science",
      image: "1",
      id: "cse",
    },
    {
      title: "Information Technology",
      image: "1",
      id: "it",
    },
    {
      title: "Chemical Engineering",
      image: "1",
      id: "che",
    },
    {
      title: "Electrical Engineering",
      image: "1",
      id: "ee",
    },
    ,
    {
      title: "Electrical & Electronics Engineering",
      image: "1",
      id: "eee",
    },
    {
      title: "Electrical & Telecomm. Engineering",
      image: "1",
      id: "etc",
    },
    {
      title: "Mechanical Engineering",
      image: "1",
      id: "me",
    },
    {
      title: "Civil Engineering",
      image: "1",
      id: "ce",
    },
    {
      title: "Metallurgy & Materials Engineering",
      image: "1",
      id: "mme",
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
          <div className={style.box} key={club.id}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar sx={{ height: "70px", width: "70px" }}>
                {club.image}
              </Avatar>
              <p className={style.p1}>{club.title}</p>
            </Stack>
            <p>
              <IconButton>
                <Link href={`/club/${club.id}`}>
                  <OpenInNewIcon sx={{ color: "#fff" }} />
                </Link>
              </IconButton>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default clubs;
