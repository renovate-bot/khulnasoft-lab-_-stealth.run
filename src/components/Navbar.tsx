import { motion } from "framer-motion";
import type { AnimationControls } from "framer-motion";
import Logo from "./Logo";

interface NavbarProps {
  isFixed: boolean;
  controls: AnimationControls;
}

const Navbar = ({ isFixed }: NavbarProps) => {
  return (
    <motion.div
      key={isFixed ? "fixedNavbar" : "relativeNavbar"}
      initial={{ opacity: 0, y: isFixed ? -10 : 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: isFixed ? -10 : 5 }}
      transition={{ duration: 0.3 }}
      className={`navbar bg-secondary ${
        isFixed
          ? "fixed rounded-b-lg top-0 left-0 right-0 z-50"
          : "relative md:top-10 rounded-b-lg"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="https://docs.docker.com/get-started/overview/">
                What is Docker?
              </a>
            </li>
            <li>
              <a href="https://stealthos.khulnasoft.com/docs/cloud/stealth-on-docker">
                Images
              </a>
            </li>
            <li>
              <a href="https://stealthos.khulnasoft.com/docs/">Documentation</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost">
          <Logo />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="https://docs.docker.com/get-started/overview/">
              What is Docker?
            </a>
          </li>
          <li>
            <a href="https://stealthos.khulnasoft.com/docs/cloud/stealth-on-docker">
              Images
            </a>
          </li>
          <li>
            <a href="https://stealthos.khulnasoft.com/docs/">Documentation</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn text-accent"
          href="https://stealthos.khulnasoft.com/download/"
        >
          Download StealthOS
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
