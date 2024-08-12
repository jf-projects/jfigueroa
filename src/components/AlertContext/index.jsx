// AlertContext.js
import React, { createContext, useState, useContext } from 'react';
import CustomAlert from '../CustomAlert';

const AlertContext = createContext();

export const useAlert = () => {
    return useContext(AlertContext);
};

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState({ message: '', type: '' });

    const showAlert = (message, type) => {
        setAlert({ message, type });
        setTimeout(() => setAlert({ message: '', type: '' }), 3000); // Hide alert after 3 seconds
    };

    return (
        <AlertContext.Provider value={{ showAlert }}>
            {children}
            {alert.message && (
                <CustomAlert message={alert.message} type={alert.type} />
            )}
        </AlertContext.Provider>
    );
};
