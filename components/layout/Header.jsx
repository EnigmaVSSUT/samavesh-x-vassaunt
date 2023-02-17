import {
  Typography,
  Stack,
  Button,
  AppBar,
  Box,
  IconButton,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import { useState, useContext } from "react";
import AppContext from "context/AppContext";
const Header = () => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated } = useContext(AppContext);
  return (
    <AppBar
      sx={{
        // backgroundColor: "#F3EEE8;",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 32px",
        gap: "20px",
        isolation: "isolate",
        borderBottom: "1px solid",
        borderColor: "divider",
        backdropFilter: "blur(20px)",
      }}
      elevation={0}
      position="sticky"
      color="header"
    >
      <Typography
        sx={{
          color: "#C0000A",
          fontFamily: "BentonSans Comp Black",
          fontSize: "1.7rem",
        }}
      >
        <Link href="/#home"> SAMAVESH X VASSAUNT</Link>
      </Typography>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          flexDirection: "row",

          padding: "0px",
          gap: "16px",
          color: "#000000",
          alignItems: "center",
        }}
      >
        <Typography variant="nav">
          <Link href="/#home">HOME</Link>
        </Typography>
        <Typography variant="nav">
          <Link href="/#theme">THEME</Link>
        </Typography>
        <Typography variant="nav">
          <Link href="/events">EVENTS</Link>
        </Typography>
        <Typography variant="nav">
          <Link href="/#speakers">GUESTS</Link>
        </Typography>
        <Typography variant="nav">
          <Link href="/#sponsors">SPONSORS</Link>
        </Typography>
        <Typography variant="nav">
          <Link href="/#organisers">THE TEAM</Link>
        </Typography>
      </Box>
      <Box>
        {!isAuthenticated ? (
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <Link href="/registration">
              <Button
                variant="contained"
                sx={{ borderRadius: "20px", marginRight: "10px" }}
              >
                Register
              </Button>
            </Link>

            <Link href="/login">
              <Button variant="contained" sx={{ borderRadius: "20px" }}>
                Login
              </Button>
            </Link>
          </Box>
        ) : (
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <Link href="/profile">
              <IconButton variant="contained">
                <PersonIcon></PersonIcon>
              </IconButton>
            </Link>
          </Box>
        )}
        <IconButton sx={{ display: { md: "none" } }}>
          <MenuIcon onClick={() => setOpen(true)} />
        </IconButton>
        <SwipeableDrawer
          PaperProps={{
            sx: {
              backgroundColor: "#f3eee8",
              width: "200px",
            },
          }}
          open={open}
          anchor="right"
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
        >
          <div>
            <IconButton>
              <ChevronRightIcon onClick={() => setOpen(false)} />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem>
              {" "}
              {!isAuthenticated ? (
                <>
                  <Link href="/registration">
                    <Button
                      variant="contained"
                      sx={{ borderRadius: "20px", marginRight: "10px" }}
                      onClick={() => setOpen(false)}
                    >
                      Register
                    </Button>
                  </Link>

                  <Link href="/login">
                    <Button
                      variant="contained"
                      sx={{ borderRadius: "20px" }}
                      onClick={() => setOpen(false)}
                    >
                      Login
                    </Button>
                  </Link>
                </>
              ) : (
                <Link href="/profile" onClick={() => setOpen(false)}>
                  <Typography variant="nav">Profile</Typography>
                </Link>
              )}{" "}
            </ListItem>
            <ListItem>
              <Typography variant="nav">
                <Link href="/#home" onClick={() => setOpen(false)}>
                  HOME
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="nav">
                <Link href="/#theme" onClick={() => setOpen(false)}>
                  THEME
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="nav">
                <Link href="/events" onClick={() => setOpen(false)}>
                  EVENTS
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="nav">
                <Link href="/#speakers" onClick={() => setOpen(false)}>
                  GUESTS
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="nav">
                <Link href="/#organisers" onClick={() => setOpen(false)}>
                  THE TEAM
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="nav">
                <Link href="/#sponsors" onClick={() => setOpen(false)}>
                  SPONSORS
                </Link>
              </Typography>
            </ListItem>
          </List>
        </SwipeableDrawer>
      </Box>
    </AppBar>
  );
};

export default Header;
