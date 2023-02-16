import { Stack, Typography } from "@mui/material";
import { borderRadius, Box } from "@mui/system";
const ticket = () => {
  return (
    <>
      <Box width="400px" backgroundColor="#D61513" borderRadius="10px">
        <Stack direction="row" justifyContent="space-between">
          <Typography
            variant="h4"
            sx={{
              textDecoration: "underline",
              color: "white",
              padding: "10px",
            }}
          >
            FEST PASS
          </Typography>
          <Typography
            variant="h3"
            padding="10px 15px"
            margin="10px 10px"
            textAlign="center"
            sx={{
              backgroundColor: "#F3EEE8",
              borderRadius: "50%",
            }}
          >
            69
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default ticket;
