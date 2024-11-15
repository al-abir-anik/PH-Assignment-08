import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    let title = "";

    switch (path) {
      case "":
        title = "Gadget | Gadget Heaven";
        break;
      case "dashboard":
        title = "Dashboard | Gadget Heaven";
        break;
      case "statistics":
        title = "Statistics | Gadget Heaven";
        break;
      case "support":
        title = "Support | Gadget Heaven";
        break;
      default:
        title = "Gadget Heaven";
    }

    document.title = title;
  }, [location]);

  return (
    <div className="bg-[#f6f6f6]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
