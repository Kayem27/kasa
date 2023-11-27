import React from 'react';
import { Link } from 'react-router-dom'
import '../style/components/card.scss'

const Card = ({id, cover, title}) => {
    return (
        <Link to={`/details/${id}`} className="card">
			<img src={cover} alt={title} />
			<h3>{title}</h3>	
		</Link>
    );
};

export default Card;