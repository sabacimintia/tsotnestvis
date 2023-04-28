import React from 'react';
function Footer() {
  return (
    <footer>
        
      <div className="footer-left">
        <h3>FILES</h3>
        <ul>
          <li><a href="#">product 1</a></li>
          <li><a href="#">product 2</a></li>
          <li><a href="#">product 3</a></li>
        </ul>
      </div>
      <div className="footer-center">
        <h3>CONTACT</h3>
        <ul>
          <li><a href="#">Phone: 551-19-05-25</a></li>
          <li><a href="https://mail.google.com/mail/u/1/#inbox">Email: SabaTsimintia22@gmail.com</a></li>
          <li><a href="https://www.google.com/maps/dir//73+Iona+Meunargia+St,+T'bilisi/@41.7222671,44.8030033,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40440d344427c217:0xf1f6138e34aafa52!2m2!1d44.8055782!2d41.7222631">Address: Tbilisi,iona meunargia street,</a></li>
        </ul>
      </div>
      <div className="footer-right">
        <h3>SOCIAL NETWORKS</h3>
        <ul>
          <li><a href="https://www.facebook.com/saba.tsimintia22">Facebook</a></li>
          <li><a href="https://www.tiktok.com/@react.developer">Tiktok</a></li>
          <li><a href="https://www.instagram.com/saba_tsimintia/">Instagram</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; copyright</p>
      </div>
      
    </footer>
  );
}

export default Footer;
