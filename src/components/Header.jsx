import logo from '../assets/logo.png'
import Navigation from '../components/Navigation';
import '../style/components/header.scss'

const Header = () => {
    return (
        <header className='header'>
			<h1>
				<img src={logo} alt="logo de Kasa" />
			</h1>
			<Navigation />
		</header>
    );
};

export default Header;