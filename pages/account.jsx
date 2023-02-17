import { Stack } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Avatar, Grid } from "@mui/material";
import ClubCard from "@/components/ClubCard";
import club from "../lib/data/club";
import Events from "@/components/events";

const Account = () => {
  return (
    <>
      <Stack
        sx={{ paddingTop: "50px", margin: { md: "0 auto", sm: "0 auto" } }}
      >
        <Stack
          sx={{
            justifyContent: "space-between",
            padding: "20px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            margin: { xs: "0 auto", md: "0px" },
          }}
        >
          <Stack>
            <Typography
              variant="h2"
              color="initial"
              sx={{
                textDecoration: "underline",
                fontFamily: "BentonSans Comp Black",
                textTransform: "uppercase",
              }}
            >
              My Profile
            </Typography>
            <Typography
              variant="h6"
              color="initial"
              sx={{
                fontFamily: "BentonSans Comp Black",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              Events Participated
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Events />
    </>
  );
};
export default Account;
