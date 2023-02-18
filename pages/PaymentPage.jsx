import React from "react";
import { useEffect } from "react";
import AppContext from "context/AppContext";
import { useRouter } from "next/router";
const PaymentPage = () => {
  const router = useRouter();
  const { isAuthenticated, PaymentStatus } = React.useContext(AppContext);
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/registration");
    }
  });
  return <div>PaymentPage</div>;
};

export default PaymentPage;
