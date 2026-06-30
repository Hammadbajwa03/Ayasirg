"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import "./custom_navbar.css";
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import Dropdown from "react-bootstrap/Dropdown";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { UserContext } from "@/app/userContext";
import Myform from "../Myform/Myform";
import dynamic from "next/dynamic";
import Image from "next/image";

const TranslateWrapper = dynamic(() => import("../translateWrapper/TranslateWrapper"), { ssr: false });

/** API may return a string URL or `{ original, web, webp }` (Spatie-style). */
function resolveProfileAvatarUrl(profileImage) {
  if (!profileImage) return null;
  if (typeof profileImage === "string" && profileImage.trim()) {
    return profileImage.trim();
  }
  if (typeof profileImage === "object") {
    const u =
      profileImage.webp ||
      profileImage.web ||
      profileImage.original;
    return typeof u === "string" && u.trim() ? u.trim() : null;
  }
  return null;
}

export default function CustomNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { userInfo, setUserInfo, loadingUser, userDetails } = useContext(UserContext);

  const [selectedType, setSelectedType] = useState(null);
  const [userDetailss, showuserDetailss] = useState(false);
  const [myNavbar, setMyNavbar] = useState(false);
  const [isTranslateLoaded, setTranslateLoaded] = useState(false);
  /** Desktop “More” menu — hover + controlled for outside click */
  const [moreNavOpen, setMoreNavOpen] = useState(false);
  const moreNavLeaveTimer = useRef(null);

  const userToken = userInfo?.api_token;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // mobile threshold
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (type) => {
    if (selectedType === type) {
      setSelectedType(null);
      setTimeout(() => setSelectedType(type), 50);
    } else {
      setSelectedType(type);
    }
  };

  const handleDropdownItemClick = (callback) => {
    showuserDetailss(false);
    if (callback && typeof callback === "function") callback();
  };

  useEffect(() => {
    return () => {
      if (moreNavLeaveTimer.current) clearTimeout(moreNavLeaveTimer.current);
    };
  }, []);

  useEffect(() => {
    setMoreNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (myNavbar) setMoreNavOpen(false);
  }, [myNavbar]);

  const clearMoreNavLeaveTimer = () => {
    if (moreNavLeaveTimer.current) {
      clearTimeout(moreNavLeaveTimer.current);
      moreNavLeaveTimer.current = null;
    }
  };

  const openMoreNav = () => {
    clearMoreNavLeaveTimer();
    setMoreNavOpen(true);
  };

  const scheduleCloseMoreNav = () => {
    clearMoreNavLeaveTimer();
    moreNavLeaveTimer.current = setTimeout(() => {
      setMoreNavOpen(false);
      moreNavLeaveTimer.current = null;
    }, 240);
  };

  const handleNavbar = () => setMyNavbar(!myNavbar);

  const gotoLogin = () => {
    setMyNavbar(false);
    router.push("/login");
  };
  const gotoCreateProfile = () => {
    setMyNavbar(false);
    router.push("/create-profile");
  };
  const gotoContactUs = () => router.push("/contact-us");
  const gotoProfile = () => router.push("/user-profile");
  const gotoEcenters = () => router.push("/register-yourself");
  const gotoEcentersRecords = () => router.push("/ecenter-record");

  const handleLogout = () => {
    setUserInfo(null);
    localStorage.clear();
    showuserDetailss(false);
    router.push("/login");
    setMyNavbar(false)
  };


  useEffect(() => {
    const observer = new MutationObserver(() => {
      const translateCombo = document.querySelector(".goog-te-combo");
      if (translateCombo) {
        setTranslateLoaded(true);
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);


  if (loadingUser) return null;

  const handleClickPage = (type) => {
    router.push(`/e-center?type=${type}`);
  };

  const DEFAULT_PROFILE_AVATAR =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <defs>
                <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#ffe5e5"/>
                    <stop offset="100%" stop-color="#fff4f4"/>
                </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="100" fill="url(#bg)"/>
            <circle cx="100" cy="80" r="34" fill="#B50000"/>
            <path d="M40,178 C40,138 70,120 100,120 C130,120 160,138 160,178 Z" fill="#B50000"/>
        </svg>`
    );

  const profileAvatarSrc =
    resolveProfileAvatarUrl(userInfo?.profile_image) || DEFAULT_PROFILE_AVATAR;

  const moreMenuActive = ["/blogs", "/faq", "/contact-us"].includes(pathname);

  return (
    <section className="navbar notranslate">
      <div className="container">
        <nav className="nav">
          <div className="logo_div" onClick={() => { setMyNavbar(false) }}>
            <Link href={'/'}><Image src="/assets/ayasirglogo.png" width={200} height={200} alt="Aya Sir G! logo — go to homepage" className="logo" /></Link>
          </div>

          <div className="nav_items d-flex align-items-center">
            <ul className={`list-unstyled list ${myNavbar ? "active" : ""}`}>
              <li onClick={() => { setMyNavbar(false); handleDropdownItemClick(); }}><Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link></li>
              <li onClick={() => { setMyNavbar(false); handleDropdownItemClick(); }}><Link href="/about-us" className={pathname === "/about-us" ? "active" : ""}>About Us</Link></li>
              <li onClick={() => { setMyNavbar(false); handleDropdownItemClick(); }}><Link href="/services" className={pathname === "/services" ? "active" : ""}>Services</Link></li>
              {!["handyman", "e-center", "provider"].includes(userDetails?.user_type) && (
                <li onClick={() => { setMyNavbar(false); handleDropdownItemClick(); }}><Link href="/register-yourself" className={pathname === "/register-yourself" ? "active" : ""}>How to Register</Link></li>
              )}
              {/* Mobile: flat links (below md) */}
              <li className="d-md-none" onClick={() => { setMyNavbar(false); handleDropdownItemClick(); }}><Link href="/blogs" className={pathname === "/blogs" ? "active" : ""}>Blogs</Link></li>
              <li className="d-md-none" onClick={() => { setMyNavbar(false); handleDropdownItemClick(); }}><Link href="/faq" className={pathname === "/faq" ? "active" : ""}>FAQ</Link></li>
              {
                userToken ? "" : (
                  <li className="d-md-none" onClick={() => { setMyNavbar(false); handleDropdownItemClick(); }}><Link href="/contact-us" className={pathname === "/contact-us" ? "active" : ""}>Contact Us</Link></li>
                )
              }
              {/* Desktop (md+): Blogs, FAQ, Contact in “More” — hover + theme */}
              <li
                className={`d-none d-md-block nav_more_li ${moreNavOpen ? "nav_more_open" : ""} ${moreMenuActive ? "nav_more_has_active" : ""}`}
                onClick={(e) => e.stopPropagation()}
              >
                <Dropdown
                  align="end"
                  show={moreNavOpen}
                  onToggle={setMoreNavOpen}
                  onMouseEnter={openMoreNav}
                  onMouseLeave={scheduleCloseMoreNav}
                >
                  <Dropdown.Toggle
                    variant="link"
                    id="nav-more-desktop"
                    className={`nav_more_toggle text-decoration-none ${moreMenuActive ? "active" : ""}`}
                    aria-expanded={moreNavOpen}
                  >
                    <span className="nav_more_toggle_label">More</span>
                    <IoIosArrowDown className="nav_more_caret" aria-hidden />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="nav_more_menu">
                    {/* <div className="nav_more_menu_header">Explore</div> */}
                    <Dropdown.Item
                      as={Link}
                      href="/blogs"
                      active={pathname === "/blogs"}
                      className="nav_more_item"
                      onClick={() => {
                        setMoreNavOpen(false);
                        setMyNavbar(false);
                        handleDropdownItemClick();
                      }}
                    >
                      Blogs
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      href="/faq"
                      active={pathname === "/faq"}
                      className="nav_more_item"
                      onClick={() => {
                        setMoreNavOpen(false);
                        setMyNavbar(false);
                        handleDropdownItemClick();
                      }}
                    >
                      FAQ
                    </Dropdown.Item>
                    {!userToken && (
                      <Dropdown.Item
                        as={Link}
                        href="/contact-us"
                        active={pathname === "/contact-us"}
                        className="nav_more_item"
                        onClick={() => {
                          setMoreNavOpen(false);
                          setMyNavbar(false);
                          handleDropdownItemClick();
                        }}
                      >
                        Contact Us
                      </Dropdown.Item>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="d-block d-md-none" onClick={() => setMyNavbar(false)}>
                {userToken && (
                  <Link href="/user-profile" className="d-flex align-items-center">
                    <Image
                      width={100} height={100}
                      className="icon_person_pic"
                      src={profileAvatarSrc}
                      alt={`${userDetails?.first_name || "Account"} profile photo`}
                      style={{ width: "32px", height: "32px", borderRadius: "50%", marginRight: "8px" }}
                    />
                    <span>{userDetails?.first_name}</span>
                  </Link>
                )}
              </li>

              <li className="d-block d-md-none">
                {userToken ? (
                  <p onClick={() => handleDropdownItemClick(handleLogout)}><Link href={'/login'}>Logout</Link></p>
                ) : (
                  <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                    <Link href="/login" className="text-decoration-none" onClick={() => setMyNavbar(false)}>
                      Login
                    </Link>
                    <Link href="/create-profile" className="text-decoration-none" onClick={() => setMyNavbar(false)}>
                      Create Your Profile
                    </Link>
                  </div>
                )}
              </li>

            </ul>

            <TranslateWrapper onClick={() => { setMyNavbar(false); handleDropdownItemClick() }} />
            {/* <div style={{ border: "1px solid gray" }}>
              <div id="google_translate_element"></div> 
            </div> */}
            {/* <GlobalTranslate /> */}

            <Link
              onClick={() => {
                setMyNavbar(false);
                handleDropdownItemClick();
              }}
              className="me-2"
              href={userToken ? "/user-wishlist" : "/login"}
            >
              <IoIosHeartEmpty className="icon_hearth ml_2" />
            </Link>

            <div
              className="info_div"
              onMouseEnter={() => showuserDetailss(true)}
              onMouseLeave={() => showuserDetailss(false)}
            >
              <div className="head_section d-flex align-items-center">


                {userInfo && (
                  <img onClick={(e) => {
                    if (isMobile) {
                      e.stopPropagation();
                      showuserDetailss(!userDetailss);
                      setMyNavbar(false)
                    }
                  }}

                    src={profileAvatarSrc}
                    className="icon_person_pic"
                    alt={`${userDetails?.first_name || "Account"} profile photo`}
                  />
                )}

                <div className="name_div">
                  {userToken ? (
                    <p className="ms-2">{userDetails?.first_name}</p>
                  ) : (
                    // <p onClick={gotoLogin}>Login</p>
                    <div className="d-flex gap-2">
                      <button className="btn btn_primary_btn" onClick={gotoLogin}>Login</button>
                      <button className="btn btn_primary_btn text-capitalize" onClick={gotoCreateProfile}>Create Your Profile</button>
                    </div>
                  )}
                </div>

                <div className="bars" onClick={handleNavbar}>
                  <FaBars onClick={() => {
                    setMyNavbar(false);
                    handleDropdownItemClick();
                  }} className="icon_bars" />
                </div>
              </div>

              {userToken && (
                <ul className={`user_details ${userDetailss ? "show_user_details" : ""}`}>
                  <li onClick={() => handleDropdownItemClick(gotoProfile)}>Profile</li>
                  {userDetails?.user_type === "e-center" ? (
                    <li onClick={() => handleDropdownItemClick(gotoEcentersRecords)}>
                      E-center Records
                    </li>
                  ) : (
                    !["handyman", "e-center", "provider"].includes(userDetails?.user_type) && (
                      <li onClick={() => handleDropdownItemClick(gotoEcenters)}>
                        E-centers
                      </li>
                    )
                  )}
                  {userDetails?.user_type === "handyman" && (
                    <li onClick={() => handleDropdownItemClick(() => handleClick("handyman"))}>
                      Individuals
                    </li>
                  )}
                  {userDetails?.user_type === "provider" && (
                    <li onClick={() => handleDropdownItemClick(() => handleClick("provider"))}>
                      Companies
                    </li>
                  )}
                  {userDetails?.user_type === "e-center" && (
                    <>
                      <li onClick={() => handleDropdownItemClick(() => handleClickPage("handyman"))}>
                        Individuals
                      </li>
                      <li onClick={() => handleDropdownItemClick(() => handleClickPage("provider"))}>
                        Companies
                      </li>
                    </>
                  )}
                  <li onClick={() => handleDropdownItemClick(handleLogout)}>Logout</li>
                </ul>
              )}
            </div>

            {
              userToken ? <button className="btn btn_primary_btn ms-3" onClick={gotoContactUs}>Contact us</button> : ""
            }

          </div>
        </nav>
        {selectedType && <Myform openedFrom={selectedType} setSelectedType={setSelectedType} />}
      </div>
    </section>
  );
}
