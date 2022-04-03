import React, { useContext } from 'react';
import { TestContext } from '../Brother/Brother';

const Aunty = () => {
    const temp = useContext(TestContext);
    return (
        <div>
            <h2>Aunty</h2>
            {temp}
        </div>
    );
};

export default Aunty;