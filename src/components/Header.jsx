import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import Navigation from '../components/Navigation';
import '../style/components/header.scss'

const Header = () => {
    return (
        <header className='header'>
			<Link to="/">
				<img src={logo} alt="logo de Kasa" />
			</Link>
			<Navigation />
		</header>
    );
};

export default Header;