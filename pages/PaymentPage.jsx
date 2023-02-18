import React from "react";
import { useEffect, useState } from "react";
import AppContext from "context/AppContext";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";

const PaymentPage = () => {
  const router = useRouter();
  const [link, setLink] = useState("");
  const { isAuthenticated, setPaymentStatus } = React.useContext(AppContext);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/registration");
    } else {
      const getLink = async () => {
        const userToken = localStorage.getItem("token");
        // console.log(userToken)
        const { data } = await axios.post(
          "http://localhost:8000/api/payment/getpayment",
          {},
          {
            headers: {
              authorisation: `${userToken}`,
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );

        if (data.link_status === "PAID") {
          setPaymentStatus(true);
        }

        if (!data.link_url) {
          const { paymentData } = await axios.post(
            "http://localhost:8000/api/payment/makepayment",
            {},
            {
              headers: {
                authorisation: userToken,
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          );
          // console.log(paymentData.link_url)
          setLink(paymentData.link_url);
        } else {
          console.log(data);
          setLink(data.link_url);
        }
      };
      getLink();
    }
  });

  return (
    <Stack>
      <Button
        variant="contained"
        sx={{ bottom: "20px", fontSize: "20px", padding: "10px 50px" }}
        href={link}
      >
        Get&nbsp;&nbsp; your&nbsp;&nbsp; ticket
      </Button>
    </Stack>
  );
};

export default PaymentPage;
