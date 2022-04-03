import React, { createContext } from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
export const HudaiContext = createContext('jani na');
const Father = ({ house }) => {
    return (
        <HudaiContext.Provider value='dekhi'>
            <div>
                <h2>Father</h2>
                <h3>House: {house}</h3>
                <div>
                    <Myself house={house}></Myself>
                    <Brother house={house}></Brother>
                    <Sister house={house}></Sister>
                </div>
            </div>
        </HudaiContext.Provider>
    );
};

export default Father;