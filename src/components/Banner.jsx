import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../style/components/banner.scss';

const Banner = () => {
    const [PageAbout, setPageAbout] = useState(false);

	const location = useLocation();
	
	useEffect(() => {
		if(location.pathname === '/about'){
			setPageAbout(true)
		};
	}, [])

    return (
        <section className={PageAbout ? 'banner_about' : 'banner'}>
			{!PageAbout && <p>Chez vous, partout et ailleurs</p>}
		</section>
    );
};

export default Banner;