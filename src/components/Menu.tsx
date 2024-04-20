import { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";
import Navbar from "./Navbar";

const Menu = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = async () => {
      try {
        const scrollY = window.scrollY;
        setIsNavbarFixed(scrollY > 5);
      } catch (error) {
        console.error("handleScroll error:", error);
      }
    };

    const scrollListener = () => {
      handleScroll().catch((error) => {
        console.error("handleScroll error:", error);
      });
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  useEffect(() => {
    const updateControls = async () => {
      try {
        await controls.start({
          y: isNavbarFixed ? 0 : 5,
          width: "100%",
        });
      } catch (error) {
        console.error("updateControls error:", error);
      }
    };

    void updateControls();
  }, [isNavbarFixed, controls]);

  return <Navbar isFixed={isNavbarFixed} controls={controls} />;
};

export default Menu;
