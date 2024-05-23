import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext.jsx";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { BsCircleFill } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import { PiMoonBold } from "react-icons/pi";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isInternetOpen, setIsInternetOpen] = useState(false);

  useEffect(() => {
    const scrollStep = () => {
      setScrollPosition((prev) => (prev + 1) % window.innerWidth);
    };

    const interval = setInterval(scrollStep, 10);

    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = (setDropdownOpen) => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = (setDropdownOpen) => {
    setDropdownOpen(false);
  };

  return (
    <div className=" top-0 w-full ">
      <header className=" top-0 left-0 w-full ">
        <nav
          className={
            theme === "dark"
              ? "bg-[#29292B] border-l-0 border-r-0 text-white flex items-center border border-[#434345] justify-between px-4 pr-0 py-3 border-b fixed inset-x-0 top-[-1px] w-full z-50 h-[80px]"
              : "bg-[#EBEBED] text-black flex items-center border border-[#D2D2D5] justify-between px-4 pr-0 py-3 border-b fixed inset-x-0 top-0 z-50 h-[80px]"
          }
        >
          <a className="flex items-center" href="#">
            <img src={Logo} alt="Logo" />
          </a>
          <div
            onClick={toggleTheme}
            className={
              theme === "dark"
                ? "bg-[#434345] h-[38px] w-[62px] flex items-center justify-start px-[4px] rounded-3xl shadow-md cursor-pointer fixed bottom-6"
                : "bg-[#434345] h-[38px] w-[62px] flex items-center justify-end px-[4px] rounded-3xl shadow-md cursor-pointer fixed bottom-6"
            }
          >
            <div
              onClick={toggleTheme}
              className={`flex h-[28px] w-[28px] items-center justify-center rounded-[50%] ${
                theme === "dark"
                  ? "bg-[#FF6A47] hover:bg-[#FF977E] transition cursor-pointer "
                  : "bg-[#FF6A47] hover:bg-[#FF977E] transition cursor-pointer"
              } `}
            >
              {theme === "dark" ? (
                <PiMoonBold
                  className={`text-[21px] font-[800] text-[#29292B] `}
                  onClick={toggleTheme}
                />
              ) : (
                <ImSun
                  className={`text-[21px] text-[#29292B] `}
                  onClick={toggleTheme}
                />
              )}
            </div>
          </div>

          <div>
            <ul
              className={`flex items-center border h-[80px] ${
                theme === "dark" ? "border-[#434345]" : "border-[#D2D2D5]"
              } space-x-28  font-semibold pr-9 hover:text-[${
                theme === "dark" ? "#FF6A47" : "#52002D"
              }`}
            >
              <li className="relative group ">
                <a
                  className={`px-3 py-2 w-40 justify-center  hover:text-[${
                    theme === "dark" ? "#FF6A47" : "#52002D"
                  }] transition h-[80px] flex items-center text-[20px] `}
                  href="#"
                  onMouseEnter={() => handleMouseEnter(setIsWhatWeDoOpen)}
                  onMouseLeave={() => handleMouseLeave(setIsWhatWeDoOpen)}
                >
                  What we do
                </a>
                {isWhatWeDoOpen && (
                  <>
                    <motion.div
                      className="fixed inset-0 w-[100%] z-10 mt-[80px] h-screen backdrop-blur-2xl left-0 shadow-lg duration-[0.55s]  "
                      onClick={() => setIsWhatWeDoOpen(false)}
                      initial={{ opacity: 0, y: -1020 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -1020 }}
                      transition={{ delay: 0.2 }}
                    ></motion.div>
                    <motion.div
                      className={`absolute left-0 w-screen z-10 ${
                        theme === "light" ? "bg-[#EBEBED]" : "bg-[#29292B]"
                      } shadow-lg transform  flex flex-col h-screen duration-[0.55s]`}
                      initial={{ opacity: 0, y: -1010 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -1010 }}
                      transition={{ delay: 0.2 }}
                      onMouseEnter={() => handleMouseEnter(setIsWhatWeDoOpen)}
                      onMouseLeave={() => handleMouseLeave(setIsWhatWeDoOpen)}
                    >
                      <div
                        className={`p-5  flex w-full border  ${
                          theme === "light" ? "border-[#D2D2D5]" : "#434345"
                        } border-t-0 `}
                      >
                        <h2
                          className={`px-4 pt-2 pb-1 text-2xl font-bold ${
                            theme === "light"
                              ? "text-[#52002D]"
                              : "text-[#FF977E]"
                          } w-[250px]`}
                        >
                          Services
                        </h2>
                        <div className="px-4 py-1  w-[350px]">
                          <a
                            className={`block px-4 py-2 text-2xl ${
                              theme === "light" ? "text-gray-700" : "text-white"
                            } underline`}
                            href="#"
                          >
                            Software development
                          </a>
                          <a
                            className={`block px-4 py-2 text-2xl ${
                              theme === "light" ? "text-gray-700" : "text-white"
                            } underline`}
                            href="#"
                          >
                            Web development
                          </a>
                        </div>
                        <div className="px-4 py-1 w-[350px]">
                          <a
                            className={`block px-4 py-2 text-2xl ${
                              theme === "light" ? "text-gray-700" : "text-white"
                            } underline`}
                            href="#"
                          >
                            Mobile app development
                          </a>
                          <a
                            className={`block px-4 py-2 text-2xl ${
                              theme === "light" ? "text-gray-700" : "text-white"
                            } underline`}
                            href="#"
                          >
                            IT services for startups
                          </a>
                        </div>
                      </div>
                      <div className="p-5 flex w-full border border-[#D2D2D5] border-t-0  ">
                        <h2
                          className={`px-4 pt-2 pb-1 text-2xl font-bold ${
                            theme === "light"
                              ? "text-[#52002D]"
                              : "text-[#FF977E]"
                          } w-[250px]`}
                        >
                          Industries
                        </h2>
                        <div className="px-4 py-1 w-[350px]">
                          <a
                            className={`block px-4 py-2 text-2xl ${
                              theme === "light" ? "text-gray-700" : "text-white"
                            } underline`}
                            href="#"
                          >
                            Fintech
                          </a>
                          <a
                            className={`block px-4 py-2 text-2xl ${
                              theme === "light" ? "text-gray-700" : "text-white"
                            } underline`}
                            href="#"
                          >
                            Healthtech
                          </a>
                          <a
                            className={`block px-4 py-2 text-2xl ${
                              theme === "light" ? "text-gray-700" : "text-white"
                            } underline`}
                            href="#"
                          >
                            Edtech
                          </a>
                          <a
                            className={`block px-4 py-2 text-2xl ${
                              theme === "light" ? "text-gray-700" : "text-white"
                            } underline`}
                            href="#"
                          >
                            Gamedev
                          </a>
                        </div>
                        <div className="px-4 py-1 w-[350px]">
                          <a
                            className={`block px-4 py-2 text-2xl ${
                              theme === "light" ? "text-gray-700" : "text-white"
                            } underline`}
                            href="#"
                          >
                            Real estate
                          </a>
                          <a
                            className={`block px-4 py-2 text-2xl ${
                              theme === "light" ? "text-gray-700" : "text-white"
                            } underline`}
                            href="#"
                          >
                            Ecommerce
                          </a>
                          <a
                            className={`block px-4 py-2 text-2xl ${
                              theme === "light" ? "text-gray-700" : "text-white"
                            } underline`}
                            href="#"
                          >
                            Marketing/adtech
                          </a>
                        </div>
                      </div>
                      <div className="p-5  flex w-full border border-[#D2D2D5] border-t-0 border-b-0 ">
                        <h2
                          className={`px-4 pt-2 pb-1 text-2xl font-bold ${
                            theme === "light"
                              ? "text-[#52002D]"
                              : "text-[#FF977E]"
                          } w-[250px]`}
                        >
                          Expertise
                        </h2>
                        <div className="px-4 py-1 w-[350px]">
                          <a
                            className={`block px-4 py-2 text-2xl ${
                              theme === "light" ? "text-gray-700" : "text-white"
                            } underline`}
                            href="#"
                          >
                            Cloud
                          </a>
                          <a
                            className={`block px-4 py-2 text-2xl ${
                              theme === "light" ? "text-gray-700" : "text-white"
                            } underline`}
                            href="#"
                          >
                            AR/VR
                          </a>
                          <a
                            className={`block px-4 py-2 text-2xl ${
                              theme === "light" ? "text-gray-700" : "text-white"
                            } underline`}
                            href="#"
                          >
                            Blockchain
                          </a>
                          <a
                            className={`block px-4 py-2 text-2xl ${
                              theme === "light" ? "text-gray-700" : "text-white"
                            } underline`}
                            href="#"
                          >
                            Salesforce
                          </a>
                        </div>
                        <div className="px-4 py-1 w-[350px]">
                          <a
                            className={`block px-4 py-2 text-2xl ${
                              theme === "light" ? "text-gray-700" : "text-white"
                            } underline`}
                            href="#"
                          >
                            Internet of things
                          </a>
                          <a
                            className={`block px-4 py-2 text-2xl ${
                              theme === "light" ? "text-gray-700" : "text-white"
                            } underline`}
                            href="#"
                          >
                            AI
                          </a>
                          <a
                            className={`block px-4 py-2 text-2xl ${
                              theme === "light" ? "text-gray-700" : "text-white"
                            } underline`}
                            href="#"
                          >
                            Big data
                          </a>
                          <a
                            className={`block px-4 py-2 text-2xl ${
                              theme === "light" ? "text-gray-700" : "text-white"
                            } underline`}
                            href="#"
                          >
                            Cybersecurity
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </li>
              <li>
                <a
                  className="px-3 py-2  hover:text-[#52002D] transition text-[20px]"
                  href="#"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="px-3 py-2  hover:text-[#52002D] transition text-[20px]"
                  href="#"
                >
                  Insights
                </a>
              </li>
              <ul className=" flex space-x-16 ">
                <ul className="flex">
                  <li className="relative group">
                    <a
                      className={`px-3 py-2 w-40 justify-center  hover:text-[${
                        theme === "light" ? "#52002D" : "#FF6A47"
                      }] transition h-[80px] flex items-center text-[20px]`}
                      href="#"
                      onMouseEnter={() => handleMouseEnter(setIsAboutUsOpen)}
                      onMouseLeave={() => handleMouseLeave(setIsAboutUsOpen)}
                    >
                      About us
                    </a>
                    {isAboutUsOpen && (
                      <>
                        <motion.div
                          className="fixed inset-0 w-[100%] z-40 mt-[80px] h-screen backdrop-blur-2xl duration-[0.55s]"
                          onClick={() => setIsWhatWeDoOpen(false)}
                          initial={{ opacity: 0, y: -1020 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -1020 }}
                          transition={{ delay: 0.2 }}
                        ></motion.div>
                        <motion.div
                          className={`fixed  w-[62%] z-40  shadow-lg flex flex-col h-screen right-0 duration-[0.55s] ${
                            theme === "light" ? "bg-[#EBEBED]" : "bg-[#29292B]"
                          }`}
                          initial={{ opacity: 0, y: -1010 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -1010 }}
                          transition={{ delay: 0.2 }}
                          onMouseEnter={() =>
                            handleMouseEnter(setIsAboutUsOpen)
                          }
                          onMouseLeave={() =>
                            handleMouseLeave(setIsAboutUsOpen)
                          }
                        >
                          <div
                            className={`p-5  flex w-full border  ${
                              theme === "light" ? "border-[#D2D2D5]" : "#434345"
                            } border-t-0 `}
                          >
                            <h2
                              className={`px-4 pt-2 pb-1 text-2xl font-bold ${
                                theme === "light"
                                  ? "text-[#52002D]"
                                  : "text-[#FF977E]"
                              } w-[250px]`}
                            >
                              Services
                            </h2>
                            <div className="px-4 py-1  w-[350px]">
                              <a
                                className={`block px-4 py-2 text-2xl ${
                                  theme === "light"
                                    ? "text-gray-700"
                                    : "text-white"
                                } underline`}
                                href="#"
                              >
                                Software development
                              </a>
                              <a
                                className={`block px-4 py-2 text-2xl ${
                                  theme === "light"
                                    ? "text-gray-700"
                                    : "text-white"
                                } underline`}
                                href="#"
                              >
                                Web development
                              </a>
                            </div>
                            <div className="px-4 py-1 w-[350px]">
                              <a
                                className={`block px-4 py-2 text-2xl ${
                                  theme === "light"
                                    ? "text-gray-700"
                                    : "text-white"
                                } underline`}
                                href="#"
                              >
                                Mobile app development
                              </a>
                              <a
                                className={`block px-4 py-2 text-2xl ${
                                  theme === "light"
                                    ? "text-gray-700"
                                    : "text-white"
                                } underline`}
                                href="#"
                              >
                                IT services for startups
                              </a>
                            </div>
                          </div>
                          <div className="p-5 flex w-full border border-[#D2D2D5] border-t-0  ">
                            <h2
                              className={`px-4 pt-2 pb-1 text-2xl font-bold ${
                                theme === "light"
                                  ? "text-[#52002D]"
                                  : "text-[#FF977E]"
                              } w-[250px]`}
                            >
                              Industries
                            </h2>
                            <div className="px-4 py-1 w-[350px]">
                              <a
                                className={`block px-4 py-2 text-2xl ${
                                  theme === "light"
                                    ? "text-gray-700"
                                    : "text-white"
                                } underline`}
                                href="#"
                              >
                                Fintech
                              </a>
                              <a
                                className={`block px-4 py-2 text-2xl ${
                                  theme === "light"
                                    ? "text-gray-700"
                                    : "text-white"
                                } underline`}
                                href="#"
                              >
                                Healthtech
                              </a>
                              <a
                                className={`block px-4 py-2 text-2xl ${
                                  theme === "light"
                                    ? "text-gray-700"
                                    : "text-white"
                                } underline`}
                                href="#"
                              >
                                Edtech
                              </a>
                              <a
                                className={`block px-4 py-2 text-2xl ${
                                  theme === "light"
                                    ? "text-gray-700"
                                    : "text-white"
                                } underline`}
                                href="#"
                              >
                                Gamedev
                              </a>
                            </div>
                            <div className="px-4 py-1 w-[350px]">
                              <a
                                className={`block px-4 py-2 text-2xl ${
                                  theme === "light"
                                    ? "text-gray-700"
                                    : "text-white"
                                } underline`}
                                href="#"
                              >
                                Real estate
                              </a>
                              <a
                                className={`block px-4 py-2 text-2xl ${
                                  theme === "light"
                                    ? "text-gray-700"
                                    : "text-white"
                                } underline`}
                                href="#"
                              >
                                Ecommerce
                              </a>
                              <a
                                className={`block px-4 py-2 text-2xl ${
                                  theme === "light"
                                    ? "text-gray-700"
                                    : "text-white"
                                } underline`}
                                href="#"
                              >
                                Marketing/adtech
                              </a>
                            </div>
                          </div>
                          <div className="p-5  flex w-full border border-[#D2D2D5] border-t-0 border-b-0 ">
                            <h2
                              className={`px-4 pt-2 pb-1 text-2xl font-bold ${
                                theme === "light"
                                  ? "text-[#52002D]"
                                  : "text-[#FF977E]"
                              } w-[250px]`}
                            >
                              Expertise
                            </h2>
                            <div className="px-4 py-1 w-[350px]">
                              <a
                                className={`block px-4 py-2 text-2xl ${
                                  theme === "light"
                                    ? "text-gray-700"
                                    : "text-white"
                                } underline`}
                                href="#"
                              >
                                Cloud
                              </a>
                              <a
                                className={`block px-4 py-2 text-2xl ${
                                  theme === "light"
                                    ? "text-gray-700"
                                    : "text-white"
                                } underline`}
                                href="#"
                              >
                                AR/VR
                              </a>
                              <a
                                className={`block px-4 py-2 text-2xl ${
                                  theme === "light"
                                    ? "text-gray-700"
                                    : "text-white"
                                } underline`}
                                href="#"
                              >
                                Blockchain
                              </a>
                              <a
                                className={`block px-4 py-2 text-2xl ${
                                  theme === "light"
                                    ? "text-gray-700"
                                    : "text-white"
                                } underline`}
                                href="#"
                              >
                                Salesforce
                              </a>
                            </div>
                            <div className="px-4 py-1 w-[350px]">
                              <a
                                className={`block px-4 py-2 text-2xl ${
                                  theme === "light"
                                    ? "text-gray-700"
                                    : "text-white"
                                } underline`}
                                href="#"
                              >
                                Internet of things
                              </a>
                              <a
                                className={`block px-4 py-2 text-2xl ${
                                  theme === "light"
                                    ? "text-gray-700"
                                    : "text-white"
                                } underline`}
                                href="#"
                              >
                                AI
                              </a>
                              <a
                                className={`block px-4 py-2 text-2xl ${
                                  theme === "light"
                                    ? "text-gray-700"
                                    : "text-white"
                                } underline`}
                                href="#"
                              >
                                Big data
                              </a>
                              <a
                                className={`block px-4 py-2 text-2xl ${
                                  theme === "light"
                                    ? "text-gray-700"
                                    : "text-white"
                                } underline`}
                                href="#"
                              >
                                Cybersecurity
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </li>
                  <li>
                    <h1
                      className={`px-3 h-[80px] cursor-pointer flex items-center w-48 justify-center py-2  bg-[#FF6A47] hover:bg-[${
                        theme === "light" ? "#52002D" : "#FF977E"
                      }] hover:text-white transition text-[20px]`}
                    >
                      Contact us
                    </h1>
                  </li>
                </ul>
                <li className="relative group ">
                  <a
                    className="h-[80px] flex items-center "
                    href="#"
                    onClick={() => setIsInternetOpen(!isInternetOpen)}
                  >
                    <div className=" flex items-start">
                      <h2 className="text-[40px]">
                        <HiOutlineGlobeAlt />
                      </h2>
                      <h6 className=" text-[9px] text-[#FF6A47] blinking-icon">
                        <BsCircleFill />
                      </h6>
                    </div>
                  </a>
                  {isInternetOpen && (
                    <div className="absolute left-0 w-full mt-2 bg-white shadow-lg">
                      <a
                        className="block px-4 py-2 text-xl text-gray-700"
                        href="#"
                      >
                        Internet Submenu 1
                      </a>
                      <a
                        className="block px-4 py-2 text-xl text-gray-700"
                        href="#"
                      >
                        Internet Submenu 2
                      </a>
                    </div>
                  )}
                </li>
              </ul>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
