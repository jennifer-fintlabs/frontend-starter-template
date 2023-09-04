import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchData } from './api';
import { MyData } from './types';

export const MyContext = createContext<MyData | undefined>(undefined);

export const useMyContext = () => {
    const context = useContext(MyContext);
    // if (context === undefined) {
    //     throw new Error('useMyContext must be used within a MyContextProvider');
    // }
    return context;
};

type MyContextProviderProps = {
    children: React.ReactNode;
};

export const MyContextProvider = ({ children }: MyContextProviderProps) => {
    const [data, setData] = useState<MyData | undefined>(undefined);

    useEffect(() => {
        fetchData()
            .then((responseData) => {
                setData(responseData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
};
