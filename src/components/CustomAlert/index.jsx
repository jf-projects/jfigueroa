import React from 'react';

const CustomAlert = ({ message, type }) => {
    return (
        <div className={`fixed mt-8 top-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-lg p-4 rounded-md shadow-lg text-white ${
            type === 'success' ? 'bg-green-400' : 'bg-red-400'
        }`}>
            {message}
        </div>
    );
};

export default CustomAlert;
