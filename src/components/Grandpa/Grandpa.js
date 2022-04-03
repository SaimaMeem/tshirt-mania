import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';
export const RingContext = createContext('diamond');
const Grandpa = () => {
    let [house, setHouse] = useState(1);
    const buyHouse = () => {
        house++;
        setHouse(house);
    }
    return (
        <RingContext.Provider value='alur ring'>
            <div>
                <h2>Grandpa</h2>
                <button onClick={() => buyHouse()}>Buy a House</button>
                <div className='grandpa' style={{ display: 'flex' }}> 
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;