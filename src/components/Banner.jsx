import React from 'react';
import '../style/components/banner.scss';

const Banner = ({page}) => {
    return (
        <section className={page =="about" ? 'banner_about' : 'banner'}>
			{page=="home" && <p>Chez vous, partout et ailleurs</p>}
		</section>
    );
};

export default Banner;