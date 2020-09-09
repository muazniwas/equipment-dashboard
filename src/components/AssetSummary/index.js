import React from 'react';
import TopCard from '../TopCard';
import './styles.css'

const AssetSummary = ({operational, nonOperational}) => {
    return (
        <div className="Equip-count">
          <TopCard label="Operational" value={operational} />
          <TopCard label="Non-Operational" value={nonOperational} />
        </div>
    );
}

export default AssetSummary;