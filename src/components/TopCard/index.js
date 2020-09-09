import React from 'react';
import './styles.css'

const TopCard = ({ label, value }) => {
    return (
        <div className="Equip-count-divs">
            <p className="Equip-count-vals">{label}</p>
            <p className="Equip-count-vals">{value}</p>
        </div>
    );
}

export default TopCard;