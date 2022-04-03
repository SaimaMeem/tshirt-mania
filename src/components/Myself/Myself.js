import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Myself = ({house}) => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h2>Myself</h2>
            <p>House: {house}</p>
            <p>Ornament: {ring}</p>
        </div>
    );
};

export default Myself;