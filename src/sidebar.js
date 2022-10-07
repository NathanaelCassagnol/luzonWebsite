import React from 'react';
import { elastic as Menu } from 'react-burger-menu';

export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Home
            </a>

            <a className="menu-item" href="/laravel">
                Following
            </a>

            <a className="menu-item" href="/angular">
                Discover
            </a>

            <a className="menu-item" href="/react">
                Market
            </a>

            <a className="menu-item" href="/vue">
                Account
            </a>

            <a className="menu-item" href="/node">
                Log Out
            </a>
        </Menu>
    );
};