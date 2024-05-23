import logo from "../assets/images/CV-Logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
// import { navigate } from 'react-router-dom';

const Header = () => {
  // const location = useLocation();
  // const fixedPaths = ["/Facility"];
  // const isFixed = fixedPaths.includes(location.pathname);
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const [openMenu, setOpenMenu] = useState(null);
  const [openProfile, setOpenProfile] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const megamenu = document.getElementById("menuopen");
  const openMegaMenu = (menuid: any) => {
    setOpenMenu(menuid);
    megamenu?.classList.add("openmegamenu");
    setOpenProfile(false);

    // document.body.style.overflow = 'hidden';
  };
  const closeMegaMenu = () => {
    setOpenMenu(null);
    megamenu?.classList.remove("openmegamenu");
    // document.body.style.overflow = 'unset';
  };

  const openprofile = () => {
    setOpenProfile(!openProfile);
  };

  const openmobilemenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const openMobMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  let prevScrollPos = window.pageYOffset;

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setIsHeaderFixed(currentScrollPos > 100);

    setIsScrollingDown(prevScrollPos < currentScrollPos);
    prevScrollPos = currentScrollPos;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop === 0) {
      document.body.classList.remove("scrolled");
    } else {
      document.body.classList.add("scrolled");
    }
  };

  // const handleMouseMove = (event:any) => {
  //     const mouseY = event.clientY;
  //     setIsHeaderFixed(mouseY <= 100);
  // };

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("scroll", handleScroll);
    // window.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("scroll", handleScroll);
      // window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mobileMenu]);

  return (
    <div
      className={`w-[100%] bg-white z-20 shadow-sm fixed top-0 transition-all duration-500 scroll-up  ${
        isScrollingDown ? "scroll-down" : ""
      }`}
    >
      <div
        id="menuopen"
        className={`w-[100%] h-[100%] fixed top-[80px] z-10 left-0 bg-borderclr hidden`}
      ></div>
      <header onMouseLeave={closeMegaMenu}>
        <div className="lg:max-w-[1800px] m-auto px-[24px]">
          <div className="bg-white py-[15px] flex items-center justify-between w-[100%]">
            <div className="flex items-center justify-between w-[100%] lg:w-auto">
              <div>
                <img
                  src={logo}
                  alt="cv-logo"
                  className="w-[105px] lg:w-[148px] cursor-pointer"
                  onClick={() => {
                    navigate("/");
                  }}
                />
              </div>
              <div className="flex items-center gap-[16px] lg:hidden">
                <button className="btn bg-pc text-white rounded-full font-anchor font-medium py-[7px] px-[27px] ">
                  Sign up
                </button>
                <div>
                  {mobileMenu ? (
                    <IoClose
                      className="text-pc"
                      size={"30px"}
                      onClick={openMobMenu}
                    />
                  ) : (
                    <GiHamburgerMenu
                      className="text-pc"
                      size={"30px"}
                      onClick={openMobMenu}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <nav className="flex items-center gap-[30px]">
                <ul className="flex items-center gap-[20px]">
                  <li className="block">
                    <a
                      onMouseEnter={() => openMegaMenu("menu1")}
                      className={`block text-anchortext capitalize font-medium p-[10px] hover:bg-[#e9ecf0] hover:text-pc hover:font-semibold hover:rounded-[8px] relative ${
                        openMenu === "menu1"
                          ? "bg-[#e9ecf0] text-pc font-semibold"
                          : ""
                      }`}
                      href="/"
                    >
                      Procedures
                    </a>
                    {openMenu === "menu1" && (
                      <div
                        className="mega-menu bg-white shadow-boxshadow h-auto px-[20px] py-[10px] absolute z-20 top-[80px] w-fit border-t-[5px] border-hoverclr rounded-b-[10px]"
                        onMouseLeave={closeMegaMenu}
                      >
                        <ul className="pt-[20px] flex items-start flex-wrap gap-[30px] ">
                          <div>
                            <li>
                              <a href="/about">Procedure 1</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 2</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 3</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 4</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 5</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 6</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 7</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 8</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 9</a>
                            </li>
                          </div>
                          <div>
                            <li>
                              <a href="/about">Procedure 1</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 2</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 3</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 4</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 5</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 6</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 7</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 8</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 9</a>
                            </li>
                          </div>
                          <div>
                            <li>
                              <a href="/about">Procedure 1</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 2</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 3</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 4</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 5</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 6</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 7</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 8</a>
                            </li>
                            <li>
                              <a href="/about">Procedure 9</a>
                            </li>
                          </div>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li
                    className="block"
                    onMouseEnter={() => openMegaMenu("menu2")}
                  >
                    <a
                      className={`block text-anchortext capitalize font-medium p-[10px] hover:bg-[#e9ecf0] hover:text-pc hover:font-semibold hover:rounded-[8px] relative ${
                        openMenu === "menu2"
                          ? "bg-[#e9ecf0] text-pc font-semibold"
                          : ""
                      }`}
                      href="/about"
                    >
                      About Us
                    </a>
                    {openMenu === "menu2" && (
                      <div
                        className="mega-menu bg-white shadow-boxshadow h-auto px-[20px] py-[10px] absolute z-20 top-[80px] w-fit border-t-[5px] border-hoverclr rounded-b-[10px]"
                        onMouseLeave={closeMegaMenu}
                      >
                        <ul className="pt-[20px]">
                          <li>
                            <a href="/about">Procedure 1</a>
                          </li>
                          <li>
                            <a href="/about">Procedure 2</a>
                          </li>
                          <li>
                            <a href="/about">Procedure 3</a>
                          </li>
                          <li>
                            <a href="/about">Procedure 4</a>
                          </li>
                          <li>
                            <a href="/about">Procedure 5</a>
                          </li>
                          <li>
                            <a href="/about">Procedure 6</a>
                          </li>
                          <li>
                            <a href="/about">Procedure 7</a>
                          </li>
                          <li>
                            <a href="/about">Procedure 8</a>
                          </li>
                          <li>
                            <a href="/about">Procedure 9</a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li className="block">
                    <a
                      className="block text-anchortext capitalize font-medium p-[10px] hover:bg-[#e9ecf0] hover:text-pc hover:font-semibold hover:rounded-[8px]"
                      href="/services"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li className="block">
                    <a
                      className="block text-anchortext capitalize font-medium p-[10px] hover:bg-[#e9ecf0] hover:text-pc hover:font-semibold hover:rounded-[8px]"
                      href="/contact"
                    >
                      Help
                    </a>
                  </li>
                </ul>
                <div>
                  <button
                    className="btn border border-pc bg-pc text-white rounded-full font-anchor font-medium lg:py-[12px] px-[27px] hover:bg-white hover:text-pc"
                    onClick={openprofile}
                  >
                    Sign up
                  </button>
                  {openProfile && (
                    <div className="bg-white shadow-boxshadow h-auto absolute right-[30px] z-20 top-[80px] w-fit border-t-[5px] border-hoverclr rounded-b-[10px] pb-[20px]">
                      <div className="px-[20px] py-[10px] border-b border-b-hoverclr">
                        <h5 className=" font-semibold text-anchortext">
                          Account
                        </h5>
                        <div className="flex items-center gap-[10px] py-[10px]">
                          <div className="bg-hoverclr rounded-full p-[8px] text-white font-medium text-anchortext">
                            UR
                          </div>
                          <div className=" text-smalltext">
                            <p>Upasna Ratani</p>
                            <a href="mailto:upasna.ratani@gmail.com">
                              upasna.ratani@gmail.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-b border-b-hoverclr pb-[20px]">
                        <ul className="pt-[20px] px-[20px] flex flex-col gap-[10px]">
                          <li>
                            <a href="/about">Profile</a>
                          </li>
                          <li>
                            <a href="/about">Notification</a>
                          </li>
                          <li>
                            <a href="/about">Personal settings</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="pt-[20px] px-[20px]">
                          <li>
                            <a href="/about">Logout</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {mobileMenu && (
        <div className="h-screen overflow-y-scroll bg-white z-20 p-[24px] relative">
          <ul className="flex flex-col items-start gap-[30px]">
            <li className="flex items-center justify-between w-[100%]">
              <a className="text-anchortext capitalize" href="/">
                Procedures
              </a>{" "}
              <MdKeyboardArrowRight
                className="text-pc text-[26px]"
                onClick={openmobilemenu}
              />
            </li>
            {openMobileMenu && (
              <div className="mega-menu bg-white h-auto px-[20px] z-20">
                <ul className="">
                  <li>
                    <a href="/about">Procedure 1</a>
                  </li>
                  <li>
                    <a href="/about">Procedure 2</a>
                  </li>
                  <li>
                    <a href="/about">Procedure 3</a>
                  </li>
                  <li>
                    <a href="/about">Procedure 4</a>
                  </li>
                  <li>
                    <a href="/about">Procedure 5</a>
                  </li>
                  <li>
                    <a href="/about">Procedure 6</a>
                  </li>
                  <li>
                    <a href="/about">Procedure 7</a>
                  </li>
                  <li>
                    <a href="/about">Procedure 8</a>
                  </li>
                  <li>
                    <a href="/about">Procedure 9</a>
                  </li>
                  <li>
                    <a href="/about">Procedure 1</a>
                  </li>
                  <li>
                    <a href="/about">Procedure 2</a>
                  </li>
                  <li>
                    <a href="/about">Procedure 3</a>
                  </li>
                </ul>
              </div>
            )}
            <li>
              <a className="text-anchortext capitalize" href="/about">
                About Us
              </a>
            </li>
            <li>
              <a className="text-anchortext capitalize" href="/services">
                Contact Us
              </a>
            </li>
            <li>
              <a className="text-anchortext capitalize" href="/contact">
                Help
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
