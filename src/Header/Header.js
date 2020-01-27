import React from "react";
import './Header.scss';

class Header extends React.Component{
    render() {
        return (
            <header className="header">
                <img src="http://www.gam.com.br/index/wp-content/uploads/2017/10/default-logo.png" alt="Logo" className="header__logo"/>
                <div className="header__logo"></div>
                <nav>
                    <ul>
                        <li><a href="https://www.google.com.ua">Link 1</a></li>
                        <li><a href="https://www.google.com.ua">Link 2</a></li>
                        <li><a href="https://www.google.com.ua">Link 3</a></li>
                        <li><a href="https://www.google.com.ua">Link 4</a></li>
                        <li><a href="https://www.google.com.ua">Link 5</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;