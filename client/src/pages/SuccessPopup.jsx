import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";

const SuccessPopup = ({ appointment }) => {
  return (
    <Box
      sx={{
        mt: 3,
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "green",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" mb={2}>
        Appointment Booked Successfully!
      </Typography>
      <Typography variant="body1">
        Meeting Link:{" "}
        <Link href={appointment.meetingLink} target="_blank" rel="noopener" color="inherit">
          {appointment.meetingLink}
        </Link>
      </Typography>
      <Typography variant="body2" mt={1}>
        Please check your email for further details.
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 2, backgroundColor: "white", color: "green", ":hover": { backgroundColor: "lightgreen" } }}
        onClick={() => window.location.reload()}
      >
        Book Another Appointment
      </Button>
    </Box>
  );
};

export default SuccessPopup;
