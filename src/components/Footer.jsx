import React from 'react';
import logo from '../assets/logo.png';
import '../style/components/footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
			<img src={logo} alt="Kasa - agence de location d'appartements entre particuliers" />
			<p className='footer_copyright'>© 2020 Kasa. All rights reserved</p>
		</footer>
    );
};

export default Footer;