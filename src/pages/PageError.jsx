import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../style/pages/pageError.scss'

const pageError = () => {
    return (
        <>
        <div className='Error'>
            <Header />
            <div className="Error_infos">
				<h1 className='Error_infos_title'>404</h1>
				<p className='Error_infos_content'>La page que vous recherchez n'existe pas.</p>
			</div>
				<Link className='Error_infos_return' to='/'>Retourner sur la page d'accueil</Link>
        </div>
        <Footer />
        </>
    );
};

export default pageError;