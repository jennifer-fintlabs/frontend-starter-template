// App.tsx
import React from 'react';
import { MyContextProvider } from './data/MyContext';
import Main from './features/Main';

function AppWrapper() {
    return (
        <MyContextProvider>
            <Main />
        </MyContextProvider>
    );
}

export default AppWrapper;
// For deployment of a podlet, read here:
// https://fintlabs.atlassian.net/wiki/spaces/FINTKB/pages/526877044/Hvordan+lage+en+Podlet