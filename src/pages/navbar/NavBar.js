import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { config } from "../../config/config";
import { LOCAL_STORAGE } from "../../config/constant";
import NavBarItem from "./NavBarItem";
import { UIActions } from "../../store/admin/UISlice";
import { AuthAction } from "../../store/admin/AuthSlice";

import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  let currentLanguage = i18n.language;

  const activeNavBarMenu = useSelector((state) => state.ui.activeNavBarMenu);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userData = useSelector((state) => state.auth.userData);

  const clickHandler = (e, value) => {
    e.preventDefault();
    dispatch(UIActions.changeActiveNavBarMenu(value));
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    toast.success(t("logout-success"), config.TOAST_UI);
    dispatch(AuthAction.logout());
    localStorage.removeItem(LOCAL_STORAGE.AUTH_TOKEN);
    localStorage.removeItem(LOCAL_STORAGE.USER_DATA);
    setTimeout(() => {
      navigate("/login");
    }, 0);
  };

  const languageChangeHandler = (e, value) => {
    e.preventDefault();
    dispatch(UIActions.changeActiveNavBarMenu(""));
    i18n.changeLanguage(value);
  };

  const LanguageMenu = (
    <NavBarItem>
      <a
        className="nav-flag dropdown-toggle"
        href="/#"
        id="languageDropdown"
        data-toggle="dropdown"
        onClick={(e) => {
          clickHandler(e, "language");
        }}
      >
        <img src={`${config.APP_BASE_URL}/img/flags/us.png`} alt="English" />
      </a>
      <div
        className={`dropdown-menu dropdown-menu-right ${
          activeNavBarMenu === "language" && "show"
        }`}
      >
        <a
          className={`dropdown-item ${currentLanguage === "en" && "active"}`}
          href="/#"
          onClick={(e) => {
            languageChangeHandler(e, "en");
          }}
        >
          <img
            src={`${config.APP_BASE_URL}/img/flags/us.png`}
            alt="English"
            width="20"
            className="align-middle mr-1"
          />
          <span className="align-middle">English</span>
        </a>
        <a
          className={`dropdown-item ${currentLanguage === "hn" && "active"}`}
          href="/#"
          onClick={(e) => {
            languageChangeHandler(e, "hn");
          }}
        >
          <img
            src={`${config.APP_BASE_URL}/img/flags/in.png`}
            alt="Spanish"
            width="20"
            className="align-middle mr-1"
          />
          <span className="align-middle">Hindi</span>
        </a>
      </div>
    </NavBarItem>
  );

  const ProfileMenu = isLoggedIn && (
    <NavBarItem>
      <a
        className="nav-link dropdown-toggle d-none d-sm-inline-block"
        href="/#"
        data-toggle="dropdown"
        onClick={(e) => {
          clickHandler(e, "profile");
        }}
      >
        <img
          src={`${config.APP_BASE_URL}/img/avatars/avatar.jpg`}
          className="avatar img-fluid rounded-circle mr-1"
          alt={userData.FirstName + " " + userData.LastName}
        />{" "}
        <span className="text-dark">
          {userData.FirstName + " " + userData.LastName}
        </span>
      </a>
      <div
        className={`dropdown-menu dropdown-menu-right ${
          activeNavBarMenu === "profile" && "show"
        }`}
      >
        <a
          className="dropdown-item"
          href="/#"
          onClick={(e) => {
            logoutHandler(e);
          }}
        >
          Sign out
        </a>
      </div>
    </NavBarItem>
  );

  return (
    <nav className="navbar navbar-expand navbar-light bg-white">
      <a className="sidebar-toggle d-flex mr-2" href="/#" onClick={(e) => { e.preventDefault(); dispatch(UIActions.changeToggleSideBar());}}>
        <i className="hamburger align-self-center"></i>
      </a>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav ml-auto">
          {LanguageMenu}
          {ProfileMenu}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
