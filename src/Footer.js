import React from 'react';
import './Footer.css';

import f1 from './facebook.svg';
import l1 from './linkedin.svg';
import i1 from './instagram.svg';
import g1 from './gmail.svg';
const Footer = () => {
    return (
     
<div class="footer">
  <div class="contain">
  <div class="col">
    <h1>Company</h1>
    <ul>
      <li>About</li>
      <li>Mission</li>
      <li>Services</li>
      <li>Social</li>
      <li>Get in touch</li>
    </ul>
  </div>
  <div class="col">
    <h1>Products</h1>
    <ul>
      <li>About</li>
      <li>Mission</li>
      <li>Services</li>
      <li>Social</li>
      <li>Get in touch</li>
    </ul>
  </div>
  <div class="col">
    <h1>Accounts</h1>
    <ul>
      <li>About</li>
      <li>Mission</li>
      <li>Services</li>
      <li>Social</li>
      <li>Get in touch</li>
    </ul>
  </div>
  <div class="col">
    <h1>Resources</h1>
    <ul>
      <li>Webmail</li>
      <li>Redeem code</li>
      <li>WHOIS lookup</li>
      <li>Site map</li>
      <li>Web templates</li>
      <li>Email templates</li>
    </ul>
  </div>
  <div class="col">
    <h1>Support</h1>
    <ul>
      <li>Contact us</li>
      <li>Web chat</li>
      <li>Open ticket</li>
    </ul>
  </div>
  <div class="col social">
    <h1>Social</h1>
    <ul>
      <li><img src={f1} alt="images" width="32" style={{width:'32px'}}/></li>
      <li><img src={g1} alt="images" width="32" style={{width:'32px'}}/></li>
      <li><img src={l1} alt="images" width="32" style={{width:'32px'}}/></li>
      <li><img src={i1} alt="images" width="32" style={{width:'32px'}}/></li>
    </ul>
  </div>
<div class="clearfix"></div>
</div>
</div>

    )
}
export default Footer;
