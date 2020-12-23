import React from 'react';

const CountdownCol = ({ value, label }) => {
    if (!label || !value) return null;
    return (
        <div className="countdown-col">
          <div className="countdown-col__value">{value}</div>
          <div className="countdown-col__label">{label}</div>
        </div>
    )
}

export default CountdownCol;
