/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import AppContext from "context/AppContext";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";

const PaymentPage = () => {
  const router = useRouter();
  const { isAuthenticated, PaymentStatus } = React.useContext(AppContext);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/registration");
    }
  });
  return <div>PaymentPage</div>;
};

export default PaymentPage;
