import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <section className="footer__contacts">
          <h2>Contact Us</h2>
          <p className="footer__address">
            132A Bridge Road Richmond VIC Australia.
          </p>
          <p className="footer__phone">
            Talk to us on 1300 132
          </p>
          <p className="footer__email">
            info@interior.com
          </p>
        </section>
        <section className="footer__info">
          <h2>Useful Information</h2>
          <div className="footer__links">
            <a href="./">Sales Terms</a>
            <a href="./">Architect Accounts</a>
            <a href="./">Customer Care</a>
            <a href="./">Delivery</a>
            <a href="./">Careers</a>
            <a href="./">Exchanges & Returns</a>
          </div>
        </section>
        <section className="footer__feedback">
          <h2>Let's stay in touch!</h2>
          <form action="submit">
            <label for="footer__input__email">
              Suscribe to know about our latest news, products and special offers just for suscribers.
            </label>
            <input id="footer__input__email" type="email" placeholder="your email address" />
            <div className="fab fa-telegram-plane"></div>
          </form>
        </section>
      </div>
      <div className="footer__other">
        <p>
        © Copyright - INTERIOR 2016. All Rights Reserved.
        </p>
        <div className="footer__social">
          <a className="fab fa-facebook" href="./"><span className="hidden">Facebook</span></a>
          <a className="fab fa-twitter" href="./"><span className="hidden">Twitter</span></a>
          <a className="fab fa-google-plus" href="./"><span className="hidden">Google+</span></a>
          <a className="fab fa-pinterest" href="./"><span className="hidden">Pinterest</span></a>
        </div>
        <p><a href="./">
          Terms & Conditions / Privacy policy & Cookies
        </a></p>
      </div>
    </footer>
  );
}