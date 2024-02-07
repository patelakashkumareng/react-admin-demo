import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom"
import { config } from "../../config/config";
import { LOCAL_STORAGE } from "../../config/constant"
import NavBarItem from "./NavBarItem";
import { UIActions } from "../../store/admin/UISlice";
import { AuthAction } from "../../store/admin/AuthSlice"
const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activeNavBarMenu = useSelector((state) => state.ui.activeNavBarMenu);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userData = useSelector((state) => state.auth.userData);

  const clickHandler = (e, value) => {
    e.preventDefault();
    dispatch(UIActions.changeActiveNavBarMenu(value));
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(AuthAction.logout())
    localStorage.removeItem(LOCAL_STORAGE.AUTH_TOKEN)
    localStorage.removeItem(LOCAL_STORAGE.USER_DATA)
    setTimeout(() => {
      navigate("/login")
    }, 1000)
  }

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
        <a className="dropdown-item" href="/#" onClick={(e) => {logoutHandler(e)}}>
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
