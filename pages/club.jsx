import { Stack } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

const Clubs = () => {
  return (
    <Stack sx={{ paddingTop: "50px" }}>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", padding: "20px" }}
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
            ENIGMA
          </Typography>
          <Typography
            variant="h6"
            color="initial"
            sx={{
              fontFamily: "BentonSans Comp Black",
              textTransform: "uppercase",
            }}
          >
            OFFICIAL WEB AND CODING CLUB
          </Typography>
        </Stack>
        <Stack sx={{ alignItems: "flex-start" }}>
          <Typography
            variant="h4"
            color="initial"
            sx={{
              marginBottom: "30px",
              fontFamily: "BentonSans Comp Black",
              textTransform: "uppercase",
            }}
          >
            POINT OF CONTACT
          </Typography>
          <Stack direction="row">
            <Stack sx={{ alignItems: "center", marginRight: "10px" }}>
              <Avatar>N</Avatar>
              <Typography variant="subtitle1" color="initial">
                SOHAM SAMANTARAY
              </Typography>
              <Typography variant="caption" color="initial">
                SECRETARY
              </Typography>
            </Stack>
            <Stack sx={{ alignItems: "center", marginRight: "10px" }}>
              <Avatar>N</Avatar>
              <Typography variant="subtitle1" color="initial">
                SOHAM SAMANTARAY
              </Typography>
              <Typography variant="caption" color="initial">
                SECRETARY
              </Typography>
            </Stack>
            <Stack sx={{ alignItems: "center", marginRight: "10px" }}>
              <Avatar>N</Avatar>
              <Typography variant="subtitle1" color="initial">
                SOHAM SAMANTARAY
              </Typography>
              <Typography variant="caption" color="initial">
                SECRETARY
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack sx={{ padding: "15px" }}>
        <Typography variant="h4" color="initial" marginBottom="3vmax">
          Events
        </Typography>
        <Stack direction="row" gap="4vmax">
          <Stack
            sx={{
              width: "300px",
              height: "200px",
              backgroundColor: "red",
              padding: "10px",
              border: "3px solid black",
              justifyContent: "space-between",
            }}
          >
            <Stack>
              <Typography variant="h4" color="white">
                Nox Code
              </Typography>
              <Typography variant="subtitle1" color="white">
                About club
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <Typography variant="subtitle1" color="white">
                Venue: E-Learning Center
              </Typography>
              <Typography variant="subtitle1" color="white">
                Time: 9.30AM
              </Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{
              width: "300px",
              height: "200px",
              backgroundColor: "red",
              padding: "10px",
              border: "3px solid black",
              justifyContent: "space-between",
            }}
          >
            <Stack>
              <Typography variant="h4" color="white">
                Nox Code
              </Typography>
              <Typography variant="subtitle1" color="white">
                About club
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <Typography variant="subtitle1" color="white">
                Venue: E-Learning Center
              </Typography>
              <Typography variant="subtitle1" color="white">
                Time: 9.30AM
              </Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{
              width: "300px",
              height: "200px",
              backgroundColor: "red",
              padding: "10px",
              border: "3px solid black",
              justifyContent: "space-between",
            }}
          >
            <Stack>
              <Typography variant="h4" color="white">
                Nox Code
              </Typography>
              <Typography variant="subtitle1" color="white">
                About club
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <Typography variant="subtitle1" color="white">
                Venue: E-Learning Center
              </Typography>
              <Typography variant="subtitle1" color="white">
                Time: 9.30AM
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Clubs;
