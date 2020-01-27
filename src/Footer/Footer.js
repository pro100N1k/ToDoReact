import React from "react";
import './Footer.scss';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <footer className="footer">
                <div className="footer-info">
                    <img src="http://www.gam.com.br/index/wp-content/uploads/2017/10/default-logo.png" alt="Logo" className="footer__logo"/>
                    <div className="footer__text"></div>
                </div>
                <div className="footer-block block--small">
                    <div className="footer__title">Info</div>
                    <div className="footer__contact contact">
                        <div className="footer__subtitle">Contact us:</div>
                        <ul className="contact-list">
                            <li className="contact-item">
                                <div className="contact__img-wrapper">

                                </div>
                                <div className="contact-info">
                                    <div className="contact__title">Title</div>
                                    <div className="contact__value">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quos?</div>
                                </div>
                                <a href="">123</a>
                            </li>
                            <li className="contact-item">
                                <div className="contact__img-wrapper">

                                </div>
                                <div className="contact-info">
                                    <div className="contact__title">1</div>
                                    <div className="contact__value">2</div>
                                </div>
                                <a href="">123</a>
                            </li>
                            <li className="contact-item">
                                <div className="contact__img-wrapper">

                                </div>
                                <div className="contact-info">
                                    <div className="contact__title">1</div>
                                    <div className="contact__value">2</div>
                                </div>
                                <a href="">123</a>
                            </li>
                        </ul>
                    </div>
                    <div className="social">
                        <div className="footer__title">Social links</div>
                        <ul>
                            <li>
                                <a href="https://www.google.com.ua">
                                    <span></span>
                                    <strong className="social__value">1</strong>
                                    <span></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.google.com.ua">
                                    <span></span>
                                    <strong className="social__value">2</strong>
                                    <span></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.google.com.ua">
                                    <span></span>
                                    <strong className="social__value">3</strong>
                                    <span></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.google.com.ua">
                                    <span></span>
                                    <strong className="social__value">4</strong>
                                    <span></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.google.com.ua">
                                    <span></span>
                                    <strong className="social__value">5</strong>
                                    <span></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.google.com.ua">
                                    <span></span>
                                    <strong className="social__value">6</strong>
                                    <span></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-block block--large">
                    <div className="footer__title">Navigation</div>
                    
                    <div className="footer-nav">
                        <div className="footer__subtitle">Links</div>

                        <div className="footer-column">
                            <ul>
                                <li><a href="https://www.google.com.ua">Lorem ipsum.</a></li>
                                <li><a href="https://www.google.com.ua">Lorem ipsum dolor.</a></li>
                                <li><a href="https://www.google.com.ua">Lorem.</a></li>
                                <li><a href="https://www.google.com.ua">Lorem ipsum dolor sit.</a></li>
                                <li><a href="https://www.google.com.ua">Lorem ipsum.</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <ul>
                                <li><a href="https://www.google.com.ua">Lorem ipsum.</a></li>
                                <li><a href="https://www.google.com.ua">Lorem ipsum dolor.</a></li>
                                <li><a href="https://www.google.com.ua">Lorem.</a></li>
                                <li><a href="https://www.google.com.ua">Lorem ipsum dolor sit.</a></li>
                                <li><a href="https://www.google.com.ua">Lorem ipsum.</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <ul>
                                <li><a href="https://www.google.com.ua">Lorem ipsum.</a></li>
                                <li><a href="https://www.google.com.ua">Lorem ipsum dolor.</a></li>
                                <li><a href="https://www.google.com.ua">Lorem.</a></li>
                                <li><a href="https://www.google.com.ua">Lorem ipsum dolor sit.</a></li>
                                <li><a href="https://www.google.com.ua">Lorem ipsum.</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <ul>
                                <li><a href="https://www.google.com.ua">Lorem ipsum.</a></li>
                                <li><a href="https://www.google.com.ua">Lorem ipsum dolor.</a></li>
                                <li><a href="https://www.google.com.ua">Lorem.</a></li>
                                <li><a href="https://www.google.com.ua">Lorem ipsum dolor sit.</a></li>
                                <li><a href="https://www.google.com.ua">Lorem ipsum.</a></li>
                            </ul>
                        </div>
                    </div>


                    <form className="form" action="">
                        <div className="form-inputs">
                            <div className="input-wrapper">
                                <input type="text" placeholder="Enter your name" />
                                <span></span>
                            </div>
                            <div className="input-wrapper" >
                                <input type="tel" placeholder="Enter you phone"/>
                                <span></span>
                            </div>
                            <div className="input-wrapper" >
                                <input type="mail" placeholder="Enter your e-mail"/>
                                <span></span>
                            </div>


                        </div>
                        <div className="form-textarea">
                            <div className="input-wrapper">
                                <textarea name="" id="" placeholder="Enter message..." cols="30" rows="10"></textarea>
                            </div>

                            <div className="input-wrapper">
                                <input type="submit" onClick={this.handleOnSubmit} value="Send"/>
                            </div>
                        </div>

                    </form>
                </div>
                <div className="footer-copyright">
                    © 2020
                </div>

            </footer>
        )
    }
}

export default Footer;