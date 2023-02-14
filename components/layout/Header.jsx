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
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar
      sx={{
        backgroundColor: "#F3EEE8;",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 32px",
        gap: "20px",
        isolation: "isolate",
      }}
      elevation={0}
      position="sticky"
    >
      <Typography
        sx={{
          color: "#C0000A",
          fontFamily: "BentonSans Comp Black",
          fontSize: "1.7rem",
        }}
      >
        SAMAVESH X VASSAUNT
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
          <Link href="/#theme">THEME</Link>
        </Typography>
        <Typography variant="nav">
          <Link href="/events">EVENTS</Link>
        </Typography>
        <Typography variant="nav">
          <Link href="/#speakers">SPEAKERS</Link>
        </Typography>
        <Typography variant="nav">
          <Link href="/#sponsors">SPONSORS</Link>
        </Typography>
      </Box>
      <Box>
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

            {/* <Link href="/login"> */}
            <Button variant="contained" sx={{ borderRadius: "20px" }}>
              Login
            </Button>
          </Link>
        </Box>
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
              <Typography variant="nav">
                <Link href="/#theme">THEME</Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="nav">
                <Link href="/events">EVENTS</Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="nav">
                <Link href="/#speakers">SPEAKERS</Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="nav">
                <Link href="/#sponsors">SPONSORS</Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Link href="/registration">
                <Button
                  variant="contained"
                  sx={{ borderRadius: "20px", marginRight: "10px" }}
                >
                  Register
                </Button>
              </Link>

              {/* <Link href="/login"> */}
              <Button variant="contained" sx={{ borderRadius: "20px" }}>
                Login
              </Button>
            </ListItem>
          </List>
        </SwipeableDrawer>
      </Box>
    </AppBar>
  );
};

export default Header;
