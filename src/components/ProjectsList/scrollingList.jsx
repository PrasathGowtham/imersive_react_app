import React from "react";
import "./projectList.css";

import ClientListScroll from "../ClientListScroll";
const redirectToNextPage = () => {
  // Specify the URL of the next page
  const nextPageUrl = "https://imersive.io/";

  // Open the next page in a new window
  window.open(nextPageUrl, "_blank");
};
function ScrollingLogos() {
  return (
    <>
      <div className="center">
        <button class="button-46" role="button" onClick={redirectToNextPage}>
          Build Your 3D XR Store
        </button>
      </div>
      <ClientListScroll />
    </>
  );
}

export default ScrollingLogos;
