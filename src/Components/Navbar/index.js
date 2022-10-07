import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink exact activeStyle to="/">
                        Home
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/account" activeStyle>
                        Account
                    </NavLink>
                    <NavLink to="/discover" activeStyle>
                        Discover
                    </NavLink>
                    <NavLink to="/following" activeStyle>
                        Following
                    </NavLink>
                    <NavLink to="/login" activeStyle>
                        Login
                    </NavLink>
                    <NavLink to="/market" activeStyle>
                        Marketplace
                    </NavLink>
                    <NavLink to="/creatorpage" activeStyle>
                        Creator Page
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;