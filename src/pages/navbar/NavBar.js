import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { config } from "../../config/config";
import { LOCAL_STORAGE, SPORTS } from "../../config/constant";
import NavBarItem from "./NavBarItem";
import { UIActions } from "../../store/admin/UISlice";
import { AuthAction } from "../../store/admin/AuthSlice";
import { currentSport } from "../../store/admin/SportsSlice";

import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBaseballBatBall,
  faBasketball,
  faFutbol,
} from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  const [expand, setExpand] = useState(false);
  const [sportListExpand, setSportListExpand] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const { sportId, name: sportsName } = useSelector((state) => state.sport);

  const onSportChange = (e) => {
    e.preventDefault();
    dispatch(currentSport({ sportId: e.target.value, name: e.target.name }));
    setSportListExpand((prev) => !prev);
  };

  let currentLanguage = i18n.language;

  const activeNavBarMenu = useSelector((state) => state.ui.activeNavBarMenu);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userData = useSelector((state) => state.auth.userData);

  const clickHandler = (e, value) => {
    e.preventDefault();
    setExpand((prev) => !prev);
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

  const SportSelection = (
    <NavBarItem>
      <a
        className="nav-link dropdown-toggle d-none d-sm-inline-block"
        href="/#"
        data-toggle="dropdown"
        onMouseDown={(e) => {
          e.preventDefault();
          setSportListExpand((prev) => !prev);
        }}
      >
        <span className="mr-1">
          {+sportId === SPORTS.CRICKET.ID && (
            <FontAwesomeIcon icon={faBaseballBatBall} />
          )}
          {+sportId === SPORTS.FOOTBALL.ID && (
            <FontAwesomeIcon icon={faFutbol} />
          )}
          {+sportId === SPORTS.BASKETBALL.NAME && (
            <FontAwesomeIcon icon={faBaseballBatBall} />
          )}{" "}
        </span>
        <span className="text-dark pr-2">{t(sportsName, {ns: "glossary"})}</span>
      </a>
      <div
        className={`dropdown-menu dropdown-menu-right ${
          sportListExpand && "show"
        }`}
      >
        <button
          className={`btn btn-link dropdown-item  ${
            +sportId === SPORTS.CRICKET.ID && "active"
          }`}
          onClick={onSportChange}
          value={SPORTS.CRICKET.ID}
          name={SPORTS.CRICKET.NAME}
        >
          <FontAwesomeIcon icon={faBaseballBatBall} /> {t(SPORTS.CRICKET.NAME, {ns: "glossary"})}
        </button>
        <button
          className={`btn btn-link dropdown-item ${
            +sportId === SPORTS.FOOTBALL.ID && "active"
          }`}
          onClick={onSportChange}
          value={SPORTS.FOOTBALL.ID}
          name={SPORTS.FOOTBALL.NAME}
        >
          <FontAwesomeIcon icon={faFutbol} /> {t(SPORTS.FOOTBALL.NAME, { ns: "glossary"})}
        </button>
        <button
          className={`btn btn-link dropdown-item ${
            +sportId === SPORTS.BASKETBALL.ID && "active"
          }`}
          onClick={onSportChange}
          value={SPORTS.BASKETBALL.ID}
          name={SPORTS.BASKETBALL.NAME}
        >
          <FontAwesomeIcon icon={faBasketball} /> {t(SPORTS.BASKETBALL.NAME, { ns: "glossary"})}
        </button>
      </div>
    </NavBarItem>
  );

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
        onMouseDown={(e) => {
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
          activeNavBarMenu === "profile" && expand && "show"
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
        <a
          className="dropdown-item"
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/setting");
          }}
        >
          AppSetting
        </a>
      </div>
    </NavBarItem>
  );

  return (
    <nav className="navbar navbar-expand navbar-light bg-white">
      <a
        className="sidebar-toggle d-flex mr-2"
        href="/#"
        onClick={(e) => {
          e.preventDefault();
          dispatch(UIActions.changeToggleSideBar());
        }}
      >
        <i className="hamburger align-self-center"></i>
      </a>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav ml-auto">
          {SportSelection}
          {LanguageMenu}
          {ProfileMenu}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
