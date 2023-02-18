/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import AppContext from "context/AppContext";
import { useRouter } from "next/router";
import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentPage = () => {
  const router = useRouter();
  const { isAuthenticated, PaymentStatus } = React.useContext(AppContext);
  const details = {
    name: "Soham Samantaray",
    branch: "CSE",
    college: "VSSUT",
    phoneNum: "9090445700",
    amount: "1000",
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/registration");
    } else {
      toast.warning(
        "Oops!! seems you have not paid,Please complete the payment process"
      );
    }
  }, []);
  return (
    <Stack>
      <Typography variant="h4" color="initial" textAlign="center">
        Payment Page
      </Typography>
      <ToastContainer />
      <Stack
        sx={{
          border: "1px solid black",
          boxShadow: "5px 10px 40px #888888",
          padding: "25px",
          margin: "15px auto",
        }}
      >
        <Typography variant="h6" color="initial">
          Name: {details.name}
        </Typography>
        <Typography variant="subtitle1" color="initial">
          Institution: {details.college}
        </Typography>
        <Typography variant="subtitle1" color="initial">
          Branch: {details.branch}
        </Typography>
        <Typography variant="subtitle1" color="initial">
          Contact Number: {details.phoneNum}
        </Typography>
        <Typography variant="caption" color="initial">
          Amount to be paid: {details.amount}
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: "10px" }}>
          Make Payment
        </Button>
      </Stack>
    </Stack>
  );
};

export default PaymentPage;
