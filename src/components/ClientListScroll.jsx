//Infinite scroll client logo

import React, { useState, useEffect } from "react";
import shopfy from "../assets/clientList/shopify-ar21 1.svg";
import Alogo from "../assets/clientList/AG_Logo_Natural_Linen_with_Cold_Jaggery_Text-removebg-preview 1.svg";
import Aws from "../assets/clientList/Amazon_Web_Services-Logo.wine 1.svg";
import Biba from "../assets/clientList/biba-logo 1.svg";
import Biskit from "../assets/clientList/Biskit_with_Logo 1.svg";
import Cbazzar from "../assets/clientList/Cbazaar_Logo 1.svg";
import shankar from "../assets/clientList/SHANKARA 1.svg";
import diva from "../assets/clientList/diva_logo_ss-removebg-preview 1.svg";
import gaitode from "../assets/clientList/gaitonde logo 1.svg";
import Monte from "../assets/clientList/monte carlo new logo 1.svg";
import New from "../assets/clientList/100086173_101503861582535_3065356942709882880_n 1.svg";
import "./clientList.css";
export default function ClientListScroll() {
  return (
    <>
      <div className="logos">
        <div className="logo-slide">
          <img src={shopfy} rel="" />
          <img src={Alogo} rel="" />
          <img src={Aws} rel="" />
          <img src={Biba} rel="" />
          <img src={Biskit} rel="" />
          <img src={Cbazzar} rel="" />
          <img src={shankar} rel="" />
          <img src={diva} rel="" />
          <img src={gaitode} rel="" />
          <img src={Monte} rel="" />
          <img src={New} rel="" />
        </div>
        <div className="logo-slide">
          <img src={shopfy} rel="" />
          <img src={Alogo} rel="" />
          <img src={Aws} rel="" />
          <img src={Biba} rel="" />
          <img src={Biskit} rel="" />
          <img src={Cbazzar} rel="" />
          <img src={shankar} rel="" />
          <img src={diva} rel="" />
          <img src={gaitode} rel="" />
          <img src={Monte} rel="" />
          <img src={New} rel="" />
        </div>
      </div>
    </>
  );
}
