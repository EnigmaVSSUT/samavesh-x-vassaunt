import React from "react";
import AppContext from "context/AppContext";
import { useRouter } from "next/router";
const Profile = () => {
  const router = useRouter();
  const { isAuthenticated } = React.useContext(AppContext);
  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push("/registration");
    }
  });
  return <div>Profile</div>;
};

export default Profile;
