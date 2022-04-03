import React, { createContext, useContext } from 'react';
import { HudaiContext } from '../Father/Father';
export const TestContext = createContext('check');
const Brother = () => {
    const dekhi = useContext(HudaiContext);
    return (
        <TestContext.Provider value='testing'>
            <div>
                <h2>Brother</h2>
                <p>{dekhi}</p>
            </div>
        </TestContext.Provider>
    );
};

export default Brother;