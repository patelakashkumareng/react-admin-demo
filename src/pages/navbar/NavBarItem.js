const NavBarItem = (props) => {
    return (
        <li className="nav-item dropdown">
            {props.children}
          </li> 
    )
}

export default NavBarItem