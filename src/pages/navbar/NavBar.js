import { useDispatch, useSelector } from "react-redux";
import { config } from "../../config/config";
import NavBarItem from "./NavBarItem";
import { UIActions } from "../../store/admin/UISlice";
const NavBar = () => {
  const dispatch = useDispatch();
  const activeNavBarMenu = useSelector((state) => state.ui.activeNavBarMenu);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userData = useSelector((state) => state.auth.userData);

  const clickHandler = (e, value) => {
    e.preventDefault();
    dispatch(UIActions.changeActiveNavBarMenu(value));
  };

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
        <span className="text-dark">{userData.FirstName + " " + userData.LastName}</span>
      </a>
      <div
        className={`dropdown-menu dropdown-menu-right ${
          activeNavBarMenu === "profile" && "show"
        }`}
      >
        <a className="dropdown-item" href="/#">
          Sign out
        </a>
      </div>
    </NavBarItem>
  );

  return (
    <nav className="navbar navbar-expand navbar-light bg-white">
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav ml-auto">{ProfileMenu}</ul>
      </div>
    </nav>
  );
};

export default NavBar;
