/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import AppContext from "context/AppContext";
import { useRouter } from "next/router";
const PaymentPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/registration");
    } else {
    }
  }, []);
  return <div>PaymentPage</div>;
};

export default PaymentPage;
