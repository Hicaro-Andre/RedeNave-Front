import { useState } from "react";

import "../styles/privacypolicy.css"
import Privacy from "../components/Privacidade/Privacy";
import Navbar from "../components/NavBar";



function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <Privacy />
    </>
  );
}

export default PrivacyPolicy;
